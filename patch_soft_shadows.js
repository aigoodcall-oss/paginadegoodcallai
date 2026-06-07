const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the extreme aggressive dark shadows with elegant light-theme soft shadows

// 1. Base State Shadows (rgba(0,0,0,0.7) and inner dark shadows)
content = content.replace(
    /box-shadow: 0 25px 50px rgba\(0,0,0,0\.7\), 0 10px 20px (rgba\([^)]+\)), inset 0 2px 2px rgba\(255,255,255,0\.2\), inset 0 -10px 20px rgba\(0,0,0,0\.3\);/g,
    'box-shadow: 0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px $1, inset 0 2px 2px rgba(255,255,255,1);'
);

// 2. Hover State Shadows (rgba(0,0,0,0.9) and inner dark shadows)
content = content.replace(
    /this\.style\.boxShadow='0 50px 80px rgba\(0,0,0,0\.9\), 0 20px 40px (rgba\([^)]+\)), inset 0 2px 2px rgba\(255,255,255,0\.3\), inset 0 -10px 20px rgba\(0,0,0,0\.3\);'/g,
    "this.style.boxShadow='0 30px 60px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.06), 0 20px 40px $1, inset 0 2px 2px rgba(255,255,255,1);'"
);

// 3. Re-apply the base shadow to onmouseout events
content = content.replace(
    /this\.style\.boxShadow='0 25px 50px rgba\(0,0,0,0\.7\), 0 10px 20px (rgba\([^)]+\)), inset 0 2px 2px rgba\(255,255,255,0\.2\), inset 0 -10px 20px rgba\(0,0,0,0\.3\);'/g,
    "this.style.boxShadow='0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px $1, inset 0 2px 2px rgba(255,255,255,1);'"
);

fs.writeFileSync(file, content, 'utf8');
console.log("Shadows softened successfully!");
