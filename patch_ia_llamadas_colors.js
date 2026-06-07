const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-llamadas.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the gcOfferOverlay completely
const gcOfferStart = content.indexOf('<div id="gcOfferOverlay"');
if(gcOfferStart > -1) {
    const gcOfferEnd = content.indexOf('</div>', content.indexOf('</div>', content.indexOf('</div>', content.indexOf('</div>', content.indexOf('</div>', content.indexOf('</div>', gcOfferStart) + 1) + 1) + 1) + 1) + 1) + 6;
    // Actually, since the overlay contains multiple nested divs, let's just find the start of `<script>` tags which comes right after the overlay in index.html
    const scriptStart = content.indexOf('<script>', gcOfferStart);
    if(scriptStart > -1) {
        content = content.substring(0, gcOfferStart) + content.substring(scriptStart);
    }
}

// 2. Change the dark Hero section to light
// <section id="hero" style="background:#020617;
content = content.replace('background:#020617;', 'background:#f8fafc;');
// <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight:900; color:#fff;
content = content.replace('color:#fff;', 'color:#0f172a;');
// <p style="font-size:1.1rem; color:rgba(255,255,255,0.7);
content = content.replace('color:rgba(255,255,255,0.7);', 'color:#475569;');

// 3. Change the dark Pack 2 section to light
// <section style="background:#0f172a; padding:100px 0; color:#fff;">
content = content.replace('background:#0f172a; padding:100px 0; color:#fff;', 'background:#f1f5f9; padding:100px 0; color:#0f172a;');
// <h3 style="font-size:2.5rem; font-weight:800; color:#fff; margin-bottom:10px; line-height:1.1;">Pack 2 Asesores</h3>
content = content.replace('color:#fff; margin-bottom:10px; line-height:1.1;">Pack 2 Asesores', 'color:#0f172a; margin-bottom:10px; line-height:1.1;">Pack 2 Asesores');
// <h4 style="color:#fff; font-size:0.95rem; font-weight:700; margin-bottom:4px;">Nota sobre Voz Clonada</h4>
content = content.replace('color:#fff; font-size:0.95rem; font-weight:700; margin-bottom:4px;">Nota sobre Voz Clonada', 'color:#0f172a; font-size:0.95rem; font-weight:700; margin-bottom:4px;">Nota sobre Voz Clonada');
// <p style="font-size:1.1rem; color:#94a3b8; margin-bottom:30px; line-height:1.6;">Para negocios en crecimiento
content = content.replace('color:#94a3b8; margin-bottom:30px; line-height:1.6;">Para negocios en crecimiento', 'color:#475569; margin-bottom:30px; line-height:1.6;">Para negocios en crecimiento');
// <ul style="list-style:none; padding:0; margin:0 0 30px; font-size:1.05rem; color:#cbd5e1;
content = content.replace('color:#cbd5e1; display:flex;', 'color:#334155; display:flex;');
// <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-left:4px solid #60a5fa;
content = content.replace('background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-left:4px solid #60a5fa;', 'background:rgba(59,130,246,0.05); border:1px solid rgba(59,130,246,0.2); border-left:4px solid #60a5fa;');
// <p style="font-size:0.85rem; color:#94a3b8; margin:0;">Si deseas que la IA
content = content.replace('color:#94a3b8; margin:0;">Si deseas que la IA', 'color:#475569; margin:0;">Si deseas que la IA');

// Clean up any remaining popup scripts
// Look for `document.addEventListener('DOMContentLoaded', () => {` that initializes `gcOfferOverlay`
content = content.replace(/const overlay = document\.getElementById\('gcOfferOverlay'\);[\s\S]*?\}\);/, '');

fs.writeFileSync(file, content, 'utf8');
console.log("ia-llamadas.html dark colors removed and popup removed successfully!");
