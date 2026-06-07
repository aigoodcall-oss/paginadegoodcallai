const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-whatsapp.html';
let content = fs.readFileSync(file, 'utf8');

const startDelete = content.indexOf('<!-- FEATURES -->');
const ctaSection = '<div class="cta-btns">';
const endDelete = content.indexOf('</div>', content.indexOf('</div>', content.indexOf('</div>', content.indexOf(ctaSection)))) + 6;

// Let's be safer and find the start of the next div after cta-section which is gcOfferOverlay
const ctaAnchor = '<div id="gcOfferOverlay"';
const endDeleteSafe = content.indexOf(ctaAnchor);

if (startDelete !== -1 && endDeleteSafe !== -1) {
    const newContent = content.substring(0, startDelete) + '\n\n' + content.substring(endDeleteSafe);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Sections removed successfully from ia-whatsapp.html!");
} else {
    console.log("Could not find start or end points.");
}
