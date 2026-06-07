const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-llamadas.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Fix the white text in the H1
content = content.replace('color:#fff; line-height:1.1; margin-bottom:24px;">\n      La voz que cierra ventas', 'color:#0f172a; line-height:1.1; margin-bottom:24px;">\n      La voz que cierra ventas');
// Just in case the replace above fails due to exact spacing, let's also do a general replace around that area
content = content.replace(/<h1 style="([^"]*?)color:#fff;([^"]*?)">([\s\S]*?)La voz que cierra ventas/, '<h1 style="$1color:#0f172a;$2">$3La voz que cierra ventas');

// 2. Add Stats & Arguments Section
const statsSectionHTML = `
<!-- FLORO: ARGUMENTATION & STATS -->
<section style="background:#ffffff; padding:80px 0; border-top:1px solid #e2e8f0; border-bottom:1px solid #e2e8f0;">
  <div class="inner" style="max-width:1200px; margin:0 auto; padding:0 20px;">
    
    <div style="display:flex; flex-direction:row; align-items:center; gap:60px; flex-wrap:wrap;">
      
      <!-- Text Argumentation -->
      <div style="flex:1; min-width:300px;">
        <h2 style="font-size:2.2rem; font-weight:800; color:#0f172a; margin-bottom:20px; line-height:1.2;">Un vendedor implacable que no pide vacaciones ni aumento de sueldo.</h2>
        <p style="font-size:1.1rem; color:#475569; margin-bottom:20px; line-height:1.6;">
          Reclutar, capacitar y retener talento humano para llamadas masivas es el mayor dolor de cabeza operativo. La rotación es alta, el estrés quema a los equipos y el error humano te cuesta ventas todos los días.
        </p>
        <p style="font-size:1.1rem; color:#475569; margin-bottom:30px; line-height:1.6;">
          Nuestra <strong>Inteligencia Artificial de Voz</strong> elimina esos problemas de raíz. Implementas hoy y mañana tienes un "superasesor" que se sabe tu guión de memoria, rebate objeciones al instante y transfiere al humano solo cuando el cliente está listo para pagar.
        </p>
        <div style="display:flex; flex-direction:column; gap:12px;">
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:24px; height:24px; border-radius:50%; background:#dcfce7; color:#16a34a; display:flex; justify-content:center; align-items:center; flex-shrink:0;">&check;</div>
            <span style="font-size:1rem; color:#1e293b; font-weight:600;">Cero ausencias, tardanzas o quejas.</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:24px; height:24px; border-radius:50%; background:#dcfce7; color:#16a34a; display:flex; justify-content:center; align-items:center; flex-shrink:0;">&check;</div>
            <span style="font-size:1rem; color:#1e293b; font-weight:600;">100% adherencia al guión de ventas garantizada.</span>
          </div>
          <div style="display:flex; align-items:center; gap:10px;">
            <div style="width:24px; height:24px; border-radius:50%; background:#dcfce7; color:#16a34a; display:flex; justify-content:center; align-items:center; flex-shrink:0;">&check;</div>
            <span style="font-size:1rem; color:#1e293b; font-weight:600;">Calidad de voz inmutable (nunca suena cansado).</span>
          </div>
        </div>
      </div>
      
      <!-- Stats Grid -->
      <div style="flex:1; min-width:300px; display:grid; grid-template-columns:1fr 1fr; gap:20px;">
        <div style="background:#f8fafc; padding:30px; border-radius:16px; border:1px solid #e2e8f0; text-align:center;">
          <div style="font-size:3rem; font-weight:900; color:#0ea5e9; line-height:1; margin-bottom:10px;">10x</div>
          <div style="font-size:0.9rem; color:#475569; font-weight:600;">M&aacute;s llamadas por hora que un asesor promedio</div>
        </div>
        <div style="background:#f8fafc; padding:30px; border-radius:16px; border:1px solid #e2e8f0; text-align:center;">
          <div style="font-size:3rem; font-weight:900; color:#3b82f6; line-height:1; margin-bottom:10px;">-70%</div>
          <div style="font-size:0.9rem; color:#475569; font-weight:600;">Reducci&oacute;n en costos operativos de Call Center</div>
        </div>
        <div style="background:#f8fafc; padding:30px; border-radius:16px; border:1px solid #e2e8f0; text-align:center;">
          <div style="font-size:3rem; font-weight:900; color:#8b5cf6; line-height:1; margin-bottom:10px;">&lt;1s</div>
          <div style="font-size:0.9rem; color:#475569; font-weight:600;">Tiempo de respuesta entre oraciones (Latencia)</div>
        </div>
        <div style="background:#f8fafc; padding:30px; border-radius:16px; border:1px solid #e2e8f0; text-align:center;">
          <div style="font-size:3rem; font-weight:900; color:#10b981; line-height:1; margin-bottom:10px;">24/7</div>
          <div style="font-size:0.9rem; color:#475569; font-weight:600;">Disponibilidad total, sin domingos ni feriados</div>
        </div>
      </div>
      
    </div>
  </div>
</section>

<!-- HORIZONTAL OFFERS SECTION -->`;

content = content.replace('<!-- HORIZONTAL OFFERS SECTION -->', statsSectionHTML);

fs.writeFileSync(file, content, 'utf8');
console.log("Stats section injected and white text fixed!");
