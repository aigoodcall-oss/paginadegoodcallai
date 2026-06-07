const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/css/styles.css';
let content = fs.readFileSync(file, 'utf8');

// The problematic CSS block for light theme blue backgrounds
// Let's replace the blue gradients with grayish whites and fix the text colors

content = content.replace(
    /\[data-theme="light"\] \.features-section,\s*\[data-theme="light"\] #flujo-vivo,\s*\[data-theme="light"\] \.testi-section\s*\{\s*background: linear-gradient\(135deg, #38bdf8 0%, #0284c7 100%\) !important;\s*position: relative;\s*\}/g,
    `[data-theme="light"] .features-section,
[data-theme="light"] #flujo-vivo,
[data-theme="light"] .testi-section {
  background: #f8fafc !important; /* Blanco agrisado */
  position: relative;
}`
);

// Fix heading color: white -> ink-1
content = content.replace(
    /\[data-theme="light"\] \.features-section \.sec-h2,\s*\[data-theme="light"\] #flujo-vivo \.sec-h2,\s*\[data-theme="light"\] \.testi-section \.sec-h2\s*\{ color: #ffffff; \}/g,
    `[data-theme="light"] .features-section .sec-h2,
[data-theme="light"] #flujo-vivo .sec-h2,
[data-theme="light"] .testi-section .sec-h2 { color: var(--ink-1) !important; }`
);

// Fix paragraph color: transparent white -> ink-2
content = content.replace(
    /\[data-theme="light"\] \.features-section \.sec-p,\s*\[data-theme="light"\] #flujo-vivo \.sec-p,\s*\[data-theme="light"\] \.testi-section \.sec-p\s*\{ color: rgba\(255, 255, 255, 0\.85\); \}/g,
    `[data-theme="light"] .features-section .sec-p,
[data-theme="light"] #flujo-vivo .sec-p,
[data-theme="light"] .testi-section .sec-p { color: var(--ink-2) !important; }`
);

// Fix eyebrow color: white -> ink-3
content = content.replace(
    /\[data-theme="light"\] \.features-section \.eyebrow,\s*\[data-theme="light"\] #flujo-vivo \.eyebrow,\s*\[data-theme="light"\] \.testi-section \.eyebrow\s*\{ color: #ffffff !important; font-size: 1rem !important; font-weight: 900 !important; opacity: 1 !important; \}/g,
    `[data-theme="light"] .features-section .eyebrow,
[data-theme="light"] #flujo-vivo .eyebrow,
[data-theme="light"] .testi-section .eyebrow { color: var(--accent) !important; font-size: 1rem !important; font-weight: 900 !important; opacity: 1 !important; }`
);

// Fix bold em text
content = content.replace(
    /\[data-theme="light"\] \.features-section em,\s*\[data-theme="light"\] #flujo-vivo em,\s*\[data-theme="light"\] \.testi-section em\s*\{\s*background: linear-gradient\(90deg, #7dd3fc, #e0f2fe\);\s*-webkit-background-clip: text;\s*-webkit-text-fill-color: transparent;\s*\}/g,
    `[data-theme="light"] .features-section em,
[data-theme="light"] #flujo-vivo em,
[data-theme="light"] .testi-section em {
  background: none;
  -webkit-text-fill-color: initial;
  color: var(--accent);
}`
);

// Fix testimonial cards background inside light theme blue sections: previously they were transparent/glass
// Just let them use their default style, or force to white
content = content.replace(
    /\[data-theme="light"\] \.features-section \.feat-card\s*\{\s*background: rgba\(255, 255, 255, 0\.1\);\s*backdrop-filter: blur\(10px\);\s*-webkit-backdrop-filter: blur\(10px\);\s*border: 1px solid rgba\(255, 255, 255, 0\.2\);\s*box-shadow: 0 12px 30px rgba\(0,0,0,0\.1\);\s*\}/g,
    `[data-theme="light"] .features-section .feat-card {
  background: #ffffff;
  border: 1px solid var(--border);
  box-shadow: 0 12px 30px rgba(0,0,0,0.05);
}`
);

fs.writeFileSync(file, content, 'utf8');
console.log("CSS blue colors replaced with grayscale/whites!");
