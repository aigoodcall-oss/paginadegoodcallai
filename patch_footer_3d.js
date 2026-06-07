const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Add Footer if it doesn't exist, or replace the old one
const footerHtml = `
<footer style="background: var(--bg-card); padding: 80px 20px 40px; border-top: 1px solid var(--border); text-align: center; position:relative; z-index:10;">
  <div style="max-width: 1200px; margin: 0 auto; display: flex; flex-direction: column; align-items: center; gap: 20px;">
    <h2 style="font-size: 2.5rem; font-weight: 900; background: linear-gradient(90deg, #25D366, #0ea5e9); -webkit-background-clip: text; color: transparent; margin:0;">Good Call AI</h2>
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

// Remove old footer tags if they exist to prevent duplicates
content = content.replace(/<footer[\s\S]*?<\/footer>/, '');
// If there's an empty <!-- FOOTER --> tag
content = content.replace(/<!-- FOOTER -->/, '');

// Append footer before closing body
content = content.replace('</body>', footerHtml + '\n</body>');

// 2. Add 3D Hover effects to WSP Card
content = content.replace(
    /box-shadow: 0 20px 50px rgba\(0,0,0,0\.1\), inset 0 0 20px rgba\(37,211,102,0\.05\); backdrop-filter: blur\(10px\);"/g, 
    `box-shadow: 0 20px 50px rgba(0,0,0,0.1), inset 0 0 20px rgba(37,211,102,0.05); backdrop-filter: blur(10px); transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1);" onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 30px 60px rgba(37,211,102,0.2), inset 0 0 30px rgba(37,211,102,0.1)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 20px 50px rgba(0,0,0,0.1), inset 0 0 20px rgba(37,211,102,0.05)'"`
);

// 3. Add 3D Hover effects to Normal Voice/Web Cards
content = content.replace(
    /text-align: (center|left); transition: all 0\.3s; box-shadow: 0 15px 35px rgba\(0,0,0,0\.1\);"/g, 
    `text-align: $1; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 15px 35px rgba(0,0,0,0.1);" onmouseover="this.style.transform='translateY(-15px) scale(1.02)'; this.style.boxShadow='0 30px 60px rgba(0,0,0,0.2)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.1)'"`
);

// 4. Add 3D Hover effects to Highlighted Voice/Web Cards (Popular/Recomendado)
content = content.replace(
    /text-align: (center|left); transition: all 0\.3s; box-shadow: 0 20px 50px rgba\((168,85,247|14,165,233),0\.15\); transform: scale\(1\.03\); position: relative;"/g, 
    `text-align: $1; transition: all 0.5s cubic-bezier(0.25, 1, 0.5, 1); box-shadow: 0 20px 50px rgba($2,0.15); transform: scale(1.03); position: relative;" onmouseover="this.style.transform='translateY(-15px) scale(1.05)'; this.style.boxShadow='0 40px 80px rgba($2,0.3)'" onmouseout="this.style.transform='translateY(0) scale(1.03)'; this.style.boxShadow='0 20px 50px rgba($2,0.15)'"`
);

fs.writeFileSync(file, content, 'utf8');
console.log("3D effects and Footer added successfully!");
