const fs = require('fs');
const path = require('path');

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
        
        if (content.includes('>IA de WhatsApp</a>')) {
            // Already there
        }

        if (filePath.endsWith('index.html') || filePath.endsWith('ia-whatsapp.html')) {
            content = content.replace(/<div class=\"mobile-drawer\" id=\"drawer\">\s*<a href=\"index\.html\">Inicio<\/a>/, '<div class="mobile-drawer" id="drawer">\n    <a href="index.html">Inicio</a>\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>');
        } else {
            let isSub = !content.includes('<li><a href="index.html">Inicio</a></li>');
            if(isSub) {
                content = content.replace(/<div class=\"mobile-drawer\" id=\"drawer\">\s*<a href=\"\.\.\/index\.html\">Inicio<\/a>/, '<div class="mobile-drawer" id="drawer">\n    <a href="../index.html">Inicio</a>\n    <a href="../ia-whatsapp.html">IA de WhatsApp</a>');
            } else {
                content = content.replace(/<div class=\"mobile-drawer\" id=\"drawer\">\s*<a href=\"index\.html\">Inicio<\/a>/, '<div class="mobile-drawer" id="drawer">\n    <a href="index.html">Inicio</a>\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>');
            }
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Mobile drawer fixed with regex');
