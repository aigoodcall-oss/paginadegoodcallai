const fs = require('fs');
const path = require('path');

// --- 1. Fix CSS ---
const cssFile = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/css/styles.css';
let css = fs.readFileSync(cssFile, 'utf8');

// Celestial blue for accent
css = css.replace('--accent:var(--blue-mid);', '--accent:#0ea5e9;');

// Make the process step text bigger and darker/blueish
if (!css.includes('/* ESTETICOS APLICADOS */')) {
    css = css + '\n\n/* ESTETICOS APLICADOS */\n';
    css = css + '.flow-label { font-size: 1.1rem !important; color: #000000 !important; font-weight: 800 !important; }\n';
    css = css + '[data-theme="dark"] .flow-label { color: #f8fafc !important; }\n';

    // Remove black borders around the avatar
    css = css + '.wsp-live-avatar { border: none !important; background: transparent !important; }\n';
    css = css + '.wsp-live-avatar img { background: transparent !important; object-fit: cover !important; padding: 0 !important; }\n';
}

// Fix topbar promotion timer overlapping with 'x' (padding on right side, where the 'x' is)
css = css.replace('padding:10px 20px;background:linear-gradient(90deg,#e8f7ff 0%,#87dbff 45%,#facc15 100%)', 'padding:10px 45px 10px 20px;background:linear-gradient(90deg,#e8f7ff 0%,#87dbff 45%,#facc15 100%)');
css = css.replace('padding:10px 64px 10px 20px;background:linear-gradient(90deg,#e8f7ff 0%,#87dbff 45%,#facc15 100%)', 'padding:10px 45px 10px 20px;background:linear-gradient(90deg,#e8f7ff 0%,#87dbff 45%,#facc15 100%)');

fs.writeFileSync(cssFile, css, 'utf8');

// --- 2. Fix HTML files ---
function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        if (fs.statSync(dirPath).isDirectory()) {
            walkDir(dirPath, callback);
        } else {
            callback(path.join(dir, f));
        }
    });
}

walkDir('c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging', function(filePath) {
    if (filePath.endsWith('.html')) {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove floating WhatsApp widget block
        content = content.replace(/<!-- WHATSAPP WIDGET -->[\s\S]*?<\/button>\s*<\/div>/, '');
        content = content.replace(/<div class=\"wsp-widget\" id=\"wspWidget\">[\s\S]*?<\/button>\s*<\/div>/, '');

        // Make "¿Por qué Good Call AI?" / "Nuestros Servicios" white and larger
        content = content.replace(
            '<div class="eyebrow"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> Nuestros Servicios</div>', 
            '<div class="eyebrow" style="color: #ffffff; font-size: 1.1rem; letter-spacing: 0.2em; font-weight: 900;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> Nuestros Servicios</div>'
        );

        // Update logo references everywhere!
        content = content.replace(/logo-v3\.png/g, 'logo-new.png');
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
});

console.log('Aesthetic fixes and logo update completed!');
