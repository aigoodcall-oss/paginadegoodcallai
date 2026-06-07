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
            // Already injected drawer or nav
        }

        if (filePath.endsWith('index.html') || filePath.endsWith('ia-whatsapp.html')) {
            content = content.replace(
                '<a href="index.html">Inicio</a>\r\n    <a href="pages/servicios.html">',
                '<a href="index.html">Inicio</a>\r\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>\r\n    <a href="pages/servicios.html">'
            );
            content = content.replace(
                '<a href="index.html">Inicio</a>\n    <a href="pages/servicios.html">',
                '<a href="index.html">Inicio</a>\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>\n    <a href="pages/servicios.html">'
            );
        } else {
            // It's a subpage
            let isSub = !content.includes('<li><a href="index.html">Inicio</a></li>');
            if(isSub) {
                content = content.replace(
                    '<a href="../index.html">Inicio</a>\r\n    <a href="servicios.html">',
                    '<a href="../index.html">Inicio</a>\r\n    <a href="../ia-whatsapp.html">IA de WhatsApp</a>\r\n    <a href="servicios.html">'
                );
            } else {
                content = content.replace(
                    '<a href="index.html">Inicio</a>\r\n    <a href="pages/servicios.html">',
                    '<a href="index.html">Inicio</a>\r\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>\r\n    <a href="pages/servicios.html">'
                );
            }
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Mobile drawer replaced properly');
