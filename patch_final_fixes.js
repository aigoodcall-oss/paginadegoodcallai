const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/wsp_autoreply\.png/g, 'wsp_green_chat.png');
content = content.replace(/web_dev_corporate\.png/g, 'web_screen_top.png');

const oldGridStyle = 'style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:30px; text-align:left;"';
if (content.includes(oldGridStyle)) {
  content = content.replace(oldGridStyle, 'class="services-grid"');
}

if (!content.includes('services-grid {')) {
  const css = `
<style>
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  text-align: left;
}
@media (max-width: 992px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
`;
  content = content.replace('</head>', css + '\n</head>');
}

fs.writeFileSync(file, content, 'utf8');
console.log("Images and grid layout fixed!");
