const fs = require('fs');
const path = './registry/legal-corpus.json';
let corpus = JSON.parse(fs.readFileSync(path, 'utf8'));

const newDocs = [
  '57/2024/QH15', '90/2025/QH15', '24/2024/NÐ-CP', '79/2025/TT-BTC',
  '98/2021/NÐ-CP', '07/2023/NÐ-CP', '96/2023/NÐ-CP', '85/2024/NÐ-CP', '342/2025/NÐ-CP',
  '05/2022/TT-BYT', '59/2025/TT-BYT', 'Lu?t Giá 2023', '43/2017/NÐ-CP', '111/2021/NÐ-CP',
  '20/2025/NÐ-CP'
];

newDocs.forEach((doc, idx) => {
  const id = 'new-doc-' + idx;
  if (!corpus.find(c => c.officialNumber === doc)) {
    corpus.push({
      id: id,
      officialNumber: doc,
      issuer: 'TBD',
      title: 'TBD ' + doc,
      dates: { issueDate: null, effectiveDate: null, implementationDate: null, consolidationDate: null },
      scope: { category: 'tbd' },
      candidateSources: [],
      requiredAttachments: [],
      expectedStructure: []
    });
  }
});

fs.writeFileSync(path, JSON.stringify(corpus, null, 2));
console.log('Added ' + newDocs.length + ' documents. Total: ' + corpus.length);
