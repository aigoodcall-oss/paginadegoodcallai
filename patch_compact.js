const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Reduce card padding and image heights
content = content.replace(/padding:30px;/g, 'padding:20px;');
content = content.replace(/height:200px;/g, 'height:140px;');
content = content.replace(/margin-bottom:24px;/g, 'margin-bottom:16px;');
content = content.replace(/margin-bottom:20px;/g, 'margin-bottom:12px;');

// 2. Fix the Voice AI link
content = content.replace(/href="pages\/servicios\.html"([^>]*>Ver detalles.*Llamadas Inteligentes.*?)<\/div>/is, (match) => {
    // This regex might be tricky, so let's just do targeted string replaces
    return match; // fallback
});
// Let's use simple string replacements for the specific A tags
// Voice AI button is under the Voice block
content = content.replace(/<a href="pages\/servicios\.html"([^>]*)>Ver detalles([^<]*)<\/a><\/div>\s*<!-- Web Design -->/, '<a href="ia-llamadas.html"$1>Ver detalles$2</a></div>\n      <!-- Web Design -->');

// Web Design button is the last one
content = content.replace(/<a href="pages\/servicios\.html"([^>]*)>Ver detalles([^<]*)<\/a><\/div>\s*<\/div>\s*<\/div>\s*<\/section>/, '<a href="diseno-web.html"$1>Ver detalles$2</a></div>\n    </div>\n  </div>\n</section>');

// 3. Add the Hook phrase if not already there
const hookPhrase = `
    <div style="text-align: center; margin-bottom: 40px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;">
      <h1 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 10px; color:#fff;">
        Escala tu empresa con <span style="color: transparent; background: linear-gradient(90deg, #25D366, #0ea5e9); -webkit-background-clip: text;">Good Call AI</span>
      </h1>
      <p style="font-size: 1.1rem; color: var(--ink-2);">Elige tu próximo motor de crecimiento automático.</p>
    </div>
    <div class="services-grid">`;

content = content.replace(/<div class="services-grid">/, hookPhrase);

// Adjust padding top of hero to make room for the phrase without being too huge
content = content.replace(/padding-top:140px;/, 'padding-top:100px;');

fs.writeFileSync(file, content, 'utf8');
console.log("Cards compacted, hook phrase added, and links updated!");
