const fs = require('fs');

const files = [
    'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-whatsapp.html',
    'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-llamadas.html',
    'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/diseno-web.html'
];

const footerHTML = `
<footer style="background: var(--bg-card); padding: 80px 20px 40px; border-top: 1px solid var(--border); text-align: center; position:relative; z-index:10;">
    <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 20px;">
      <h2 style="font-size: 2.5rem; font-weight: 900; margin:0;"><span style="color: #000000;">Good Call</span> <span style="color: #0ea5e9;">AI</span></h2>
      <p style="color: var(--ink-2); font-size: 1rem; max-width: 600px; line-height:1.6;">Transformamos la manera en la que las empresas se comunican y venden, mediante Inteligencia Artificial y Desarrollo Web de alto impacto.</p>
      <div style="width: 100%; height: 1px; background: rgba(255,255,255,0.05); margin: 30px 0;"></div>
      <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; color: var(--ink-3); font-size: 0.9rem; align-items: center; gap: 15px;">
        <div>&copy; 2026 Good Call AI. Todos los derechos reservados.</div>
        <div style="display: flex; gap: 25px;">
          <a href="#" style="color: var(--ink-3); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--ink-1)'" onmouseout="this.style.color='var(--ink-3)'">Privacidad</a>
          <a href="#" style="color: var(--ink-3); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--ink-1)'" onmouseout="this.style.color='var(--ink-3)'">Términos Legales</a>
          <a href="https://wa.me/51912440960" target="_blank" style="color: var(--ink-3); text-decoration: none; transition: color 0.3s;" onmouseover="this.style.color='var(--ink-1)'" onmouseout="this.style.color='var(--ink-3)'">Soporte</a>
        </div>
      </div>
    </div>
</footer>
`;

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Remove any existing footer to avoid duplicates just in case
        if (content.indexOf('<footer') > -1) {
            const footerStart = content.indexOf('<footer');
            const footerEnd = content.indexOf('</footer>') + 9;
            content = content.substring(0, footerStart) + content.substring(footerEnd);
        }

        // Insert before </body>
        const bodyEnd = content.lastIndexOf('</body>');
        if (bodyEnd > -1) {
            content = content.substring(0, bodyEnd) + footerHTML + '\n' + content.substring(bodyEnd);
            fs.writeFileSync(file, content, 'utf8');
            console.log("Footer injected into", file);
        } else {
            console.log("Could not find </body> in", file);
        }
    } catch (e) {
        console.log("Error processing file", file, e.message);
    }
});
