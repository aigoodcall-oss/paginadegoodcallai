const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the Title Colors
content = content.replace(
    /Good Call <span style="background: linear-gradient\(90deg, #25D366, #0ea5e9\); -webkit-background-clip: text; color: transparent;">AI<\/span>/g,
    '<span style="color: #000000;">Good Call</span> <span style="color: #0ea5e9;">AI</span>'
);

// 2. Add Stats and more info into the Hero
const heroPRegex = /<p style="font-size: 1\.3rem; color: var\(--ink-2\); max-width: 600px; margin: 0 auto 40px; line-height: 1\.6;">[\s\S]*?<\/p>/;

const newHeroInfo = `<p style="font-size: 1.3rem; color: var(--ink-2); max-width: 700px; margin: 0 auto 30px; line-height: 1.6;">
          El ecosistema digital definitivo. Automatizamos tu atención al cliente con Inteligencia Artificial y construimos tu presencia web corporativa para escalar tus ventas de forma automática.
        </p>

        <!-- Stats Bar -->
        <div style="display: flex; justify-content: center; gap: 20px; flex-wrap: wrap; margin-bottom: 60px;">
          <div style="border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; padding: 20px 30px; background: #ffffff; box-shadow: 0 15px 35px rgba(0,0,0,0.04); display: flex; flex-direction: column; align-items: center; min-width: 180px;">
            <div style="font-size: 2.5rem; font-weight: 900; color: #25D366; line-height: 1;">24/7</div>
            <div style="font-size: 0.85rem; color: var(--ink-3); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 8px;">Atención Continua</div>
          </div>
          
          <div style="border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; padding: 20px 30px; background: #ffffff; box-shadow: 0 15px 35px rgba(0,0,0,0.04); display: flex; flex-direction: column; align-items: center; min-width: 180px;">
            <div style="font-size: 2.5rem; font-weight: 900; color: #a855f7; line-height: 1;">+300%</div>
            <div style="font-size: 0.85rem; color: var(--ink-3); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 8px;">Cierre de Ventas</div>
          </div>
          
          <div style="border: 1px solid rgba(0,0,0,0.08); border-radius: 20px; padding: 20px 30px; background: #ffffff; box-shadow: 0 15px 35px rgba(0,0,0,0.04); display: flex; flex-direction: column; align-items: center; min-width: 180px;">
            <div style="font-size: 2.5rem; font-weight: 900; color: #0ea5e9; line-height: 1;">0.1s</div>
            <div style="font-size: 0.85rem; color: var(--ink-3); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; margin-top: 8px;">Tiempo de Respuesta</div>
          </div>
        </div>
`;

content = content.replace(heroPRegex, newHeroInfo);

// Also fix the Footer logo just in case, "Good Call AI"
content = content.replace(
    /<h2 style="font-size: 2\.5rem; font-weight: 900; background: linear-gradient\(90deg, #25D366, #0ea5e9\); -webkit-background-clip: text; color: transparent; margin:0;">Good Call AI<\/h2>/g,
    '<h2 style="font-size: 2.5rem; font-weight: 900; margin:0;"><span style="color: #000000;">Good Call</span> <span style="color: #0ea5e9;">AI</span></h2>'
);

fs.writeFileSync(file, content, 'utf8');
console.log("Hero info, stats, and logo colors updated!");
