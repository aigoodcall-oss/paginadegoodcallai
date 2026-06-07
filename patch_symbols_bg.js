const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Remove the global body ambient grid
content = content.replace(
    /body \{\s*background-color: var\(--bg\); \/\* Fallback to theme bg \*\/\s*background-image: radial-gradient\(rgba\(0, 0, 0, 0\.04\) 1px, transparent 1px\);\s*background-size: 30px 30px;\s*\}/g,
    'body { background-color: var(--bg); }'
);

// Remove the ambient-glow class definition
content = content.replace(/\.ambient-glow \{\s*position: absolute;\s*border-radius: 50%;\s*filter: blur\(150px\);\s*z-index: 0;\s*pointer-events: none;\s*opacity: 0\.5;\s*\}/g, '');

// 2. WSP Section
// Remove gradient and glows, replace with WSP symbol
const wspSymbol = `<svg viewBox="0 0 24 24" fill="currentColor" style="position:absolute; top:-5%; right:-10%; width:800px; height:800px; color:#25D366; opacity:0.04; z-index:0; pointer-events:none; transform:rotate(-15deg);"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>`;
content = content.replace(
    /<section id="wsp-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba\(255,255,255,0\.05\); background: linear-gradient\(180deg, rgba\(255,255,255,0\) 0%, rgba\(37,211,102,0\.05\) 100%\);">\s*<div class="ambient-glow".*?>.*?<\/div>\s*<div class="ambient-glow".*?>.*?<\/div>/g,
    `<section id="wsp-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05); background: transparent;">
  ${wspSymbol}`
);

// 3. Voice Section
const voiceSymbol = `<svg viewBox="0 0 24 24" fill="currentColor" style="position:absolute; top:20%; left:-10%; width:800px; height:800px; color:#a855f7; opacity:0.04; z-index:0; pointer-events:none; transform:rotate(10deg);"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zm-1 3a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0V4zm-4 8a5 5 0 0 0 10 0h2a7 7 0 0 1-6 6.93V21h2v2H9v-2h2v-2.07A7 7 0 0 1 5 12H7z"/></svg>`;
content = content.replace(
    /<section id="voice-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba\(255,255,255,0\.05\); background: linear-gradient\(180deg, rgba\(255,255,255,0\.6\) 0%, rgba\(168,85,247,0\.08\) 100%\); backdrop-filter: blur\(8px\);">\s*<div class="ambient-glow".*?>.*?<\/div>\s*<div class="ambient-glow".*?>.*?<\/div>/g,
    `<section id="voice-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05); background: transparent;">
  ${voiceSymbol}`
);

// 4. Web Section
const webSymbol = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round" style="position:absolute; top:10%; right:-5%; width:900px; height:900px; color:#0ea5e9; opacity:0.04; z-index:0; pointer-events:none; transform:rotate(-10deg);"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
content = content.replace(
    /<section id="diseno-web" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba\(255,255,255,0\.05\); background: linear-gradient\(180deg, rgba\(255,255,255,0\) 0%, rgba\(14,165,233,0\.05\) 100%\);">\s*<div class="ambient-glow".*?>.*?<\/div>/g,
    `<section id="diseno-web" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05); background: transparent;">
  ${webSymbol}`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Ambient replaced with giant background symbols!");
