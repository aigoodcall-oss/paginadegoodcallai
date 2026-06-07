const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// The layout injected in previous step started with:
// <!-- Layout Principal: Video Izquierda, Ofertas Derecha -->
// <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; align-items: stretch; max-width: 1200px; margin: 0 auto;">

// We will replace that flex container properties to increase gap and margin-top.
content = content.replace(
  /<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; align-items: stretch; max-width: 1200px; margin: 0 auto;">/,
  '<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 60px; align-items: stretch; max-width: 1200px; margin: 60px auto 0;">'
);

// We will update the Video wrapper to be a bit wider (320px) to give it more breathing room.
content = content.replace(
  /<div style="flex: 0 0 280px; height: 500px; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba\(0,0,0,0\.15\); position: relative; background: #000;">/,
  '<div style="flex: 0 0 320px; height: 500px; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.15); position: relative; background: #000;">'
);

// We will update the Video CSS to adjust the crop (show more left/top, scale 1.25, origin left top)
content = content.replace(
  /<video src="media\/demo_llamadas\.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; transform: scale\(1\.4\); transform-origin: center center;"><\/video>/,
  '<video src="media/demo_llamadas.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; transform: scale(1.25); transform-origin: 10% 10%;"></video>'
);

// Adjust the grid gap inside the offers to give them a bit more space
content = content.replace(
  /<div style="flex: 1; display: grid; grid-template-columns: repeat\(auto-fit, minmax\(220px, 1fr\)\); gap: 20px; align-items: stretch;">/,
  '<div style="flex: 1; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 25px; align-items: stretch;">'
);


fs.writeFileSync(file, content, 'utf8');
console.log("Fixed video crop and layout spacing!");
