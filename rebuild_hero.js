const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

const heroStart = content.indexOf('<!-- HERO -->');
const preciosStart = content.indexOf('<!-- PRECIOS -->');

if (heroStart === -1 || preciosStart === -1) {
    console.error("Could not find the markers!");
    process.exit(1);
}

const headerPart = content.slice(0, heroStart);
const bottomPart = content.slice(preciosStart);

const newHeroContent = `
<!-- HERO SERVICIOS -->
<section id="hero" style="padding-top:140px; padding-bottom:60px; position:relative; overflow:hidden; background:var(--bg);">
  <div class="hero-bg"></div>
  <div class="hero-logo-bg" style="background-image:url('logos/logo-new.png'); opacity:0.04; transform:scale(1.2);"></div>
  
  <div class="inner" style="max-width:1200px; margin:0 auto; position:relative; z-index:10; text-align:center;">
    
    <div style="margin-bottom:60px;">
      <h1 class="hero-h1" style="font-size:2.8rem; margin-bottom:15px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;">Elige cómo quieres escalar hoy</h1>
      <p style="font-size:1.1rem; color:var(--ink-2); max-width:600px; margin:0 auto; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;">Soluciones completas de Inteligencia Artificial y Desarrollo Web para llevar tu negocio al siguiente nivel.</p>
    </div>

    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:30px; text-align:left;">
      
      <!-- WSP Bot -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:30px; border-radius:24px; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.3); animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='#25D366'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:100%; height:200px; border-radius:18px; margin-bottom:24px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
          <img src="logos/wsp_autoreply.png" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="WhatsApp IA Bot" class="card-img-hover">
        </div>
        <h3 style="font-size:1.5rem; font-weight:800; color:#fff; margin-bottom:10px;">Agentes de WhatsApp</h3>
        <p style="color:var(--ink-2); font-size:0.95rem; line-height:1.5; margin-bottom:20px; min-height:70px;">Respuestas automáticas inteligentes 24/7. El bot entiende el contexto, vende y cierra tratos como tu mejor empleado.</p>
        <ul style="list-style:none; padding:0; margin:0 0 24px; display:flex; flex-direction:column; gap:10px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> Mensajes Ilimitados</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> Catálogo y Cotizaciones</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> CRM Integrado</li>
        </ul>
        <a href="ia-whatsapp.html" style="color:#25D366; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

      <!-- Voice Bot -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:30px; border-radius:24px; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.3); animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='#a855f7'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:100%; height:200px; border-radius:18px; margin-bottom:24px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
          <img src="logos/asesor_llamando.png" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="Tu propio call center" class="card-img-hover">
        </div>
        <h3 style="font-size:1.5rem; font-weight:800; color:#fff; margin-bottom:10px;">Llamadas Inteligentes</h3>
        <p style="color:#a855f7; font-weight:700; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:10px;">Tu propio call center</p>
        <p style="color:var(--ink-2); font-size:0.95rem; line-height:1.5; margin-bottom:20px; min-height:50px;">Asesores IA que hacen y reciben llamadas de forma natural y fluida para agendar citas y calificar leads.</p>
        <ul style="list-style:none; padding:0; margin:0 0 24px; display:flex; flex-direction:column; gap:10px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Recepción y Emisión</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Voces Ultra-Reales</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Agendamiento Automático</li>
        </ul>
        <a href="pages/servicios.html" style="color:#a855f7; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

      <!-- Web Design -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:30px; border-radius:24px; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.3); animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='#0ea5e9'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:100%; height:200px; border-radius:18px; margin-bottom:24px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.5);">
          <img src="logos/web_dev_corporate.png" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="Diseño Espectacular Web" class="card-img-hover">
        </div>
        <h3 style="font-size:1.5rem; font-weight:800; color:#fff; margin-bottom:10px;">Desarrollo Web</h3>
        <p style="color:#0ea5e9; font-weight:700; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:10px;">Diseño espectacular</p>
        <p style="color:var(--ink-2); font-size:0.95rem; line-height:1.5; margin-bottom:20px; min-height:50px;">Creamos sitios web de altísimo impacto visual. Interfaces rápidas y optimizadas para máxima conversión.</p>
        <ul style="list-style:none; padding:0; margin:0 0 24px; display:flex; flex-direction:column; gap:10px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Diseño Premium Exclusivo</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Micro-Animaciones</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Optimización SEO</li>
        </ul>
        <a href="pages/servicios.html" style="color:#0ea5e9; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

    </div>
  </div>
</section>

`;

const finalContent = headerPart + newHeroContent + '\n\n' + bottomPart;
fs.writeFileSync(file, finalContent, 'utf8');

console.log("Hero rebuilt with cards directly at the top!");
