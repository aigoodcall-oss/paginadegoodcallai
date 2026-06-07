const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

function build3DStyle(colorHex, colorRgba, isHero = false) {
    const baseBorder = isHero ? '1px solid rgba(255,255,255,0.1)' : `1px solid ${colorRgba.replace('1)', '0.3)')}`;
    const baseBorderBottom = isHero ? '4px solid rgba(255,255,255,0.3)' : `4px solid ${colorHex}`;
    const baseGlow = isHero ? 'rgba(255,255,255,0.1)' : colorRgba.replace('1)', '0.3)');
    const hoverGlow = isHero ? 'rgba(255,255,255,0.2)' : colorRgba.replace('1)', '0.6)');

    return `background: linear-gradient(145deg, rgba(255,255,255,0.06), rgba(0,0,0,0.2)); border: ${baseBorder}; border-bottom: ${baseBorderBottom}; border-radius: 24px; padding: 40px 30px; backdrop-filter: blur(12px); box-shadow: 0 25px 50px rgba(0,0,0,0.7), 0 10px 20px ${baseGlow}, inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -10px 20px rgba(0,0,0,0.3); transform: perspective(1000px) translateZ(0) translateY(-5px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.transform='perspective(1000px) translateZ(30px) translateY(-20px)'; this.style.boxShadow='0 50px 80px rgba(0,0,0,0.9), 0 20px 40px ${hoverGlow}, inset 0 2px 2px rgba(255,255,255,0.3), inset 0 -10px 20px rgba(0,0,0,0.3)';" onmouseout="this.style.transform='perspective(1000px) translateZ(0) translateY(-5px)'; this.style.boxShadow='0 25px 50px rgba(0,0,0,0.7), 0 10px 20px ${baseGlow}, inset 0 2px 2px rgba(255,255,255,0.2), inset 0 -10px 20px rgba(0,0,0,0.3)';"`;
}

// 1. Redirection cards (Hero)
// Replace the entire style block for these 3 div cards.
const heroCardsRegex = /background:rgba\(255,255,255,0\.03\); border:1px solid rgba\(255,255,255,0\.1\); border-radius:24px; padding:30px; text-align:center; box-shadow:.*? onmouseout=".*?"/g;
const newHeroStyle = build3DStyle('#ffffff', 'rgba(255,255,255,1)', true);
// Need to keep text-align:center
content = content.replace(heroCardsRegex, `text-align: center; ${newHeroStyle}`);

// 2. WSP Pricing Card
const wspCardRegex = /background: rgba\(255,255,255,0\.03\); border: 2px solid rgba\(37,211,102,0\.3\); border-radius: 24px; padding: 40px; text-align: center; box-shadow:.*? onmouseout=".*?"/g;
const newWspStyle = build3DStyle('#25D366', 'rgba(37,211,102,1)', false);
content = content.replace(wspCardRegex, `text-align: center; ${newWspStyle}`);

// 3. Voice Plan 1 (Blue)
const blueVoiceRegex = /background: var\(--bg-card\); border: 1px solid rgba\(14,165,233,0\.2\); border-radius: 24px; padding: 40px 30px; text-align: center; transition:.*? onmouseout=".*?"/g;
const newBlueStyle = build3DStyle('#0ea5e9', 'rgba(14,165,233,1)', false);
content = content.replace(blueVoiceRegex, `text-align: center; ${newBlueStyle}`);

// 4. Voice Plan 2 (Purple)
const purpleVoiceRegex = /background: var\(--bg-card\); border: 2px solid #a855f7; border-radius: 24px; padding: 40px 30px; text-align: center; transition:.*? onmouseout=".*?"/g;
const newPurpleStyle = build3DStyle('#a855f7', 'rgba(168,85,247,1)', false);
content = content.replace(purpleVoiceRegex, `text-align: center; position: relative; ${newPurpleStyle}`);

// 5. Voice Plan 3 (Gold)
const goldVoiceRegex = /background: var\(--bg-card\); border: 1px solid rgba\(245,158,11,0\.3\); border-radius: 24px; padding: 40px 30px; text-align: center; transition:.*? onmouseout=".*?"/g;
const newGoldStyle = build3DStyle('#f59e0b', 'rgba(245,158,11,1)', false);
content = content.replace(goldVoiceRegex, `text-align: center; ${newGoldStyle}`);

// 6. Web Plan 1 (Blue)
const blueWebRegex = /background: var\(--bg-card\); border: 1px solid rgba\(14,165,233,0\.2\); border-radius: 24px; padding: 40px 30px; text-align: left; transition:.*? onmouseout=".*?"/g;
content = content.replace(blueWebRegex, `text-align: left; ${newBlueStyle}`);

// 7. Web Plan 2 (Purple)
const purpleWebRegex = /background: var\(--bg-card\); border: 2px solid #a855f7; border-radius: 24px; padding: 40px 30px; text-align: left; transition:.*? onmouseout=".*?"/g;
content = content.replace(purpleWebRegex, `text-align: left; position: relative; ${newPurpleStyle}`);

// 8. Web Plan 3 (Gold)
const goldWebRegex = /background: var\(--bg-card\); border: 1px solid rgba\(245,158,11,0\.3\); border-radius: 24px; padding: 40px 30px; text-align: left; transition:.*? onmouseout=".*?"/g;
content = content.replace(goldWebRegex, `text-align: left; ${newGoldStyle}`);

fs.writeFileSync(file, content, 'utf8');
console.log("Extreme 3D Volumetric effects applied to all cards!");
