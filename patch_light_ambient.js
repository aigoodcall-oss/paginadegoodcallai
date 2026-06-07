const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace the dark body background with a light one
content = content.replace(
    /body \{\s*background-color: #060a14;\s*background-image: radial-gradient\(rgba\(255, 255, 255, 0\.05\) 1px, transparent 1px\);\s*background-size: 30px 30px;\s*\}/g,
    `body {
  background-color: var(--bg); /* Fallback to theme bg */
  background-image: radial-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  background-size: 30px 30px;
}`
);

// 2. WSP Section (Light Green)
content = content.replace(
    /background: linear-gradient\(180deg, rgba\(6,10,20,0\) 0%, rgba\(37,211,102,0\.05\) 100%\);/g,
    'background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(37,211,102,0.05) 100%);'
);

// 3. Voice Section (Light Purple)
content = content.replace(
    /background: linear-gradient\(180deg, rgba\(6,10,20,0\.6\) 0%, rgba\(168,85,247,0\.08\) 100%\);/g,
    'background: linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(168,85,247,0.08) 100%);'
);

// 4. Web Section (Light Blue)
content = content.replace(
    /background: linear-gradient\(180deg, rgba\(6,10,20,0\) 0%, rgba\(14,165,233,0\.05\) 100%\);/g,
    'background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(14,165,233,0.05) 100%);'
);

// We also need to fix the Cards if they were hardcoded with dark gradients:
// The cards currently have: background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02));
// On a light canvas, white-on-white glassmorphism is invisible!
// They should be white blocks with shadows, e.g., background: #ffffff;
content = content.replace(/background: linear-gradient\(145deg, rgba\(255,255,255,0\.08\), rgba\(255,255,255,0\.02\)\)/g, 'background: #ffffff');

fs.writeFileSync(file, content, 'utf8');
console.log("Light ambient theme applied successfully!");
