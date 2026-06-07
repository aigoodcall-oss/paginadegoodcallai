const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
    '<section id="wsp-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #ffffff;">',
    '<section id="wsp-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #f1f5f9;">'
);

content = content.replace(
    '<section id="voice-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #f1f5f9;">',
    '<section id="voice-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #ffffff;">'
);

content = content.replace(
    '<section id="diseno-web" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #ffffff;">',
    '<section id="diseno-web" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #f1f5f9;">'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Section backgrounds swapped successfully!");
