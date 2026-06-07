const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Upgrade WSP Pricing Card
const wspWrapStart = content.indexOf('<!-- WSP Pricing Card -->');
const wspSectionEnd = content.indexOf('</section>', wspWrapStart) + 10;

const newWspPricingHTML = `<!-- WSP Pricing Card -->
        <div style="flex: 1; min-width: 300px; max-width: 400px; text-align: center; background: #ffffff; border: 1px solid rgba(37,211,102,0.3); border-bottom: 4px solid #25D366; border-radius: 24px; padding: 40px 30px; backdrop-filter: blur(12px); box-shadow: 0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(37,211,102,0.15), inset 0 2px 2px rgba(255,255,255,1); transform: perspective(1000px) translateZ(0) translateY(-5px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.transform='perspective(1000px) translateZ(30px) translateY(-20px)'; this.style.boxShadow='0 30px 60px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.06), 0 20px 40px rgba(37,211,102,0.3), inset 0 2px 2px rgba(255,255,255,1)';" onmouseout="this.style.transform='perspective(1000px) translateZ(0) translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(37,211,102,0.15), inset 0 2px 2px rgba(255,255,255,1)';">
          <div style="display:inline-block; background:rgba(37,211,102,0.15); color:#25D366; padding:8px 16px; border-radius:20px; font-weight:800; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:20px;">Suscripci&oacute;n Mensual</div>
          <div style="text-decoration: line-through; color: var(--ink-3); font-size: 1.8rem; font-weight: 700; margin-bottom: -10px; opacity: 0.6;">$179</div>
          <div style="font-size: 5rem; font-weight: 900; color: var(--ink-1); line-height: 1; margin-bottom: 5px;"><span style="font-size: 2.2rem; color: var(--ink-3); vertical-align: super;">$</span>99</div>
          <div style="color: var(--ink-3); margin-bottom: 30px; font-weight:600; font-size:1.1rem;">Suscripci&oacute;n todo incluido</div>
          <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 40px; display:flex; flex-direction:column; gap:16px; font-size:1.05rem; color:var(--ink-2);">
            <li style="display: flex; gap: 12px; align-items:center;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Mensajes Ilimitados</li>
            <li style="display: flex; gap: 12px; align-items:center;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> CRM Integrado</li>
            <li style="display: flex; gap: 12px; align-items:center;"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Instalaci&oacute;n en solo 2 d&iacute;as</li>
          </ul>
          <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; background: #25D366; color: #fff; padding: 18px; border-radius: 12px; font-weight: 800; font-size: 1.1rem; text-decoration: none; transition: transform 0.3s, box-shadow 0.3s; box-shadow: 0 10px 20px rgba(37,211,102,0.3);" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 15px 25px rgba(37,211,102,0.4)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 10px 20px rgba(37,211,102,0.3)';">CONTRATAR AHORA</a>
        </div>
      </div>
    </div>
  </section>`;

if (wspWrapStart !== -1) {
    content = content.slice(0, wspWrapStart) + newWspPricingHTML + content.slice(wspSectionEnd);
}

// 2. Insert Video in Voice IA
const videoHtml = `</p>
      </div>
      
      <!-- Video Demo Llamadas -->
      <div style="width: 100%; max-width: 900px; margin: 0 auto 60px; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05); position: relative; background: #000; display: flex; align-items: center; justify-content: center; padding: 0;">
        <video src="media/demo_llamadas.mp4" autoplay loop muted playsinline style="width: 100%; height: auto; object-fit: cover; transform: scale(1.15);"></video>
      </div>

      <!-- Pricing 3 columns -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; max-width: 1000px; margin: 0 auto;">`;

const regexVideo = /<\/p>\s*<\/div>\s*<!-- Pricing 3 columns -->\s*<div style="display: grid; grid-template-columns: repeat\(auto-fit, minmax\(300px, 1fr\)\); gap: 30px;">/;
content = content.replace(regexVideo, videoHtml);

// Downscale cards slightly
content = content.replace(/padding: 40px 30px;/g, 'padding: 30px 20px;');
content = content.replace(/font-size: 3\.5rem;/g, 'font-size: 2.8rem;');
content = content.replace(/min-height:40px;/g, 'min-height:45px; font-size:0.9rem;');
content = content.replace(/padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1\.2rem;/g, 'padding: 12px; border-radius: 10px; font-weight: 800; font-size: 1rem;');
content = content.replace(/padding: 15px; border-radius: 12px; font-weight: 800; text-decoration: none;/g, 'padding: 12px; border-radius: 10px; font-weight: 800; text-decoration: none; font-size: 0.95rem;');

fs.writeFileSync(file, content, 'utf8');
console.log("Pricing updated and video added successfully!");
