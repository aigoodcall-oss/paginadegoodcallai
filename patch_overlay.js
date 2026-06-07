const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// Change left to right in the absolute positioning for the web video overlay
const oldHTML = '<div style="position: absolute; bottom: 20px; left: 20px; background: rgba(255,255,255,0.95);';
const newHTML = '<div style="position: absolute; bottom: 20px; right: 20px; background: rgba(255,255,255,0.95);';

if (content.indexOf(oldHTML) !== -1) {
    content = content.replace(oldHTML, newHTML);
    fs.writeFileSync(file, content, 'utf8');
    console.log("Overlay moved to the bottom right successfully!");
} else {
    console.log("Could not find the target string.");
}
