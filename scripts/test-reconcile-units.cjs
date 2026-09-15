const fs = require('fs');
const assert = require('node:assert/strict');
const vm = require('vm');
const ts = require('typescript');

function loadTsModule(filePath) {
  const code = fs.readFileSync(filePath, 'utf8');
  const transpiled = ts.transpileModule(code, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;

  const sandbox = {
    require: (pkg) => {
      if (pkg === 'decimal.js') return require('decimal.js');
      if (pkg.includes('audit-issues')) return {};
      if (pkg.includes('audit-legal-rules')) {
        return loadTsModule('src/data/audit-legal-rules.ts');
      }
      return {};
    },
    exports: {},
    module: { exports: {} },
    console
  };
  vm.runInNewContext(transpiled, sandbox);
  return sandbox.module.exports.default || sandbox.exports;
}

console.log('--- Testing Reconciliation Engine Units ---');
const reconcile = loadTsModule('src/lib/audit/reconcile.ts');

// 1. Decimal calculation: remaining
const rem1 = reconcile.remaining('100', ['20', '30']);
assert.equal(rem1.toString(), '50', 'remaining: 100 - 20 - 30 = 50');

// 2. checkAllocation
assert.doesNotThrow(() => reconcile.checkAllocation('100', ['20', '30'], '50'), 'checkAllocation should pass for exact remaining');
assert.throws(() => reconcile.checkAllocation('100', ['20', '30'], '51'), /Phân bổ vượt phần còn lại/);
assert.throws(() => reconcile.checkAllocation('100', ['20'], '-5'), /Lượng phân bổ phải dương/);
assert.throws(() => reconcile.checkAllocation('100', ['20'], '0'), /Lượng phân bổ phải dương/);

// 3. stockDifference
const diff1 = reconcile.stockDifference('100', '70');
assert.equal(diff1, '-30', 'stockDifference: 70 - 100 = -30');

// 4. marginSignal
const m1 = reconcile.marginSignal('100', '80');
assert.equal(m1.state, 'no_negative_margin');
assert.equal(m1.margin, '20');

const m2 = reconcile.marginSignal('80', '100');
assert.equal(m2.state, 'signal');
assert.equal(m2.margin, '-20');

const m3 = reconcile.marginSignal('80', null);
assert.equal(m3.state, 'insufficient_data');

// 5. 12 Independent Rule Tests
console.log('Testing 12 Independent Reconciliation Rules...');
const ctx = {
  caseId: 'TEST_CASE',
  issueId: 'S01',
  deliveries: [
    { id: 'd1', deliveryNo: 'PXK01', sku: 'WOOD_CHAIR', quantity: '100' },
    { id: 'd2', deliveryNo: 'PXK02', sku: 'WOOD_TABLE', quantity: '50' }
  ],
  invoices: [
    { id: 'inv1', number: '0000001', sku: 'WOOD_CHAIR', quantity: '80', price: '90', lifecycle: 'original' },
    { id: 'inv2', number: '0000002', sku: 'GHOST_ITEM', quantity: '10', price: '100', lifecycle: 'original' },
    { id: 'inv3', number: '0000003', sku: 'INVALID_CHAIN', quantity: '5', lifecycle: 'adjusted' } // no parentId
  ],
  agreements: [
    { sku: 'WOOD_CHAIR', contractPrice: '100' } // price mismatch: inv price 90 vs contract 100
  ],
  payments: [
    { id: 'pay1', gross: '120', allocated: ['100'] } // 20 unallocated
  ],
  stocks: [
    { date: '2026-03-15', sku: 'WOOD_CHAIR', balance: '-5' } // negative stock
  ],
  physicalCounts: [
    { sku: 'WOOD_CHAIR', book: '100', actual: '70' } // stock count diff -30
  ],
  wipItems: [
    { id: 'wip1', objectCode: 'unassigned', cost154: '50000000', acceptedAmount: '0' }, // cost object missing
    { id: 'wip2', objectCode: 'PROJECT_A', cost154: '30000000', acceptedAmount: '30000000' }, // accepted but wip hangs
    { id: 'wip3', objectCode: 'WOOD_CHAIR', cost154: '120', acceptedAmount: '0' } // cost 120 vs inv price 90 (below cost)
  ],
  offsets: [
    { id: 'off1', parties: ['Cty A', 'Cty B'], amount: '500000000', hasSignedAgreement: false } // offset evidence missing
  ]
};

const findings = reconcile.runReconciliationRules(ctx);
console.log(`Generated ${findings.length} findings.`);

const ruleIdsFound = new Set(findings.map(f => f.ruleId));
const requiredRules = [
  'UNBILLED_DELIVERY',
  'INVOICE_WITHOUT_DELIVERY',
  'QUANTITY_MISMATCH',
  'PRICE_AGREEMENT_MISMATCH',
  'PAYMENT_UNALLOCATED',
  'NEGATIVE_STOCK',
  'STOCK_COUNT_DIFFERENCE',
  'INVOICE_CHAIN_INVALID',
  'COST_OBJECT_MISSING',
  'ACCEPTED_WORK_STILL_WIP',
  'BELOW_COST',
  'OFFSET_EVIDENCE_MISSING'
];

for (const r of requiredRules) {
  assert.ok(ruleIdsFound.has(r), `Missing expected rule finding: ${r}`);
  console.log(`  ✓ Rule ${r}: Verified`);
}
assert.equal(ruleIdsFound.size, 12, 'Must have exactly 12 distinct rule IDs active');

// 6. Test Legal Period Resolver
console.log('\n--- Testing Legal Period Resolver ---');
const legalPeriod = loadTsModule('src/lib/audit/legal-period.ts');
const resolveResult1 = legalPeriod.resolveLegalRule({
  transactionDate: '2024-05-10',
  taxType: 'invoice',
  topic: 'RULE_INV_DELIVERY_TIMING'
});
assert.ok(resolveResult1.status === 'applicable' && resolveResult1.rule.status === 'verified', 'RULE_INV_DELIVERY_TIMING should be applicable and verified');
console.log('  ✓ resolveLegalRule for RULE_INV_DELIVERY_TIMING: Verified & Applicable');

const resolveResult2 = legalPeriod.resolveLegalRule({
  transactionDate: '2026-08-01',
  taxType: 'procedure',
  topic: 'RULE_TAX_SUPPLEMENT_DECLARATION'
});
assert.ok(resolveResult2.status === 'applicable' && resolveResult2.rule.status === 'verified', 'RULE_PROC_SUPPLEMENTARY_DECL should be applicable and verified');
console.log('  ✓ resolveLegalRule for RULE_PROC_SUPPLEMENTARY_DECL: Verified & Applicable');

console.log('\n✅ ALL RECONCILIATION & LEGAL RESOLVER UNIT TESTS PASSED (12/12 Rules).');
