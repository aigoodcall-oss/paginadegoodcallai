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
        
        // Prevent duplicate injections!
        if (content.includes('href="ia-whatsapp.html"') || content.includes('href="../ia-whatsapp.html"')) {
            return; 
        }

        if (filePath.endsWith('index.html') || filePath.endsWith('ia-whatsapp.html')) {
            content = content.replace(
                '<li><a href="index.html">Inicio</a></li>', 
                '<li><a href="index.html">Inicio</a></li>\n        <li><a href="ia-whatsapp.html">IA de WhatsApp</a></li>'
            );
            content = content.replace(
                '<a href="index.html">Inicio</a>\n    <a href="pages/servicios.html">',
                '<a href="index.html">Inicio</a>\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>\n    <a href="pages/servicios.html">'
            );
        } else {
            // It's a subpage
            let isSub = !content.includes('href="index.html"');
            if(isSub) {
                content = content.replace(
                    '<li><a href="../index.html">Inicio</a></li>', 
                    '<li><a href="../index.html">Inicio</a></li>\n        <li><a href="../ia-whatsapp.html">IA de WhatsApp</a></li>'
                );
                content = content.replace(
                    '<a href="../index.html">Inicio</a>\n    <a href="servicios.html">',
                    '<a href="../index.html">Inicio</a>\n    <a href="../ia-whatsapp.html">IA de WhatsApp</a>\n    <a href="servicios.html">'
                );
            } else {
                content = content.replace(
                    '<li><a href="index.html">Inicio</a></li>', 
                    '<li><a href="index.html">Inicio</a></li>\n        <li><a href="ia-whatsapp.html">IA de WhatsApp</a></li>'
                );
                content = content.replace(
                    '<a href="index.html">Inicio</a>\n    <a href="pages/servicios.html">',
                    '<a href="index.html">Inicio</a>\n    <a href="ia-whatsapp.html">IA de WhatsApp</a>\n    <a href="pages/servicios.html">'
                );
            }
        }
        
        fs.writeFileSync(filePath, content, 'utf8');
    }
});
console.log('Navlinks replaced');
