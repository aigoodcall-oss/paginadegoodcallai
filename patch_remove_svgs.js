const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// The giant SVGs look like: <svg viewBox="0 0 24 24" ...</svg> at the start of the sections
content = content.replace(/<section id="wsp-ia"[^>]*>\s*<svg viewBox="0 0 24 24"[^>]*>[\s\S]*?<\/svg>/g, '<section id="wsp-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #ffffff;">');

content = content.replace(/<section id="voice-ia"[^>]*>\s*<svg viewBox="0 0 24 24"[^>]*>[\s\S]*?<\/svg>/g, '<section id="voice-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #f8fafc;">');

content = content.replace(/<section id="diseno-web"[^>]*>\s*<svg viewBox="0 0 24 24"[^>]*>[\s\S]*?<\/svg>/g, '<section id="diseno-web" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(0,0,0,0.05); background: #ffffff;">');

fs.writeFileSync(file, content, 'utf8');
console.log("Giant SVGs removed and alternating backgrounds applied!");
