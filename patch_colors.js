const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// The new cards with distinct colors
const newVoiceCards = `
    <!-- Pricing 3 columns -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
      
      <!-- Plan 1 (Blue) -->
      <div style="background: var(--bg-card); border: 1px solid rgba(14,165,233,0.2); border-radius: 24px; padding: 40px 30px; text-align: center; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 15px 35px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 30px 60px rgba(14,165,233,0.2)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.1)'">
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Plan 1</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px; min-height:40px;">Ideal para negocios que inician en automatización telefónica.</p>
        <div style="font-size: 3.5rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>350</div>
        <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
        <div style="background: rgba(14,165,233,0.1); color: #0ea5e9; padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1.2rem; margin-bottom: 30px;">1 IA Exclusiva</div>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #0ea5e9; color: #0ea5e9; padding: 15px; border-radius: 12px; font-weight: 800; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.background='#0ea5e9'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#0ea5e9';">ELEGIR PLAN 1</a>
      </div>

      <!-- Plan 2 (Purple) -->
      <div style="background: var(--bg-card); border: 2px solid #a855f7; border-radius: 24px; padding: 40px 30px; text-align: center; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 20px 50px rgba(168,85,247,0.15); transform: scale(1.03); position: relative;" onmouseover="this.style.transform='translateY(-15px) scale(1.05)'; this.style.boxShadow='0 40px 80px rgba(168,85,247,0.3)'" onmouseout="this.style.transform='translateY(0) scale(1.03)'; this.style.boxShadow='0 20px 50px rgba(168,85,247,0.15)'">
        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #a855f7; color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em;">MÁS POPULAR</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack 2 Voces</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px; min-height:40px;">Duplica la fuerza de llamadas con atención simultánea.</p>
        <div style="font-size: 3.5rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>600</div>
        <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
        <div style="background: rgba(168,85,247,0.15); color: #a855f7; padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1.2rem; margin-bottom: 30px;">2 IAs Concurrentes</div>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; background: #a855f7; color: #fff; padding: 15px; border-radius: 12px; font-weight: 800; text-decoration: none; transition: all 0.3s; box-shadow: 0 10px 20px rgba(168,85,247,0.3);" onmouseover="this.style.background='#8b3dce'" onmouseout="this.style.background='#a855f7'">ELEGIR PACK 2</a>
      </div>

      <!-- Plan 3 (Gold) -->
      <div style="background: var(--bg-card); border: 1px solid rgba(245,158,11,0.3); border-radius: 24px; padding: 40px 30px; text-align: center; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 15px 35px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 30px 60px rgba(245,158,11,0.25)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.1)'">
        <div style="position: absolute; top: -15px; right: 20px; background: #f59e0b; color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em; display:none;">TOP</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Call Premium</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px; min-height:40px;">El Call Center definitivo para grandes volúmenes de ventas.</p>
        <div style="font-size: 3.5rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>1000</div>
        <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
        <div style="background: rgba(245,158,11,0.1); color: #f59e0b; padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1.2rem; margin-bottom: 30px;">5 IAs Concurrentes</div>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #f59e0b; color: #f59e0b; padding: 15px; border-radius: 12px; font-weight: 800; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.background='#f59e0b'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#f59e0b';">ELEGIR PREMIUM</a>
      </div>

    </div>
`;

