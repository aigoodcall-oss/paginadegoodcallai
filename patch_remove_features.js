const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-whatsapp.html';
let content = fs.readFileSync(file, 'utf8');

const startDelete = content.indexOf('<!-- FEATURES -->');
const endDelete = content.indexOf('<!-- PROCESS -->');

if (startDelete !== -1 && endDelete !== -1) {
    const newContent = content.substring(0, startDelete) + content.substring(endDelete);
    fs.writeFileSync(file, newContent, 'utf8');
    console.log("Only the FEATURES section was removed!");
} else {
    console.log("Could not find start or end points.");
}
