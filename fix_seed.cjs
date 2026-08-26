const fs = require('fs');
const path = require('path');

const json = fs.readFileSync('public/data/decrees.json', 'utf8');

const script = `
var seedDataArray = ${json};
function doSeed() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName('Decrees') || ss.getSheets()[0];
  sheet.clear();
  sheet.setName('Decrees');
  
  var headers = ['id', 'decree_number', 'title', 'summary', 'category', 'issued_date', 'effective_date', 'status', 'source_url', 'pdf_url', 'content_url'];
  sheet.appendRow(headers);
  sheet.getRange(1, 1, 1, 11).setFontWeight('bold').setBackground('#f3f4f6');
  sheet.setFrozenRows(1);
  
  var rows = [];
  for (var i = 0; i < seedDataArray.length; i++) {
    var item = seedDataArray[i];
    var rowData = [];
    for (var j = 0; j < headers.length; j++) {
      rowData.push(item[headers[j]] !== undefined ? item[headers[j]] : '');
    }
    rows.push(rowData);
  }
  
  sheet.getRange(2, 1, rows.length, 11).setValues(rows);
  sheet.autoResizeColumns(1, 11);
}
`;

fs.writeFileSync('../db-tra-cuu/seedData.js', script, 'utf8');