const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Increase spacing and add Stats row
const newTextContainer = `<div style="text-align: center; margin-bottom: 80px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; width:100%; display:flex; flex-direction:column; align-items:center;">
      <h1 style="font-size: 3.5rem; font-weight: 900; line-height:1.2; margin-bottom: 20px; color: var(--ink-1); max-width:800px;">
        Escala tu empresa con <span style="color: transparent; background: linear-gradient(90deg, #25D366, #0ea5e9); -webkit-background-clip: text;">Good Call AI</span>
      </h1>
      <p style="font-size: 1.25rem; color: var(--ink-2); font-weight:500; margin-bottom:40px;">Elige tu próximo motor de crecimiento automático.</p>
      
      <!-- Stats Row -->
      <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:30px; background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.1); padding:20px 40px; border-radius:100px; box-shadow:0 10px 30px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.2); backdrop-filter:blur(10px); animation: fadeUp 1s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;">
        <div style="text-align:center;">
          <span style="display:block; font-size:1.5rem; font-weight:900; color:var(--ink-1);">+250</span>
          <span style="font-size:0.85rem; color:var(--ink-3); text-transform:uppercase; letter-spacing:0.05em; font-weight:700;">Empresas Escaladas</span>
        </div>
        <div style="width:1px; background:rgba(0,0,0,0.1); margin:0 10px;"></div>
        <div style="text-align:center;">
          <span style="display:block; font-size:1.5rem; font-weight:900; color:#25D366;">+1.5M</span>
          <span style="font-size:0.85rem; color:var(--ink-3); text-transform:uppercase; letter-spacing:0.05em; font-weight:700;">Mensajes y Llamadas IA</span>
        </div>
        <div style="width:1px; background:rgba(0,0,0,0.1); margin:0 10px;"></div>
        <div style="text-align:center;">
          <span style="display:block; font-size:1.5rem; font-weight:900; color:#0ea5e9;">99%</span>
          <span style="font-size:0.85rem; color:var(--ink-3); text-transform:uppercase; letter-spacing:0.05em; font-weight:700;">Satisfacción B2B</span>
        </div>
      </div>
    </div>`;

console.log("Replacing text container...");
content = content.replace(/<div style="text-align: center; margin-bottom: 60px;[\s\S]*?<\/div>/, newTextContainer);

// 2. Make the cards more 3D and floating
const oldCardStyleRegex = /background:var\(--bg-card\); border:1px solid var\(--border\); padding:24px; border-radius:24px; transition:all 0\.4s cubic-bezier\(0\.22, 1, 0\.36, 1\); box-shadow:0 10px 40px rgba\(0,0,0,0\.1\);/g;
const newCardStyle = 'background:var(--bg-card); border:1px solid rgba(255,255,255,0.1); padding:24px; border-radius:24px; transition:all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow:0 30px 60px rgba(0,0,0,0.12), 0 10px 20px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.4); transform: translateY(-5px); perspective: 1000px;';

content = content.replace(oldCardStyleRegex, newCardStyle);

// 3. Fix hover transforms to pop out more in 3D
content = content.replace(/onmouseover="this\.style\.transform='translateY\(-10px\)'/g, `onmouseover="this.style.transform='translateY(-15px) scale(1.02)'`);
content = content.replace(/onmouseout="this\.style\.transform='translateY\(0\)'/g, `onmouseout="this.style.transform='translateY(-5px) scale(1)'`);

fs.writeFileSync(file, content, 'utf8');
console.log("Applied spacing, stats, and 3D floating effects!");
