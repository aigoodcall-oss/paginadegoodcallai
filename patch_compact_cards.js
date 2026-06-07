const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// --- Fix Web Design Features (Using index of exact tags instead of special chars) ---
// Basic Plan
const wPlan1Target = `PÃ¡ginas</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">âœ“</span> Animaciones Exclusivas</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">âœ“</span> DiseÃ±o Responsivo</li>`;
if (content.indexOf(wPlan1Target) !== -1 && content.indexOf("SEO T&eacute;cnico B&aacute;sico") === -1) {
    const extra = `\n            <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">&check;</span> SEO T&eacute;cnico B&aacute;sico</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">&check;</span> Formulario Captaci&oacute;n</li>`;
    content = content.replace(wPlan1Target, wPlan1Target + extra);
}

// Medium Plan
const wPlan2Target = `PÃ¡ginas</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">âœ“</span> Animaciones Exclusivas</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">âœ“</span> IntegraciÃ³n Avanzada</li>`;
if (content.indexOf(wPlan2Target) !== -1 && content.indexOf("Chatbot Integrado") === -1) {
    const extra = `\n            <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">&check;</span> SEO Avanzado Pro</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#a855f7; font-weight:bold;">&check;</span> Chatbot Integrado</li>`;
    content = content.replace(wPlan2Target, wPlan2Target + extra);
}

// Premium Plan
const wPlan3Target = `PÃ¡ginas</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">âœ“</span> Animaciones Top</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">âœ“</span> OptimizaciÃ³n SEO MÃ¡xima</li>`;
if (content.indexOf(wPlan3Target) !== -1 && content.indexOf("E-commerce Completo") === -1) {
    const extra = `\n            <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">&check;</span> E-commerce Completo</li>\n            <li style="display: flex; gap: 10px;"><span style="color:#f59e0b; font-weight:bold;">&check;</span> Pasarelas de Pago</li>`;
    content = content.replace(wPlan3Target, wPlan3Target + extra);
}


// --- Compact WSP and Voice IA Cards ---
// We will replace 'padding: 30px 20px;' with 'padding: 15px 15px;' globally for the cards inside voice-ia
// First let's extract the Voice IA section to be safe
let voiceStart = content.indexOf('<section id="voice-ia"');
let voiceEnd = content.indexOf('</section>', voiceStart);
if (voiceStart !== -1 && voiceEnd !== -1) {
    let voiceHTML = content.substring(voiceStart, voiceEnd);
    // Reduce padding
    voiceHTML = voiceHTML.replace(/padding: 30px 20px;/g, 'padding: 15px 15px;');
    // Reduce margins
    voiceHTML = voiceHTML.replace(/margin-bottom: 30px;/g, 'margin-bottom: 12px;');
    voiceHTML = voiceHTML.replace(/margin-bottom: 20px;/g, 'margin-bottom: 8px;');
    // Reduce title margins
    voiceHTML = voiceHTML.replace(/margin-bottom: 10px;/g, 'margin-bottom: 5px;');
    // Reduce font size of price
    voiceHTML = voiceHTML.replace(/font-size: 2\.8rem;/g, 'font-size: 2rem;');
    // Shrink the ul list gaps
    voiceHTML = voiceHTML.replace(/gap:10px;/g, 'gap:4px;');
    
    content = content.substring(0, voiceStart) + voiceHTML + content.substring(voiceEnd);
}

// Extract WSP IA section to be safe
let wspStart = content.indexOf('<section id="wsp-ia"');
let wspEnd = content.indexOf('</section>', wspStart);
if (wspStart !== -1 && wspEnd !== -1) {
    let wspHTML = content.substring(wspStart, wspEnd);
    // Compact the pricing card inside WSP
    wspHTML = wspHTML.replace(/padding: 30px 40px;/g, 'padding: 20px 25px;');
    wspHTML = wspHTML.replace(/margin-bottom: 30px;/g, 'margin-bottom: 15px;');
    wspHTML = wspHTML.replace(/margin-bottom: 20px;/g, 'margin-bottom: 10px;');
    wspHTML = wspHTML.replace(/font-size: 3\.5rem;/g, 'font-size: 2.5rem;');
    // Shrink gap
    wspHTML = wspHTML.replace(/gap: 15px;/g, 'gap: 8px;');
    wspHTML = wspHTML.replace(/margin-bottom: 40px;/g, 'margin-bottom: 15px;');
    
    content = content.substring(0, wspStart) + wspHTML + content.substring(wspEnd);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Web features added and WSP/Voice cards compacted successfully!");
