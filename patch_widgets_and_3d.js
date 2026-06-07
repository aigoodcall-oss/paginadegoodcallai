const fs = require('fs');

const files = [
  'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html',
  'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-whatsapp.html',
  'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-llamadas.html',
  'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/diseno-web.html'
];

// Extract WSP Widget from index.html
let indexContent = fs.readFileSync(files[0], 'utf8');
const wspStart = indexContent.indexOf('<!-- WHATSAPP WIDGET -->');
let wspWidget = '';
if (wspStart !== -1) {
  const wspEnd = indexContent.indexOf('</style>', wspStart) + '</style>'.length;
  wspWidget = indexContent.slice(wspStart, wspEnd);
} else {
  // Hardcoded fallback for WSP
  wspWidget = `<!-- WHATSAPP WIDGET -->
<a href="https://wa.me/51987312687" class="wsp-widget" target="_blank" rel="noopener noreferrer">
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
</a>
<style>
.wsp-widget { position:fixed; bottom:20px; right:20px; width:60px; height:60px; background:#25d366; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:9999; box-shadow:0 4px 10px rgba(0,0,0,0.3); transition:transform 0.3s; }
.wsp-widget:hover { transform:scale(1.1); }
.wsp-widget svg { width:32px; height:32px; }
</style>`;
}

// Extract Rainy Widget
let disenoContent = fs.readFileSync(files[3], 'utf8');
const rainyStart = disenoContent.indexOf('<!-- VOZ PREVIEW');
let rainyWidget = '';
if (rainyStart !== -1) {
  const scriptEnd = disenoContent.indexOf('</script>', rainyStart) + '</script>'.length;
  rainyWidget = disenoContent.slice(rainyStart, scriptEnd);
} else {
  // If not in diseno, try reading from the file we extracted earlier
  try {
    rainyWidget = fs.readFileSync('c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/rainy_widget.txt', 'utf8').trim();
    if (rainyWidget.endsWith('<script src="js/main.js"></script>')) {
        rainyWidget = rainyWidget.replace('<script src="js/main.js"></script>', '').trim();
    }
  } catch(e) {}
}

const WIDGETS_BLOCK = '\n\n' + wspWidget + '\n\n' + rainyWidget + '\n\n';

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');

  // Remove existing WSP Widget
  if (content.includes('<!-- WHATSAPP WIDGET -->')) {
    content = content.replace(/<!-- WHATSAPP WIDGET -->[\s\S]*?<\/style>/, '');
  }

  // Remove existing Rainy Widget
  if (content.includes('<!-- VOZ PREVIEW')) {
    content = content.replace(/<!-- VOZ PREVIEW[\s\S]*?<\/script>/, '');
  }

  // Insert widgets right before the footer
  const footerIndex = content.indexOf('<footer');
  if (footerIndex !== -1) {
    content = content.slice(0, footerIndex) + WIDGETS_BLOCK + content.slice(footerIndex);
  } else {
    // Or before body
    const bodyIndex = content.lastIndexOf('</body>');
    content = content.slice(0, bodyIndex) + WIDGETS_BLOCK + content.slice(bodyIndex);
  }

  // Apply MORE 3D to redirection cards (top 3)
  content = content.replace(
    /box-shadow: 0 15px 40px rgba\(0,0,0,0\.2\), inset 0 0 20px rgba\(255,255,255,0\.02\); backdrop-filter: blur\(10px\); transition: all 0\.4s cubic-bezier\(0\.25, 1, 0\.5, 1\);" onmouseover="this\.style\.transform='translateY\(-15px\) scale\(1\.02\)'; this\.style\.boxShadow='0 30px 60px rgba\(0,0,0,0\.3\), inset 0 0 30px rgba\(255,255,255,0\.05\)'" onmouseout="this\.style\.transform='translateY\(0\) scale\(1\)'; this\.style\.boxShadow='0 15px 40px rgba\(0,0,0,0\.2\), inset 0 0 20px rgba\(255,255,255,0\.02\)'"/g,
    `box-shadow: 0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05); backdrop-filter: blur(10px); transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.transform='translateY(-25px) scale(1.05)'; this.style.boxShadow='0 50px 100px rgba(0,0,0,0.5), inset 0 0 40px rgba(255,255,255,0.1)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 20px 50px rgba(0,0,0,0.3), inset 0 0 20px rgba(255,255,255,0.05)'"`
  );

  // Apply MORE 3D to pricing cards (bottom offers)
  // WSP
  content = content.replace(
    /onmouseover="this\.style\.transform='translateY\(-15px\) scale\(1\.02\)'; this\.style\.boxShadow='0 30px 60px rgba\(37,211,102,0\.2\), inset 0 0 30px rgba\(37,211,102,0\.1\)'" onmouseout="this\.style\.transform='translateY\(0\) scale\(1\)'; this\.style\.boxShadow='0 20px 50px rgba\(0,0,0,0\.1\), inset 0 0 20px rgba\(37,211,102,0\.05\)'"/g,
    `onmouseover="this.style.transform='translateY(-25px) scale(1.05)'; this.style.boxShadow='0 50px 100px rgba(37,211,102,0.4), inset 0 0 40px rgba(37,211,102,0.2)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 20px 50px rgba(0,0,0,0.1), inset 0 0 20px rgba(37,211,102,0.05)'"`
  );

  // Blue (Plan 1)
  content = content.replace(
    /onmouseover="this\.style\.transform='translateY\(-15px\) scale\(1\.02\)'; this\.style\.boxShadow='0 30px 60px rgba\(14,165,233,0\.2\)'" onmouseout="this\.style\.transform='translateY\(0\) scale\(1\)'; this\.style\.boxShadow='0 15px 35px rgba\(0,0,0,0\.1\)'"/g,
    `onmouseover="this.style.transform='translateY(-25px) scale(1.05)'; this.style.boxShadow='0 50px 100px rgba(14,165,233,0.4)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.1)'"`
  );

  // Purple (Plan 2)
  content = content.replace(
    /onmouseover="this\.style\.transform='translateY\(-15px\) scale\(1\.05\)'; this\.style\.boxShadow='0 40px 80px rgba\(168,85,247,0\.3\)'" onmouseout="this\.style\.transform='translateY\(0\) scale\(1\.03\)'; this\.style\.boxShadow='0 20px 50px rgba\(168,85,247,0\.15\)'"/g,
    `onmouseover="this.style.transform='translateY(-30px) scale(1.08)'; this.style.boxShadow='0 60px 120px rgba(168,85,247,0.5)'" onmouseout="this.style.transform='translateY(0) scale(1.03)'; this.style.boxShadow='0 20px 50px rgba(168,85,247,0.15)'"`
  );

  // Gold (Plan 3)
  content = content.replace(
    /onmouseover="this\.style\.transform='translateY\(-15px\) scale\(1\.02\)'; this\.style\.boxShadow='0 30px 60px rgba\(245,158,11,0\.25\)'" onmouseout="this\.style\.transform='translateY\(0\) scale\(1\)'; this\.style\.boxShadow='0 15px 35px rgba\(0,0,0,0\.1\)'"/g,
    `onmouseover="this.style.transform='translateY(-25px) scale(1.05)'; this.style.boxShadow='0 50px 100px rgba(245,158,11,0.5)'" onmouseout="this.style.transform='translateY(0) scale(1)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.1)'"`
  );


  fs.writeFileSync(file, content, 'utf8');
}

console.log("Widgets distributed to all pages and 3D effects amplified!");
