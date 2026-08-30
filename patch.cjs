const fs = require('fs');
let code = fs.readFileSync('src/pages/LibraryPage.tsx', 'utf8');

const newRender = `        <div className="flex-1">
          {isLoading ? (
            <div className="text-center py-20 text-muted-foreground">Đang tải dữ liệu...</div>
          ) : (
            <div className="space-y-12">
              {TAX_FIELDS.map(taxField => {
                const decrees = finalDecrees.filter(d => 
                  d.tax_field === taxField.slug || 
                  (taxField.slug === 'khac' && !d.tax_field)
                );
                
                if (decrees.length === 0) return null;
                
                // Sort: luat -> nghi-dinh -> thong-tu -> ...
                const catOrder: Record<string, number> = { 'luat': 1, 'nghi-dinh': 2, 'thong-tu': 3, 'chuan-muc': 4, 'quyet-dinh': 5 };
                decrees.sort((a, b) => {
                  const orderA = catOrder[a.category] || 99;
                  const orderB = catOrder[b.category] || 99;
                  if (orderA !== orderB) return orderA - orderB;
                  return new Date(b.issued_date).getTime() - new Date(a.issued_date).getTime();
                });
                
                return (
                  <div key={taxField.slug} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="flex items-center gap-3 mb-6 pb-2 border-b border-border/50">
                      <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xl shadow-sm">
                        {taxField.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">{taxField.name}</h2>
                        <p className="text-sm text-muted-foreground">{decrees.length} văn bản</p>
                      </div>
                    </div>
                    
                    <div className={\`grid gap-4 \${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}\`}>
                      {decrees.map(decree => (
                        <DecreeCard key={decree.id} decree={decree} viewMode={viewMode} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          
          {finalDecrees.length === 0 && !isLoading && (
            <div className="text-center py-20 bg-card border border-border rounded-xl border-dashed">
              <p className="text-muted-foreground">Không có văn bản nào trong danh mục này.</p>
            </div>
          )}
        </div>`;

// Replace from '        <div className="flex-1">' to the end of the flex-1 div
const startIndex = code.indexOf('        <div className="flex-1">');
const endIndex = code.indexOf('      </div>\n    </div>\n  );\n}');
if (startIndex !== -1 && endIndex !== -1) {
  const newCode = code.substring(0, startIndex) + newRender + '\n' + code.substring(endIndex);
  fs.writeFileSync('src/pages/LibraryPage.tsx', newCode, 'utf8');
  console.log('Successfully replaced and saved!');
} else {
  console.log('Could not find start or end index!');
}
