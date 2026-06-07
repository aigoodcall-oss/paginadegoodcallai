const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

const heroStart = content.indexOf('<div style="text-align: center; margin-bottom: 80px; animation: fadeUp');
const heroEnd = content.indexOf('</div>\n\n    <div class="services-grid">');

if (heroStart !== -1 && heroEnd !== -1) {
    const newHeroBlock = `<div style="text-align: center; margin-bottom: 90px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; width:100%; display:flex; flex-direction:column; align-items:center;">
      <h1 style="font-size: 4rem; font-weight: 900; line-height:1.1; margin-bottom: 25px; color: var(--ink-1); max-width:900px;">
        Escala tu empresa con <span style="color: #000000;">Good Call</span> <span style="color: #0ea5e9;">AI</span>
      </h1>
      <p style="font-size: 1.3rem; color: var(--ink-2); font-weight:500; margin-bottom:50px; max-width:700px; line-height:1.6;">
        El ecosistema digital definitivo. Automatizamos tu atenci&oacute;n al cliente con Inteligencia Artificial y construimos tu presencia web corporativa para que vendas m&aacute;s, las 24 horas del d&iacute;a, sin esfuerzo.
      </p>
      
      <!-- Big Stats Row -->
      <div style="display: flex; justify-content: center; gap: 25px; flex-wrap: wrap;">
        <div style="border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; padding: 25px 35px; background: #ffffff; box-shadow: 0 15px 35px rgba(0,0,0,0.04); display: flex; flex-direction: column; align-items: center; min-width: 200px;">
          <div style="font-size: 2.8rem; font-weight: 900; color: #25D366; line-height: 1; margin-bottom: 8px;">24/7</div>
          <div style="font-size: 0.9rem; color: var(--ink-3); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Atenci&oacute;n Continua</div>
        </div>
        
        <div style="border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; padding: 25px 35px; background: #ffffff; box-shadow: 0 15px 35px rgba(0,0,0,0.04); display: flex; flex-direction: column; align-items: center; min-width: 200px;">
          <div style="font-size: 2.8rem; font-weight: 900; color: #a855f7; line-height: 1; margin-bottom: 8px;">+300%</div>
          <div style="font-size: 0.9rem; color: var(--ink-3); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Cierre de Ventas</div>
        </div>
        
        <div style="border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; padding: 25px 35px; background: #ffffff; box-shadow: 0 15px 35px rgba(0,0,0,0.04); display: flex; flex-direction: column; align-items: center; min-width: 200px;">
          <div style="font-size: 2.8rem; font-weight: 900; color: #0ea5e9; line-height: 1; margin-bottom: 8px;">0.1s</div>
          <div style="font-size: 0.9rem; color: var(--ink-3); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">Tiempo Respuesta</div>
        </div>
      </div>
    `;
    
    // Replace the block
    content = content.slice(0, heroStart) + newHeroBlock + content.slice(heroEnd);
    fs.writeFileSync(file, content, 'utf8');
    console.log("Real Hero updated successfully!");
} else {
    console.log("Could not find hero boundaries.");
}
