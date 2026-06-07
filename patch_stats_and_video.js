const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. WhatsApp Stats
const wspAnchor = "trabaja 24/7 sin descanso.</p>";
if(content.indexOf(wspAnchor) !== -1 && content.indexOf("Tasa de Apertura") === -1) {
    const wspStatsHTML = `
      <div style="display: flex; justify-content: center; gap: 20px; margin: 30px auto 50px; flex-wrap: wrap; max-width: 900px;">
        <div style="background: rgba(37,211,102,0.05); border: 1px solid rgba(37,211,102,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #25D366; font-size: 2.2rem; font-weight: 900; line-height: 1;">98%</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Tasa de Apertura</div>
        </div>
        <div style="background: rgba(37,211,102,0.05); border: 1px solid rgba(37,211,102,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #25D366; font-size: 2.2rem; font-weight: 900; line-height: 1;">+45%</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Recuperaci&oacute;n de Ventas</div>
        </div>
        <div style="background: rgba(37,211,102,0.05); border: 1px solid rgba(37,211,102,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #25D366; font-size: 2.2rem; font-weight: 900; line-height: 1;">24/7</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Disponibilidad Total</div>
        </div>
      </div>
`;
    content = content.replace(wspAnchor, wspAnchor + "\n      </div>\n" + wspStatsHTML + "\n      <div>");
}

// 2. Voice IA Stats
const voiceAnchor = "humana ultra realista.</p>";
if(content.indexOf(voiceAnchor) !== -1 && content.indexOf("Llamadas al D&iacute;a") === -1) {
    const voiceStatsHTML = `
      <div style="display: flex; justify-content: center; gap: 20px; margin: 30px auto 50px; flex-wrap: wrap; max-width: 900px;">
        <div style="background: rgba(168,85,247,0.05); border: 1px solid rgba(168,85,247,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #a855f7; font-size: 2.2rem; font-weight: 900; line-height: 1;">10k+</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Llamadas al D&iacute;a</div>
        </div>
        <div style="background: rgba(168,85,247,0.05); border: 1px solid rgba(168,85,247,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #a855f7; font-size: 2.2rem; font-weight: 900; line-height: 1;">-80%</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Reducci&oacute;n de Costos</div>
        </div>
        <div style="background: rgba(168,85,247,0.05); border: 1px solid rgba(168,85,247,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #a855f7; font-size: 2.2rem; font-weight: 900; line-height: 1;">100%</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Voz Humana Realista</div>
        </div>
      </div>
`;
    content = content.replace(voiceAnchor, voiceAnchor + "\n      </div>\n" + voiceStatsHTML + "\n      <div>");
}

// 3. Web Design Stats & Video
const webAnchor = "Aprox. 2 Semanas</p>";
if(content.indexOf(webAnchor) !== -1 && content.indexOf("Carga Ultrarr&aacute;pida") === -1) {
    const webStatsAndVideoHTML = `
      <div style="display: flex; justify-content: center; gap: 20px; margin: 30px auto 50px; flex-wrap: wrap; max-width: 900px;">
        <div style="background: rgba(14,165,233,0.05); border: 1px solid rgba(14,165,233,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #0ea5e9; font-size: 2.2rem; font-weight: 900; line-height: 1;">&lt; 0.5s</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Carga Ultrarr&aacute;pida</div>
        </div>
        <div style="background: rgba(14,165,233,0.05); border: 1px solid rgba(14,165,233,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #0ea5e9; font-size: 2.2rem; font-weight: 900; line-height: 1;">UI/UX</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Dise&ntilde;o Pro-Ventas</div>
        </div>
        <div style="background: rgba(14,165,233,0.05); border: 1px solid rgba(14,165,233,0.2); padding: 20px; border-radius: 16px; text-align: center; flex: 1; min-width: 200px; box-shadow: 0 10px 20px rgba(0,0,0,0.02);">
          <div style="color: #0ea5e9; font-size: 2.2rem; font-weight: 900; line-height: 1;">SEO</div>
          <div style="color: var(--ink-2); font-size: 0.95rem; font-weight: 700; margin-top: 8px;">Posicionamiento Nativo</div>
        </div>
      </div>

      <!-- Video Demo Web con overlay de Logo -->
      <div style="width: 100%; max-width: 900px; margin: 0 auto 60px; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05); position: relative; background: #000; aspect-ratio: 16/9; display: flex; align-items: center; justify-content: center;">
        <video src="media/demo_web.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
        <!-- Overlay del Logo para tapar marca de agua inferior izquierda -->
        <div style="position: absolute; bottom: 20px; left: 20px; background: rgba(255,255,255,0.95); padding: 8px 16px; border-radius: 12px; backdrop-filter: blur(8px); box-shadow: 0 10px 30px rgba(0,0,0,0.2); display: flex; align-items: center; gap: 10px; z-index: 10;">
          <img src="logos/logo-new.png" alt="Good Call AI Logo" style="height: 28px; width: auto;">
          <span style="font-weight: 900; color: var(--ink-1); font-size: 1.1rem; letter-spacing: -0.02em;">Good Call <span style="color:#0ea5e9;">AI</span></span>
        </div>
      </div>
`;
    content = content.replace(webAnchor, webAnchor + "\n      </div>\n" + webStatsAndVideoHTML + "\n      <div>");
}

fs.writeFileSync(file, content, 'utf8');
console.log("Stats and Web Video injected reliably!");
