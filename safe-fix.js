const fs = require('fs');
const path = require('path');

// 1. Update index.html securely
const fileIndex = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let html = fs.readFileSync(fileIndex, 'utf8');

html = html.replace('<title>Good Call AI — Automatización Inteligente de WhatsApp</title>', '<title>Good Call AI — Ecosistema Digital de IA y Desarrollo Web</title>');

html = html.replace(/<div class=\"hero-badge\">[\s\S]*?<\/div>\s*<h1 class=\"hero-h1\">[\s\S]*?<\/h1>\s*<p class=\"hero-sub\">[\s\S]*?<\/p>\s*<div class=\"hero-ctas\">[\s\S]*?<\/div>/,
`<div class="hero-badge"><span class="dot"></span> Agencia de IA y Desarrollo Web</div>
    <h1 class="hero-h1">El ecosistema digital <br><em>para tu negocio.</em></h1>
    <p class="hero-sub">Modernizamos la forma en que te comunicas y vendes. Automatización de WhatsApp, Agentes de Llamadas IA y Desarrollo Web Profesional.</p>
    <div class="hero-ctas">
      <a class="btn-accent" href="#features">Ver nuestros servicios ↓</a>
      <a class="btn-outline" href="https://wa.me/51987312687?text=Hola%2C%20quiero%20conocer%20el%20ecosistema%20Good%20Call%20AI" target="_blank">Contactar un asesor</a>
    </div>`);

html = html.replace(/<div class=\"eyebrow\"><svg[^>]*><path[^>]*><\/svg> ¿Por qué Good Call AI\?<\/div>\s*<h2 class=\"sec-h2\">La automatización que tu negocio <em>necesita<\/em><\/h2>\s*<p class=\"sec-p\">No es solo un bot\. Es un empleado digital que trabaja sin descanso, sin errores y sin excusas\.<\/p>/,
`<div class="eyebrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> Nuestros Servicios</div>
      <h2 class="sec-h2">El ecosistema que tu negocio <em>necesita</em></h2>
      <p class="sec-p">Soluciones de Inteligencia Artificial y Desarrollo Web diseñadas para multiplicar tus ventas y liberar tu tiempo.</p>`);

html = html.replace(/<div class=\"feat-grid\">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/,
`<div class="feat-grid">
      <div class="feat-card reveal">
        <div class="feat-ico gold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
        <div class="feat-title">Bot Inteligente de WhatsApp</div>
        <div class="feat-desc">Automatiza tu atención al cliente, recibe pedidos y captura leads 24/7. No es un menú de opciones, es una conversación natural.<br><br><a href="ia-whatsapp.html" style="color: var(--accent); font-weight: 800; text-decoration: none;">Ver solución de WhatsApp →</a></div>
      </div>
      <div class="feat-card reveal" style="transition-delay:.08s">
        <div class="feat-ico blue"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
        <div class="feat-title">Agente de Llamadas con IA</div>
        <div class="feat-desc">Tu empresa llama a cientos de clientes con voz hiperrealista, sin contratar operadores. Disponible 24/7 para campañas masivas y seguimiento.<br><br><a href="https://wa.me/51987312687?text=Hola%2C%20quiero%20conocer%20el%20Agente%20de%20Llamadas%20IA" target="_blank" style="color: var(--accent); font-weight: 800; text-decoration: none;">Solicitar información →</a></div>
      </div>
      <div class="feat-card reveal" style="transition-delay:.16s">
        <div class="feat-ico gold"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 18 22 12 16 6"/><polygon points="8 6 2 12 8 18"/></svg></div>
        <div class="feat-title">Desarrollo Web Profesional</div>
        <div class="feat-desc">Construimos el ecosistema digital completo para tu negocio. Diseño moderno y rápido con la integración de nuestros agentes IA.<br><br><a href="https://wa.me/51987312687?text=Hola%2C%20quiero%20cotizar%20mi%20web" target="_blank" style="color: var(--accent); font-weight: 800; text-decoration: none;">Cotizar página web →</a></div>
      </div>
    </div>
  </div>
</section>`);

html = html.replace('<p class="sec-p">Un cliente escribe por WhatsApp, tu bot agenda la cita, tú recibes el email y todo queda registrado en tu CRM. Automático.</p>', '<p class="sec-p">Un cliente escribe por WhatsApp o realiza una llamada, tu agente IA atiende, agenda la cita y todo queda registrado en tu CRM. Automático.</p>');

html = html.replace(/<!-- PRICING -->[\s\S]*?<section class="pricing-section" id="precios-preview">[\s\S]*?<\/section>/, '');

fs.writeFileSync(fileIndex, html, 'utf8');

// 2. Global Navigation Updates
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

walkDir('c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging', function(filePath) {
    if (filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Prevent duplicate injections!
        if (content.includes('href="ia-whatsapp.html"') || content.includes('href="../ia-whatsapp.html"')) {
            return; 
        }

        if (filePath.endsWith('index.html') || filePath.endsWith('ia-whatsapp.html')) {
            // Replace in UL nav-links
            content = content.replace(
                /<ul class="nav-links">\s*<li><a href="index\.html">Inicio<\/a><\/li>/, 
                `<ul class="nav-links">\n      <li><a href="index.html">Inicio</a></li>\n      <li><a href="ia-whatsapp.html">IA de WhatsApp</a></li>`
            );
            // Replace in mobile drawer
            content = content.replace(
                /<div class="mobile-drawer" id="drawer">\s*<a href="index\.html">Inicio<\/a>/,
                `<div class="mobile-drawer" id="drawer">\n    <a href="index.html">Inicio</a>\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>`
            );
        } else {
            // It's a subpage
            let isSub = !content.includes('href="index.html"');
            if(isSub) {
                content = content.replace(
                    /<ul class="nav-links">\s*<li><a href="\.\.\/index\.html">Inicio<\/a><\/li>/, 
                    `<ul class="nav-links">\n      <li><a href="../index.html">Inicio</a></li>\n      <li><a href="../ia-whatsapp.html">IA de WhatsApp</a></li>`
                );
                content = content.replace(
                    /<div class="mobile-drawer" id="drawer">\s*<a href="\.\.\/index\.html">Inicio<\/a>/,
                    `<div class="mobile-drawer" id="drawer">\n    <a href="../index.html">Inicio</a>\n    <a href="../ia-whatsapp.html">IA de WhatsApp</a>`
                );
            } else {
                content = content.replace(
                    /<ul class="nav-links">\s*<li><a href="index\.html">Inicio<\/a><\/li>/, 
                    `<ul class="nav-links">\n      <li><a href="index.html">Inicio</a></li>\n      <li><a href="ia-whatsapp.html">IA de WhatsApp</a></li>`
                );
                content = content.replace(
                    /<div class="mobile-drawer" id="drawer">\s*<a href="index\.html">Inicio<\/a>/,
                    `<div class="mobile-drawer" id="drawer">\n    <a href="index.html">Inicio</a>\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>`
                );
            }
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Update absolutely perfect');
