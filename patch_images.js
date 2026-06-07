const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace WSP icon with image
const wspRegex = /<div style="width:64px; height:64px; border-radius:18px; background:rgba\(37,211,102,0\.1\); color:#25D366; display:flex; align-items:center; justify-content:center; margin-bottom:30px;">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/;
const wspReplacement = `<div style="width:100%; height:220px; border-radius:18px; margin-bottom:24px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
          <img src="logos/wsp_ai_serious.png" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.85); transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="WhatsApp IA Bot" class="card-img-hover">
        </div>`;
content = content.replace(wspRegex, wspReplacement);

// Replace Voice icon with image
const voiceRegex = /<div style="width:64px; height:64px; border-radius:18px; background:rgba\(168,85,247,0\.1\); color:#a855f7; display:flex; align-items:center; justify-content:center; margin-bottom:30px;">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/;
const voiceReplacement = `<div style="width:100%; height:220px; border-radius:18px; margin-bottom:24px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
          <img src="logos/voice_ai_serious.png" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.85); transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="Agentes de Voz IA" class="card-img-hover">
        </div>`;
content = content.replace(voiceRegex, voiceReplacement);

// Replace Web icon with image
const webRegex = /<div style="width:64px; height:64px; border-radius:18px; background:rgba\(14,165,233,0\.1\); color:#0ea5e9; display:flex; align-items:center; justify-content:center; margin-bottom:30px;">\s*<svg[\s\S]*?<\/svg>\s*<\/div>/;
const webReplacement = `<div style="width:100%; height:220px; border-radius:18px; margin-bottom:24px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
          <img src="logos/web_dev_serious.png" style="width:100%; height:100%; object-fit:cover; filter:brightness(0.85); transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="Desarrollo Web" class="card-img-hover">
        </div>`;
content = content.replace(webRegex, webReplacement);

// Add global style for hover effect
if (!content.includes('card-img-hover')) {
  content = content.replace('</style>', `
  .card-img-hover:hover { transform:scale(1.05); filter:brightness(1) !important; }
  .hover-card:hover .card-img-hover { transform:scale(1.05); filter:brightness(1) !important; }
</style>`);
}

fs.writeFileSync(file, content, 'utf8');
console.log("Replaced icons with premium images!");