const newWebCards = `
    <!-- Pricing 3 columns -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
      
      <!-- Plan Basico (Blue) -->
      <div style="background: var(--bg-card); border: 1px solid rgba(14,165,233,0.2); border-radius: 24px; padding: 40px 30px; text-align: left; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 15px 35px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 30px 60px rgba(14,165,233,0.2)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.1)'">
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Básico</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px;">Ideal para pequeños negocios o emprendimientos.</p>
        <div style="font-size: 3rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>200</div>
        <p style="color: var(--ink-3); margin-bottom: 30px; font-size: 0.85rem; text-transform: uppercase;">Pago Único</p>
        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display:flex; flex-direction:column; gap:12px; font-size:0.95rem;">
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Hasta 5 Páginas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Animaciones Exclusivas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Diseño Responsivo</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #0ea5e9; color: #0ea5e9; padding: 15px; border-radius: 12px; font-weight: 800; text-align:center; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.background='#0ea5e9'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#0ea5e9';">ELEGIR BÁSICO</a>
      </div>

      <!-- Plan Medio (Purple) -->
      <div style="background: var(--bg-card); border: 2px solid #a855f7; border-radius: 24px; padding: 40px 30px; text-align: left; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 20px 50px rgba(168,85,247,0.15); transform: scale(1.03); position: relative;" onmouseover="this.style.transform='translateY(-15px) scale(1.05)'; this.style.boxShadow='0 40px 80px rgba(168,85,247,0.3)'" onmouseout="this.style.transform='translateY(0) scale(1.03)'; this.style.boxShadow='0 20px 50px rgba(168,85,247,0.15)'">
        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #a855f7; color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em;">RECOMENDADO</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Medio</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px;">Ideal para empresas en crecimiento con más contenido.</p>
        <div style="font-size: 3rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>400</div>
        <p style="color: var(--ink-3); margin-bottom: 30px; font-size: 0.85rem; text-transform: uppercase;">Pago Único</p>
        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display:flex; flex-direction:column; gap:12px; font-size:0.95rem;">
          <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Hasta 12 Páginas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Animaciones Exclusivas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Integración Avanzada</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; background: #a855f7; color: #fff; padding: 15px; border-radius: 12px; font-weight: 800; text-align:center; text-decoration: none; transition: all 0.3s; box-shadow: 0 10px 20px rgba(168,85,247,0.3);" onmouseover="this.style.background='#8b3dce'" onmouseout="this.style.background='#a855f7'">ELEGIR MEDIO</a>
      </div>

      <!-- Plan Premium (Gold) -->
      <div style="background: var(--bg-card); border: 1px solid rgba(245,158,11,0.3); border-radius: 24px; padding: 40px 30px; text-align: left; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 15px 35px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 30px 60px rgba(245,158,11,0.25)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.1)'">
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Premium</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px;">Presencia digital corporativa masiva y completa.</p>
        <div style="font-size: 3rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>700</div>
        <p style="color: var(--ink-3); margin-bottom: 30px; font-size: 0.85rem; text-transform: uppercase;">Pago Único</p>
        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display:flex; flex-direction:column; gap:12px; font-size:0.95rem;">
          <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">✓</span> Hasta 20 Páginas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">✓</span> Animaciones Top</li>
          <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">✓</span> Optimización SEO Máxima</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #f59e0b; color: #f59e0b; padding: 15px; border-radius: 12px; font-weight: 800; text-align:center; text-decoration: none; transition: all 0.3s;" onmouseover="this.style.background='#f59e0b'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#f59e0b';">ELEGIR PREMIUM</a>
      </div>

    </div>
`;

// Extract sections
const voiceStart = content.indexOf('<!-- VOICE IA SECTION -->');
const webStart = content.indexOf('<!-- WEB DESIGN SECTION -->');

if (voiceStart === -1 || webStart === -1) {
    console.error("Sections not found");
    process.exit(1);
}

// 1. Replace Voice Grid
const voiceGridStart = content.indexOf('<!-- Pricing 3 columns -->', voiceStart);
const voiceGridEnd = content.indexOf('</section>', voiceGridStart);
const beforeVoice = content.slice(0, voiceGridStart);
const afterVoice = content.slice(voiceGridEnd);

content = beforeVoice + newVoiceCards + '  </div>\n' + afterVoice;

// 2. Refresh positions after first replace
const webStart2 = content.indexOf('<!-- WEB DESIGN SECTION -->');
const webGridStart = content.indexOf('<!-- Pricing 3 columns -->', webStart2);
const webGridEnd = content.indexOf('</section>', webGridStart);
const beforeWeb = content.slice(0, webGridStart);
const afterWeb = content.slice(webGridEnd);

content = beforeWeb + newWebCards + '  </div>\n' + afterWeb;

fs.writeFileSync(file, content, 'utf8');
console.log("Card colors successfully updated!");
