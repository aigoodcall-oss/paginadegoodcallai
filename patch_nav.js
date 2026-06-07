const fs = require('fs');
const path = require('path');

const rootDir = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging';
const files = ['index.html', 'ia-whatsapp.html', 'ia-llamadas.html', 'diseno-web.html'];

const newNav = `
    <ul class="nav-links">
      <li><a href="index.html">Inicio</a></li>
      <li><a href="ia-whatsapp.html">IA de WhatsApp</a></li>
      <li><a href="ia-llamadas.html">IA de Llamadas</a></li>
      <li><a href="diseno-web.html">Diseño Web</a></li>
    </ul>
`;

files.forEach(file => {
    const fullPath = path.join(rootDir, file);
    if (fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Use regex to replace the entire <ul class="nav-links">...</ul> block
        content = content.replace(/<ul class="nav-links">[\s\S]*?<\/ul>/, newNav.trim());
        
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log("Updated navigation in " + file);
    }
});
