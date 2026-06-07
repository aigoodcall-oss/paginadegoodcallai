const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/ia-llamadas.html';
let content = fs.readFileSync(file, 'utf8');

// We want to keep the `<head>` up to `<!-- HERO -->`
const heroStart = content.indexOf('<!-- HERO -->');
let header = content.substring(0, heroStart);

// We want to keep from `<div id="gcOfferOverlay"` to the end
const overlayStart = content.indexOf('<div id="gcOfferOverlay"');
let footer = content.substring(overlayStart);

// Let's add some specific CSS for the voice features into the header if possible, or just inline it in the new content
const newHero = `
<!-- HERO VOICE AI -->
<section id="hero" style="background:#020617; padding-top:140px; padding-bottom:100px; position:relative; overflow:hidden;">
  <div style="position:absolute; top:50%; left:50%; transform:translate(-50%,-50%); width:800px; height:800px; border-radius:50%; background:radial-gradient(circle, rgba(168,85,247,0.15) 0%, transparent 70%); pointer-events:none;"></div>
  
  <div class="inner" style="position:relative; z-index:2; max-width:1200px; margin:0 auto; text-align:center;">
    <div style="display:inline-flex; align-items:center; gap:8px; padding:6px 14px; background:rgba(168,85,247,0.15); border:1px solid rgba(168,85,247,0.3); border-radius:20px; font-size:0.85rem; font-weight:700; color:#c084fc; margin-bottom:24px;">
      <span style="width:8px; height:8px; background:#a855f7; border-radius:50%; box-shadow:0 0 10px #a855f7;"></span> Call Center IA 24/7
    </div>
    <h1 style="font-size: clamp(2.5rem, 6vw, 4.5rem); font-weight:900; color:#fff; line-height:1.1; margin-bottom:24px;">
      La voz que cierra ventas<br>
      <em style="color:#c084fc; font-style:normal;">mientras t&uacute; duermes.</em>
    </h1>
    <p style="font-size:1.1rem; color:rgba(255,255,255,0.7); max-width:700px; margin:0 auto 40px; line-height:1.6;">
      Atenci&oacute;n al cliente, recordatorios de citas y llamadas en fr&iacute;o masivas. Reducimos tus costos operativos y escalamos tus ventas sin contratar más personal.
    </p>
    
    <!-- Audio Wave Animation Simulation -->
    <div style="display:flex; justify-content:center; align-items:center; gap:6px; height:60px; margin-bottom:40px;">
      <div style="width:6px; height:20px; background:#c084fc; border-radius:3px; animation:wave 1s ease-in-out infinite;"></div>
      <div style="width:6px; height:40px; background:#c084fc; border-radius:3px; animation:wave 1s ease-in-out infinite 0.2s;"></div>
      <div style="width:6px; height:60px; background:#a855f7; border-radius:3px; animation:wave 1s ease-in-out infinite 0.4s;"></div>
      <div style="width:6px; height:30px; background:#c084fc; border-radius:3px; animation:wave 1s ease-in-out infinite 0.6s;"></div>
      <div style="width:6px; height:50px; background:#c084fc; border-radius:3px; animation:wave 1s ease-in-out infinite 0.8s;"></div>
    </div>
    <style>@keyframes wave { 0%, 100% {transform: scaleY(0.5); opacity:0.5;} 50% {transform: scaleY(1); opacity:1;} }</style>
  </div>
</section>

<!-- FLORO: USE CASES -->
<section style="background:#f1f5f9; padding:100px 0;">
  <div class="inner" style="max-width:1200px; margin:0 auto; padding:0 20px;">
    <div style="text-align:center; margin-bottom:60px;">
      <h2 style="font-size:2.5rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Dise&ntilde;ado para la <em style="color:#a855f7; font-style:normal;">Eficiencia Absoluta</em></h2>
      <p style="font-size:1.1rem; color:#475569; max-width:600px; margin:0 auto;">Tres frentes de batalla donde nuestra IA de Llamadas domina y supera a cualquier operador humano tradicional.</p>
    </div>
    
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:30px;">
      <!-- ATC -->
      <div style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:50px; height:50px; background:rgba(56,189,248,0.1); border-radius:14px; display:flex; justify-content:center; align-items:center; margin-bottom:20px; color:#0284c7;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
        </div>
        <h3 style="font-size:1.3rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Atenci&oacute;n al Cliente (Inbound)</h3>
        <p style="font-size:0.95rem; color:#64748b; line-height:1.6;">
          Se acabaron las colas de espera. Tu bot contesta inmediatamente cientos de llamadas al mismo tiempo. Resuelve dudas, da precios y brinda soporte con paciencia infinita las 24 horas del d&iacute;a.
        </p>
      </div>
      
      <!-- GESTION -->
      <div style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:50px; height:50px; background:rgba(168,85,247,0.1); border-radius:14px; display:flex; justify-content:center; align-items:center; margin-bottom:20px; color:#9333ea;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        </div>
        <h3 style="font-size:1.3rem; font-weight:800; color:#0f172a; margin-bottom:12px;">Gestión Operativa</h3>
        <p style="font-size:0.95rem; color:#64748b; line-height:1.6;">
          Automatiza el trabajo pesado. La IA realiza llamadas proactivas para confirmar citas, recordar pagos pendientes y coordinar log&iacute;stica de entregas, registrando todo directamente en tu sistema.
        </p>
      </div>
      
      <!-- COLD CALLING -->
      <div style="background:#fff; padding:40px; border-radius:24px; box-shadow:0 10px 30px rgba(0,0,0,0.05); border:1px solid rgba(0,0,0,0.05);">
        <div style="width:50px; height:50px; background:rgba(245,158,11,0.1); border-radius:14px; display:flex; justify-content:center; align-items:center; margin-bottom:20px; color:#d97706;">
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

<!-- OFFERS & VIDEOS SECTION -->
<section style="background:#ffffff; padding:100px 0;">
  <div class="inner" style="max-width:1200px; margin:0 auto; padding:0 20px;">
    <div style="text-align:center; margin-bottom:40px;">
      <h2 style="font-size:2.5rem; font-weight:800; color:#0f172a; margin-bottom:16px;">Planes de Call Center IA</h2>
      <p style="font-size:1.1rem; color:#475569; max-width:600px; margin:0 auto;">Escucha a nuestra IA en acci&oacute;n y elige la potencia de fuego que tu negocio necesita.</p>
    </div>
    
    <!-- CLONED VOICE WARNING -->
    <div style="background:rgba(168,85,247,0.05); border:1px solid rgba(168,85,247,0.3); border-radius:12px; padding:20px; text-align:center; max-width:800px; margin:0 auto 60px;">
      <h4 style="color:#9333ea; font-size:1rem; font-weight:800; margin-bottom:5px;">&iquest;Buscas el m&aacute;ximo realismo?</h4>
      <p style="font-size:0.9rem; color:#475569; margin:0;">
        Todos nuestros planes te permiten acceder a la <strong>Voz Clonada Premium</strong>. Haz que la IA suene exactamente como t&uacute; o como tu mejor vendedor. <em>(Aplica costo adicional por clonaci&oacute;n y uso premium).</em>
      </p>
    </div>
    
    <!-- 3 COLUMNS -->
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:30px; align-items:start;">
      
      <!-- PLAN 1 -->
      <div style="background:#f8fafc; border-radius:24px; overflow:hidden; border:1px solid rgba(0,0,0,0.05);">
        <div style="width:100%; aspect-ratio:9/16; background:#000; position:relative;">
          <video src="media/demo_llamadas.mp4" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; opacity:0.9;"></video>
          <div style="position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.6); backdrop-filter:blur(5px); padding:6px 12px; border-radius:20px; color:#fff; font-size:0.75rem; font-weight:700; border:1px solid rgba(255,255,255,0.2);">
            Demo: 1 IA Exclusiva
          </div>
        </div>
        <div style="padding:30px 20px;">
          <h3 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:5px;">Plan 1 Asesor</h3>
          <p style="font-size:0.9rem; color:#64748b; margin-bottom:20px;">Ideal para PYMES y autonomos.</p>
          <div style="font-size:2.5rem; font-weight:900; color:#0f172a; margin-bottom:20px; line-height:1;"><span style="font-size:1.2rem; color:#64748b; vertical-align:super;">$</span>350<span style="font-size:0.9rem; font-weight:500; color:#64748b;"> /mes</span></div>
          <ul style="list-style:none; padding:0; margin:0 0 30px; font-size:0.9rem; color:#334155; display:flex; flex-direction:column; gap:10px;">
            <li style="display:flex; gap:8px;"><span style="color:#0ea5e9;">&check;</span> 1 IA Simult&aacute;nea</li>
            <li style="display:flex; gap:8px;"><span style="color:#0ea5e9;">&check;</span> 1000 Llamadas / D&iacute;a</li>
            <li style="display:flex; gap:8px;"><span style="color:#0ea5e9;">&check;</span> Voz Humana Est&aacute;ndar</li>
            <li style="display:flex; gap:8px;"><span style="color:#0ea5e9;">&check;</span> Agendamiento B&aacute;sico</li>
          </ul>
          <a href="https://wa.me/51912440960" target="_blank" style="display:block; width:100%; background:#0f172a; color:#fff; text-align:center; padding:12px; border-radius:10px; font-weight:700; text-decoration:none;">Elegir Plan</a>
        </div>
      </div>
      
      <!-- PLAN 2 -->
      <div style="background:#fff; border-radius:24px; overflow:hidden; border:2px solid #a855f7; box-shadow:0 20px 40px rgba(168,85,247,0.15); transform:translateY(-10px);">
        <div style="width:100%; aspect-ratio:9/16; background:#000; position:relative;">
          <video src="media/demo_llamadas_2.mp4" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; opacity:0.95;"></video>
          <div style="position:absolute; top:15px; right:15px; background:#a855f7; padding:4px 10px; border-radius:15px; color:#fff; font-size:0.7rem; font-weight:800; letter-spacing:1px;">RECOMENDADO</div>
          <div style="position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.6); backdrop-filter:blur(5px); padding:6px 12px; border-radius:20px; color:#fff; font-size:0.75rem; font-weight:700; border:1px solid rgba(255,255,255,0.2);">
            Demo: 2 IAs
          </div>
        </div>
        <div style="padding:30px 20px;">
          <h3 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:5px;">Pack 2 Asesores</h3>
          <p style="font-size:0.9rem; color:#64748b; margin-bottom:20px;">Equipo digital de alto rendimiento.</p>
          <div style="font-size:2.5rem; font-weight:900; color:#0f172a; margin-bottom:20px; line-height:1;"><span style="font-size:1.2rem; color:#64748b; vertical-align:super;">$</span>600<span style="font-size:0.9rem; font-weight:500; color:#64748b;"> /mes</span></div>
          <ul style="list-style:none; padding:0; margin:0 0 30px; font-size:0.9rem; color:#334155; display:flex; flex-direction:column; gap:10px;">
            <li style="display:flex; gap:8px; font-weight:700;"><span style="color:#a855f7;">&check;</span> 2 IAs Simult&aacute;neas</li>
            <li style="display:flex; gap:8px;"><span style="color:#a855f7;">&check;</span> 3000 Llamadas / D&iacute;a</li>
            <li style="display:flex; gap:8px;"><span style="color:#a855f7;">&check;</span> CRM Avanzado</li>
            <li style="display:flex; gap:8px;"><span style="color:#a855f7;">&check;</span> Compatible con Voz Clonada</li>
          </ul>
          <a href="https://wa.me/51912440960" target="_blank" style="display:block; width:100%; background:#a855f7; color:#fff; text-align:center; padding:12px; border-radius:10px; font-weight:700; text-decoration:none;">Elegir Pack 2</a>
        </div>
      </div>
      
      <!-- PLAN 3 -->
      <div style="background:#f8fafc; border-radius:24px; overflow:hidden; border:1px solid rgba(0,0,0,0.05);">
        <div style="width:100%; aspect-ratio:9/16; background:#000; position:relative;">
          <video src="media/demo_llamadas_3.mp4" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover; opacity:0.9;"></video>
          <div style="position:absolute; bottom:15px; left:15px; background:rgba(0,0,0,0.6); backdrop-filter:blur(5px); padding:6px 12px; border-radius:20px; color:#fff; font-size:0.75rem; font-weight:700; border:1px solid rgba(255,255,255,0.2);">
            Demo: Call Center Total
          </div>
        </div>
        <div style="padding:30px 20px;">
          <h3 style="font-size:1.4rem; font-weight:800; color:#0f172a; margin-bottom:5px;">Premium (5 IAs)</h3>
          <p style="font-size:0.9rem; color:#64748b; margin-bottom:20px;">Operaci&oacute;n masiva sin l&iacute;mites.</p>
          <div style="font-size:2.5rem; font-weight:900; color:#0f172a; margin-bottom:20px; line-height:1;"><span style="font-size:1.2rem; color:#64748b; vertical-align:super;">$</span>1000<span style="font-size:0.9rem; font-weight:500; color:#64748b;"> /mes</span></div>
          <ul style="list-style:none; padding:0; margin:0 0 30px; font-size:0.9rem; color:#334155; display:flex; flex-direction:column; gap:10px;">
            <li style="display:flex; gap:8px;"><span style="color:#f59e0b;">&check;</span> 5 IAs Simult&aacute;neas</li>
            <li style="display:flex; gap:8px;"><span style="color:#f59e0b;">&check;</span> Llamadas Ilimitadas</li>
            <li style="display:flex; gap:8px;"><span style="color:#f59e0b;">&check;</span> Prioridad Servidor VIP</li>
            <li style="display:flex; gap:8px;"><span style="color:#f59e0b;">&check;</span> Integraci&oacute;n API Total</li>
          </ul>
          <a href="https://wa.me/51912440960" target="_blank" style="display:block; width:100%; border:2px solid #f59e0b; color:#f59e0b; text-align:center; padding:10px; border-radius:10px; font-weight:700; text-decoration:none;">Elegir Premium</a>
        </div>
      </div>
      
    </div>
  </div>
</section>
`;

const finalContent = header + newHero + footer;

fs.writeFileSync(file, finalContent, 'utf8');
console.log("ia-llamadas.html rebuilt entirely!");
