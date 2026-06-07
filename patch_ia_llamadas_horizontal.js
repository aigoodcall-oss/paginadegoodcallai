const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-llamadas.html';
let content = fs.readFileSync(file, 'utf8');

// We want to keep the `<head>` up to `<!-- HERO -->`
const heroStart = content.indexOf('<!-- HERO VOICE AI -->');
if(heroStart === -1) {
    console.error("Could not find new hero start.");
    process.exit(1);
}
let header = content.substring(0, heroStart);

// We want to replace everything down to `<!-- FOOTER -->` or similar, but the previous script didn't keep the footer correctly.
// Let's just find the closing `</section>` of the OFFERS section to see where the footer scripts start.
const gcOfferStart = content.indexOf('<div id="gcOfferOverlay"');
let footerScripts = content.substring(gcOfferStart);

// However, we need to modify the gcOfferOverlay to show $299 Offer
footerScripts = footerScripts.replace('Plan Anual $89/mes', '1 IA de Llamadas por $299/mes');
footerScripts = footerScripts.replace('¡Aprovecha antes que se agoten los cupos!', 'Oferta Especial: Tu primer asesor de IA a precio reducido.');
footerScripts = footerScripts.replace('Elegir Plan Anual →', 'Reclamar Oferta $299 →');
footerScripts = footerScripts.replace('https://wa.me/51987312687?text=Hola%2C%20quiero%20aprovechar%20la%20oferta%20rel%C3%A1mpago%20del%20plan%20anual%20a%2089', 'https://wa.me/51987312687?text=Hola%2C%20quiero%20la%20oferta%20especial%20de%20IA%20de%20Llamadas%20a%20299');

