const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// --- 1. WSP Pricing Card Features ---
// Find the end of the current ul in WSP:
const wspUlEnd = `</polyline></svg> Instalaci&oacute;n en solo 2 d&iacute;as</li>`;
if (content.indexOf(wspUlEnd) !== -1 && content.indexOf("Respuestas &lt;0.1s") === -1) {
    const extraWspFeatures = `
            <li style="display: flex; gap: 12px; align-items:center;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Respuestas &lt;0.1s</li>
            <li style="display: flex; gap: 12px; align-items:center;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Soporte T&eacute;cnico 24/7</li>
            <li style="display: flex; gap: 12px; align-items:center;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Env&iacute;o de Audios y PDFs</li>`;
    content = content.replace(wspUlEnd, wspUlEnd + extraWspFeatures);
}


// --- 2. Voice IA Features ---
// Plan 1
const vPlan1Anchor = `1 IA Exclusiva</div>`;
if (content.indexOf(vPlan1Anchor) !== -1 && content.indexOf("1000 Llamadas/D&iacute;a") === -1) {
    const vPlan1List = `
            <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 30px; display:flex; flex-direction:column; gap:10px; font-size:0.95rem; color:var(--ink-2);">
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#0ea5e9; font-weight:bold;">&check;</span> 1000 Llamadas/D&iacute;a</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#0ea5e9; font-weight:bold;">&check;</span> Voz Humana Normal</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#0ea5e9; font-weight:bold;">&check;</span> Agendamiento Base</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#0ea5e9; font-weight:bold;">&check;</span> Panel de Anal&iacute;ticas</li>
            </ul>`;
    content = content.replace(vPlan1Anchor, vPlan1Anchor + vPlan1List);
}

// Plan 2
const vPlan2Anchor = `2 IAs Simult&aacute;neas</div>`;
if (content.indexOf(vPlan2Anchor) !== -1 && content.indexOf("Voz Clonada Premium") === -1) {
    const vPlan2List = `
            <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 30px; display:flex; flex-direction:column; gap:10px; font-size:0.95rem; color:var(--ink-2);">
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#a855f7; font-weight:bold;">&check;</span> 3000 Llamadas/D&iacute;a</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#a855f7; font-weight:bold;">&check;</span> Voz Clonada Premium</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#a855f7; font-weight:bold;">&check;</span> CRM Avanzado</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#a855f7; font-weight:bold;">&check;</span> Traspaso a Humano</li>
            </ul>`;
    content = content.replace(vPlan2Anchor, vPlan2Anchor + vPlan2List);
}

// Plan 3
const vPlan3Anchor = `5 IAs Simult&aacute;neas</div>`;
if (content.indexOf(vPlan3Anchor) !== -1 && content.indexOf("Llamadas Ilimitadas") === -1) {
    const vPlan3List = `
            <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 30px; display:flex; flex-direction:column; gap:10px; font-size:0.95rem; color:var(--ink-2);">
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#f59e0b; font-weight:bold;">&check;</span> Llamadas Ilimitadas</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#f59e0b; font-weight:bold;">&check;</span> M&uacute;ltiples Voces Clonadas</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#f59e0b; font-weight:bold;">&check;</span> Prioridad Servidor VIP</li>
              <li style="display: flex; gap: 10px; align-items:center;"><span style="color:#f59e0b; font-weight:bold;">&check;</span> Integraci&oacute;n API Total</li>
            </ul>`;
    content = content.replace(vPlan3Anchor, vPlan3Anchor + vPlan3List);
}


// --- 3. Web Design Features ---
// Basico
const wPlan1Anchor = `DiseÃ±o Responsivo</li>`;
if (content.indexOf(wPlan1Anchor) !== -1 && content.indexOf("SEO T&eacute;cnico B&aacute;sico") === -1) {
    const extraWPlan1 = `
            <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">âœ“</span> SEO T&eacute;cnico B&aacute;sico</li>
            <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">âœ“</span> Formulario Captaci&oacute;n</li>`;
    content = content.replace(wPlan1Anchor, wPlan1Anchor + extraWPlan1);
}

// Medio
const wPlan2Anchor = `IntegraciÃ³n Avanzada</li>`;
if (content.indexOf(wPlan2Anchor) !== -1 && content.indexOf("Chatbot Integrado") === -1) {
    const extraWPlan2 = `
            <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">âœ“</span> SEO Avanzado Pro</li>
            <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">âœ“</span> Chatbot Integrado</li>`;
    content = content.replace(wPlan2Anchor, wPlan2Anchor + extraWPlan2);
}

// Premium
const wPlan3Anchor = `OptimizaciÃ³n SEO MÃ¡xima</li>`;
if (content.indexOf(wPlan3Anchor) !== -1 && content.indexOf("E-commerce Completo") === -1) {
    const extraWPlan3 = `
            <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">âœ“</span> E-commerce Completo</li>
            <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">âœ“</span> Pasarelas de Pago</li>`;
    content = content.replace(wPlan3Anchor, wPlan3Anchor + extraWPlan3);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Card features injected successfully!");
