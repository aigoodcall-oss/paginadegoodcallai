const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Add global ambient grid and animations to style tag
const globalAmbient = `
/* AMBIENT GRID AND ORBS */
body {
  background-color: #060a14;
  background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 30px 30px;
}
.ambient-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(150px);
  z-index: 0;
  pointer-events: none;
  opacity: 0.5;
}
`;
if (!content.includes('/* AMBIENT GRID AND ORBS */')) {
    content = content.replace('</style>', globalAmbient + '\n</style>');
}

// 2. Fix WSP Section
content = content.replace(
    /<section id="wsp-ia" style="padding: 100px 0; background: var\(--bg\); position: relative; overflow: hidden; border-top: 1px solid rgba\(255,255,255,0\.05\);">\s*<div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">/g,
    `<section id="wsp-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05); background: linear-gradient(180deg, rgba(6,10,20,0) 0%, rgba(37,211,102,0.05) 100%);">
  <div class="ambient-glow" style="top: -20%; left: -10%; width: 600px; height: 600px; background: rgba(37,211,102,0.25);"></div>
  <div class="ambient-glow" style="bottom: -20%; right: -10%; width: 500px; height: 500px; background: rgba(37,211,102,0.15);"></div>
  <div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2;">`
);

// 3. Fix Voice Section
content = content.replace(
    /<section id="voice-ia" style="padding: 100px 0; background: linear-gradient\(to bottom, var\(--bg\) 0%, rgba\(168,85,247,0\.05\) 100%\); position: relative; overflow: hidden; border-top: 1px solid rgba\(255,255,255,0\.05\);">\s*<div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">/g,
    `<section id="voice-ia" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05); background: linear-gradient(180deg, rgba(6,10,20,0.6) 0%, rgba(168,85,247,0.08) 100%); backdrop-filter: blur(8px);">
  <div class="ambient-glow" style="top: 10%; right: -15%; width: 700px; height: 700px; background: rgba(168,85,247,0.25);"></div>
  <div class="ambient-glow" style="bottom: -10%; left: -10%; width: 400px; height: 400px; background: rgba(168,85,247,0.15);"></div>
  <div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2;">`
);

// 4. Fix Web Section
content = content.replace(
    /<section id="diseno-web" style="padding: 100px 0; background: var\(--bg\); position: relative; overflow: hidden; border-top: 1px solid rgba\(255,255,255,0\.05\);">\s*<div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">/g,
    `<section id="diseno-web" style="padding: 120px 0; position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05); background: linear-gradient(180deg, rgba(6,10,20,0) 0%, rgba(14,165,233,0.05) 100%);">
  <div class="ambient-glow" style="top: -10%; left: 30%; width: 800px; height: 800px; background: rgba(14,165,233,0.2);"></div>
  <div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px; position: relative; z-index: 2;">`
);

fs.writeFileSync(file, content, 'utf8');
console.log("Ambient backgrounds injected successfully!");
