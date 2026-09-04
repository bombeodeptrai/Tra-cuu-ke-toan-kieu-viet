import { DecreeDiffData, DiffItem } from './diff-types';
import { group1Accounting } from './diffs/group1_accounting';
import { group2InvoicesTaxAdmin } from './diffs/group2_invoices_tax_admin';
import { group3CorporatePersonalTax } from './diffs/group3_corporate_personal_tax';
import { group4LaborSalaryContracts } from './diffs/group4_labor_salary_contracts';
import { group5ResourcesFeesGeneral } from './diffs/group5_resources_fees_general';

export type { DecreeDiffData, DiffItem };

export const DIFF_DATABASE: Record<string, DecreeDiffData> = {
  ...group1Accounting,
  ...group2InvoicesTaxAdmin,
  ...group3CorporatePersonalTax,
  ...group4LaborSalaryContracts,
  ...group5ResourcesFeesGeneral,
};
