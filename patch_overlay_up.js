const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// The current HTML has: 'bottom: 20px; right: 20px;'
const oldHTML = '<div style="position: absolute; bottom: 20px; right: 20px; background: rgba(255,255,255,0.95);';
const newHTML = '<div style="position: absolute; bottom: 45px; right: 20px; background: rgba(255,255,255,0.95);';

if (content.indexOf(oldHTML) !== -1) {
    content = content.replace(oldHTML, newHTML);
    fs.writeFileSync(file, content, 'utf8');
    console.log("Overlay moved up successfully!");
} else {
    console.log("Could not find the target string. Maybe it was already changed?");
}