const newHero = `
<!-- HERO VOICE AI -->
<section id="hero" style="background:#020617; padding-top:140px; padding-bottom:100px; position:relative; overflow:hidden;">
  <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:800px; height:800px; border-radius:50%; background:radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%); pointer-events:none;"></div>
  
  <div class="inner" style="position:relative; z-index:2; max-width:1200px; margin:0 auto; text-align:center;">
    <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 14px; background:rgba(0,212,255,0.1); border:1px solid rgba(0,212,255,0.2); border-radius:20px; font-size:0.85rem; font-weight:700; color:#00d4ff; margin-bottom:24px;">
      <span style="width:8px; height:8px; background:#00d4ff; border-radius:50%; box-shadow:0 0 10px #00d4ff;"></span> Call Center IA 24/7
    </div>
    <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight:900; color:#fff; line-height:1.1; margin-bottom:24px;">
      La voz que cierra ventas<br>
      <em style="color:#00d4ff; font-style:normal;">mientras t&uacute; duermes.</em>
    </h1>
    <p style="font-size:1.1rem; color:rgba(255,255,255,0.7); max-width:700px; margin:0 auto 40px; line-height:1.6;">
      Atenci&oacute;n al cliente, recordatorios de citas y llamadas en fr&iacute;o masivas. Reducimos tus costos operativos y escalamos tus ventas sin contratar más personal.
    </p>
    
    <!-- Audio Wave Animation Simulation -->
    <div style="display:flex; justify-content:center; align-items:center; gap:6px; height:60px; margin-bottom:40px;">
      <div style="width:6px; height:20px; background:#00d4ff; border-radius:3px; animation:wave 1s ease-in-out infinite;"></div>
      <div style="width:6px; height:40px; background:#00d4ff; border-radius:3px; animation:wave 1s ease-in-out infinite 0.2s;"></div>
      <div style="width:6px; height:60px; background:#3b82f6; border-radius:3px; animation:wave 1s ease-in-out infinite 0.4s;"></div>
      <div style="width:6px; height:30px; background:#00d4ff; border-radius:3px; animation:wave 1s ease-in-out infinite 0.6s;"></div>
      <div style="width:6px; height:50px; background:#00d4ff; border-radius:3px; animation:wave 1s ease-in-out infinite 0.8s;"></div>
    </div>
    <style>@keyframes wave { 0%, 100% {transform: scaleY(0.5); opacity:0.5;} 50% {transform: scaleY(1); opacity:1;} }</style>
  </div>
</section>

<!-- FLORO: USE CASES -->
<section style="background:#f1f5f9; padding:100px 0;">
  <div class="inner" style="max-width:1200px; margin:0 auto; padding:0 20px;">
    <div style="text-align:center; margin-bottom:60px;">
      <h2 style="font-size:2.5rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Dise&ntilde;ado para la <em style="color:#0ea5e9; font-style:normal;">Eficiencia Absoluta</em></h2>
      <p style="font-size:1.1rem; color:#475569; max-width:600px; margin:0 auto;">Tres frentes de batalla donde nuestra IA de Llamadas domina y supera a cualquier operador humano tradicional.</p>
    </div>
    
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:30px;">
      <!-- ATC -->
      <div style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:50px; height:50px; background:rgba(14,165,233,0.1); border-radius:14px; display:flex; justify-content:center; align-items:center; margin-bottom:20px; color:#0ea5e9;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <h3 style="font-size:1.3rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Atenci&oacute;n al Cliente (Inbound)</h3>
        <p style="font-size:0.95rem; color:#64748b; line-height:1.6;">
          Se acabaron las colas de espera. Tu bot contesta inmediatamente cientos de llamadas al mismo tiempo. Resuelve dudas, da precios y brinda soporte con paciencia infinita las 24 horas del d&iacute;a.
        </p>
      </div>
      
      <!-- GESTION -->
      <div style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:50px; height:50px; background:rgba(59,130,246,0.1); border-radius:14px; display:flex; justify-content:center; align-items:center; margin-bottom:20px; color:#3b82f6;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
        <h3 style="font-size:1.3rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Gestión Operativa</h3>
        <p style="font-size:0.95rem; color:#64748b; line-height:1.6;">
          Automatiza el trabajo pesado. La IA realiza llamadas proactivas para confirmar citas, recordar pagos pendientes y coordinar log&iacute;stica de entregas, registrando todo directamente en tu sistema.
        </p>
      </div>
      
      <!-- COLD CALLING -->
      <div style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:50px; height:50px; background:rgba(14,165,233,0.1); border-radius:14px; display:flex; justify-content:center; align-items:center; margin-bottom:20px; color:#0ea5e9;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
        </div>
        <h3 style="font-size:1.3rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Ventas en Fr&iacute;o (Outbound)</h3>
        <p style="font-size:0.95rem; color:#64748b; line-height:1.6;">
          Prospecci&oacute;n agresiva y masiva. La IA llama a miles de prospectos por d&iacute;a, presenta tu oferta, filtra a los interesados y transfiere las llamadas en caliente a tus asesores humanos para cerrar la venta.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- HORIZONTAL OFFERS SECTION -->
<section style="background:#ffffff; padding:100px 0;">
  <div class="inner" style="max-width:1200px; margin:0 auto; padding:0 20px;">
    <div style="text-align:center; margin-bottom:80px;">
      <h2 style="font-size:2.5rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Planes de Call Center IA</h2>
      <p style="font-size:1.1rem; color:#475569; max-width:600px; margin:0 auto;">Escucha a nuestra IA en acci&oacute;n y elige la potencia de fuego que tu negocio necesita.</p>
    </div>
    
    <!-- OFFER 1: 1 AI (Video Left, Text Right) -->
    <div style="display:flex; flex-direction:row; align-items:center; gap:60px; margin-bottom:100px; flex-wrap:wrap;">
      <div style="flex:1; min-width:300px; max-width:400px; margin:0 auto; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:100%; aspect-ratio:9/16; background:#000; position:relative;">
          <video src="media/demo_llamadas.mp4" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; opacity:0.9;"></video>
          <div style="position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.6); backdrop-filter:blur(5px); padding:6px 12px; border-radius:20px; color:#fff; font-size:0.75rem; font-weight:700; border:1px solid rgba(255,255,255,0.2);">
            Demo en vivo: 1 IA Exclusiva
          </div>
        </div>
      </div>
      <div style="flex:1.5; min-width:300px;">
        <div style="display:inline-block; padding:6px 12px; background:#f1f5f9; color:#475569; font-size:0.8rem; font-weight:700; border-radius:20px; margin-bottom:15px;">Ideal para PYMES</div>
        <h3 style="font-size:2.5rem; font-weight:800; color:#0f172a; margin-bottom:10px; line-height:1.1;">Plan 1 Asesor IA</h3>
        <p style="font-size:1.1rem; color:#64748b; margin-bottom:30px; line-height:1.6;">Automatiza tu atenci&oacute;n al cliente y liber&aacute; a tu equipo de las llamadas repetitivas. Un agente incansable trabajando 24/7 para ti.</p>
        <div style="font-size:3rem; font-weight:900; color:#0ea5e9; margin-bottom:30px; line-height:1;"><span style="font-size:1.5rem; vertical-align:super;">$</span>350<span style="font-size:1rem; font-weight:500; color:#64748b;"> /mes</span></div>
        <ul style="list-style:none; padding:0; margin:0 0 40px; font-size:1.05rem; color:#334155; display:flex; flex-direction:column; gap:16px;">
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> <strong>1 IA Simult&aacute;nea</strong> (Atiende 1 llamada a la vez)</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> Hasta <strong>1000 Llamadas</strong> por d&iacute;a</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> Voz Humana Est&aacute;ndar Premium</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> Agendamiento y derivaci&oacute;n b&aacute;sica</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display:inline-block; background:#0f172a; color:#fff; padding:16px 32px; border-radius:12px; font-weight:700; text-decoration:none; font-size:1.1rem; transition:transform 0.2s;">Contratar Plan Base &rarr;</a>
      </div>
    </div>
  </div>
</section>

<!-- OFFER 2: 2 AIs (Text Left, Video Right) WITH DARK BACKGROUND -->
<section style="background:#0f172a; padding:100px 0; color:#fff;">
  <div class="inner" style="max-width:1200px; margin:0 auto; padding:0 20px;">
    <div style="display:flex; flex-direction:row; align-items:center; gap:60px; flex-wrap:wrap-reverse;">
      <div style="flex:1.5; min-width:300px;">
        <div style="display:inline-block; padding:6px 12px; background:rgba(59,130,246,0.2); color:#60a5fa; font-size:0.8rem; font-weight:700; border-radius:20px; margin-bottom:15px; border:1px solid rgba(59,130,246,0.3);">M&Aacute;S VENDIDO</div>
        <h3 style="font-size:2.5rem; font-weight:800; color:#fff; margin-bottom:10px; line-height:1.1;">Pack 2 Asesores</h3>
        <p style="font-size:1.1rem; color:#94a3b8; margin-bottom:30px; line-height:1.6;">Para negocios en crecimiento que necesitan manejar picos de llamadas sin perder ni un solo cliente. Atenci&oacute;n simult&aacute;nea y prospecci&oacute;n activa.</p>
        <div style="font-size:3rem; font-weight:900; color:#60a5fa; margin-bottom:30px; line-height:1;"><span style="font-size:1.5rem; vertical-align:super;">$</span>600<span style="font-size:1rem; font-weight:500; color:#94a3b8;"> /mes</span></div>
        <ul style="list-style:none; padding:0; margin:0 0 30px; font-size:1.05rem; color:#cbd5e1; display:flex; flex-direction:column; gap:16px;">
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#60a5fa; font-size:1.2rem;">&check;</span> <strong>2 IAs Simult&aacute;neas</strong> (Doble capacidad)</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#60a5fa; font-size:1.2rem;">&check;</span> Hasta <strong>3000 Llamadas</strong> por d&iacute;a</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#60a5fa; font-size:1.2rem;">&check;</span> CRM Avanzado y Automatizaci&oacute;n</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#60a5fa; font-size:1.2rem;">&check;</span> Entrenado para Cold Calling Inmobiliario/Autos</li>
        </ul>
        
        <!-- CLONED VOICE WARNING -->
        <div style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); border-left:4px solid #60a5fa; border-radius:8px; padding:16px; margin-bottom:30px;">
          <h4 style="color:#fff; font-size:0.95rem; font-weight:700; margin-bottom:4px;">Nota sobre Voz Clonada</h4>
          <p style="font-size:0.85rem; color:#94a3b8; margin:0;">Si deseas que la IA utilice una voz clonada exacta de tu mejor vendedor o de ti mismo, <strong>aplica un costo adicional</strong> por generaci&oacute;n de modelo y latencia ultra-baja.</p>
        </div>

        <a href="https://wa.me/51912440960" target="_blank" style="display:inline-block; background:#3b82f6; color:#fff; padding:16px 32px; border-radius:12px; font-weight:700; text-decoration:none; font-size:1.1rem; transition:transform 0.2s;">Contratar Pack 2 &rarr;</a>
      </div>
      <div style="flex:1; min-width:300px; max-width:400px; margin:0 auto; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.5); border:2px solid #3b82f6;">
        <div style="width:100%; aspect-ratio:9/16; background:#000; position:relative;">
          <video src="media/demo_llamadas_2.mp4" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; opacity:0.95;"></video>
          <div style="position:absolute; bottom:15px; right:15px; background:rgba(59,130,246,0.8); backdrop-filter:blur(5px); padding:6px 12px; border-radius:20px; color:#fff; font-size:0.75rem; font-weight:700;">
            Demo en vivo: 2 IAs
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- OFFER 3: 5 AIs (Video Left, Text Right) -->
<section style="background:#ffffff; padding:100px 0;">
  <div class="inner" style="max-width:1200px; margin:0 auto; padding:0 20px;">
    <div style="display:flex; flex-direction:row; align-items:center; gap:60px; flex-wrap:wrap;">
      <div style="flex:1; min-width:300px; max-width:400px; margin:0 auto; border-radius:24px; overflow:hidden; box-shadow:0 20px 40px rgba(0,0,0,0.1); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:100%; aspect-ratio:9/16; background:#000; position:relative;">
          <video src="media/demo_llamadas_3.mp4" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; opacity:0.9;"></video>
          <div style="position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.6); backdrop-filter:blur(5px); padding:6px 12px; border-radius:20px; color:#fff; font-size:0.75rem; font-weight:700; border:1px solid rgba(255,255,255,0.2);">
            Demo en vivo: 5 IAs
          </div>
        </div>
      </div>
      <div style="flex:1.5; min-width:300px;">
        <div style="display:inline-block; padding:6px 12px; background:rgba(14,165,233,0.1); color:#0284c7; font-size:0.8rem; font-weight:700; border-radius:20px; margin-bottom:15px;">NIVEL CALL CENTER</div>
        <h3 style="font-size:2.5rem; font-weight:800; color:#0f172a; margin-bottom:10px; line-height:1.1;">Premium 5 Asesores</h3>
        <p style="font-size:1.1rem; color:#64748b; margin-bottom:30px; line-height:1.6;">Dominaci&oacute;n total. Llama a decenas de miles de prospectos por mes y barre con tu competencia. Un call center completo por una fracci&oacute;n del costo.</p>
        <div style="font-size:3rem; font-weight:900; color:#0ea5e9; margin-bottom:30px; line-height:1;"><span style="font-size:1.5rem; vertical-align:super;">$</span>1000<span style="font-size:1rem; font-weight:500; color:#64748b;"> /mes</span></div>
        <ul style="list-style:none; padding:0; margin:0 0 40px; font-size:1.05rem; color:#334155; display:flex; flex-direction:column; gap:16px;">
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> <strong>5 IAs Simult&aacute;neas</strong> (Llamando sin parar)</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> <strong>Llamadas Ilimitadas</strong> (Sujeto a pol&iacute;ticas de uso)</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> Prioridad Servidor VIP (Latencia m&iacute;nima)</li>
          <li style="display:flex; align-items:center; gap:12px;"><span style="color:#0ea5e9; font-size:1.2rem;">&check;</span> Integraci&oacute;n API Total con Sistemas Propios</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display:inline-block; background:#0f172a; color:#fff; padding:16px 32px; border-radius:12px; font-weight:700; text-decoration:none; font-size:1.1rem; transition:transform 0.2s;">Contratar Plan Premium &rarr;</a>
      </div>
    </div>
  </div>
</section>
`;

const finalContent = header + newHero + footerScripts;

fs.writeFileSync(file, finalContent, 'utf8');
console.log("ia-llamadas.html layout horizontal successfully created and popup updated!");
