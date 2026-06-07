const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// Replace the very light gray with a slightly darker, more noticeable gray
content = content.replace(/background:\s*#f8fafc;/g, 'background: #f1f5f9;');

fs.writeFileSync(file, content, 'utf8');
console.log("Section background colors updated to be more noticeable.");
