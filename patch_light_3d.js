const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the dark background gradient with a lighter glassmorphism gradient
content = content.replace(/background: linear-gradient\(145deg, rgba\(255,255,255,0\.06\), rgba\(0,0,0,0\.2\)\)/g, 'background: linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))');

fs.writeFileSync(file, content, 'utf8');
console.log("Card backgrounds brightened successfully!");
