const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-llamadas.html';
let content = fs.readFileSync(file, 'utf8');

const statsStart = content.indexOf('<!-- FLORO: ARGUMENTATION & STATS -->');
const offersStart = content.indexOf('<!-- HORIZONTAL OFFERS SECTION -->');

if (statsStart > -1 && offersStart > -1) {
    const statsBlock = content.substring(statsStart, offersStart);
    
    // Remove stats from original location
    let newContent = content.replace(statsBlock, '');
    
    // Find where the offers section ends (first <script> tag after offersStart)
    const scriptStart = newContent.indexOf('<script>', offersStart);
    
    if (scriptStart > -1) {
        // Insert statsBlock right before the first script
        newContent = newContent.substring(0, scriptStart) + '\n' + statsBlock + '\n' + newContent.substring(scriptStart);
        fs.writeFileSync(file, newContent, 'utf8');
        console.log("Stats section moved to the bottom successfully!");
    } else {
        console.error("Could not find the end of the offers section.");
    }
} else {
    console.error("Could not find sections.");
}
