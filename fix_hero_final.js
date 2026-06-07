const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. We need to extract the part between <!-- HERO SERVICIOS --> and </section>
const heroStart = content.indexOf('<!-- HERO SERVICIOS -->');
const heroEnd = content.indexOf('</section>', heroStart);

if (heroStart === -1 || heroEnd === -1) {
    console.error("Could not find hero section!");
    process.exit(1);
}

const beforeHero = content.slice(0, heroStart);
const afterHero = content.slice(heroEnd + '</section>'.length);

const newHero = `
<!-- HERO SERVICIOS -->
<section id="hero" style="padding-top:120px; padding-bottom:80px; position:relative; overflow:hidden; background:var(--bg);">
  <div class="hero-bg"></div>
  <div class="hero-logo-bg" style="background-image:url('logos/logo-new.png'); opacity:0.04; transform:scale(1.2);"></div>
  
  <div class="inner" style="max-width:1200px; margin:0 auto; position:relative; z-index:10; text-align:center;">
    
    <!-- GIGANTIC HOOK PHRASE -->
    <div style="text-align: center; margin-bottom: 60px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both; width:100%; display:flex; flex-direction:column; align-items:center;">
      <h1 style="font-size: 3.5rem; font-weight: 900; line-height:1.2; margin-bottom: 15px; color: var(--ink-1); max-width:800px;">
        Escala tu empresa con <span style="color: transparent; background: linear-gradient(90deg, #25D366, #0ea5e9); -webkit-background-clip: text;">Good Call AI</span>
      </h1>
      <p style="font-size: 1.25rem; color: var(--ink-2); font-weight:500;">Elige tu próximo motor de crecimiento automático.</p>
    </div>

    <div class="services-grid">
      
      <!-- WSP Bot -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:24px; border-radius:24px; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.1); animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='#25D366'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:100%; height:240px; border-radius:16px; margin-bottom:20px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.15);">
          <img src="logos/wsp_green_chat.png" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="WhatsApp IA Bot" class="card-img-hover">
        </div>
        <h3 style="font-size:1.5rem; font-weight:800; color:var(--ink-1); margin-bottom:10px;">Agentes de WhatsApp</h3>
        <p style="color:var(--ink-2); font-size:0.95rem; line-height:1.5; margin-bottom:20px; min-height:70px;">Respuestas automáticas inteligentes 24/7. El bot entiende el contexto, vende y cierra tratos como tu mejor empleado.</p>
        <ul style="list-style:none; padding:0; margin:0 0 24px; display:flex; flex-direction:column; gap:10px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> Mensajes Ilimitados</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> Catálogo y Cotizaciones</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> CRM Integrado</li>
        </ul>
        <a href="ia-whatsapp.html" style="background:#25D366; color:#fff; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; padding:14px 20px; border-radius:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; width:100%; text-decoration:none; transition:background 0.3s;" onmouseover="this.style.background='#1da851'" onmouseout="this.style.background='#25D366'">IA DE WSP <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

      <!-- Voice Bot -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:24px; border-radius:24px; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.1); animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='#a855f7'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:100%; height:240px; border-radius:16px; margin-bottom:20px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.15);">
          <img src="logos/asesor_llamando.png" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="Tu propio call center" class="card-img-hover">
        </div>
        <h3 style="font-size:1.5rem; font-weight:800; color:var(--ink-1); margin-bottom:10px;">Llamadas Inteligentes</h3>
        <p style="color:#a855f7; font-weight:700; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:10px;">Tu propio call center</p>
        <p style="color:var(--ink-2); font-size:0.95rem; line-height:1.5; margin-bottom:20px; min-height:50px;">Asesores IA que hacen y reciben llamadas de forma natural y fluida para agendar citas y calificar leads.</p>
        <ul style="list-style:none; padding:0; margin:0 0 24px; display:flex; flex-direction:column; gap:10px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Recepción y Emisión</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Voces Ultra-Reales</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Agendamiento Automático</li>
        </ul>
        <a href="ia-llamadas.html" style="background:#a855f7; color:#fff; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; padding:14px 20px; border-radius:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; width:100%; text-decoration:none; transition:background 0.3s;" onmouseover="this.style.background='#8b3dce'" onmouseout="this.style.background='#a855f7'">IA DE LLAMADAS <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

      <!-- Web Design -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:24px; border-radius:24px; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.1); animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both;" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='#0ea5e9'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:100%; height:240px; border-radius:16px; margin-bottom:20px; overflow:hidden; position:relative; box-shadow:0 10px 30px rgba(0,0,0,0.15);">
          <img src="logos/web_screen_top.png" style="width:100%; height:100%; object-fit:cover; transition:transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);" alt="Diseño Espectacular Web" class="card-img-hover">
        </div>
        <h3 style="font-size:1.5rem; font-weight:800; color:var(--ink-1); margin-bottom:10px;">Desarrollo Web</h3>
        <p style="color:#0ea5e9; font-weight:700; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.05em; margin-bottom:10px;">Diseño espectacular</p>
        <p style="color:var(--ink-2); font-size:0.95rem; line-height:1.5; margin-bottom:20px; min-height:50px;">Creamos sitios web de altísimo impacto visual. Interfaces rápidas y optimizadas para máxima conversión.</p>
        <ul style="list-style:none; padding:0; margin:0 0 24px; display:flex; flex-direction:column; gap:10px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Diseño Premium Exclusivo</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Micro-Animaciones</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Optimización SEO</li>
        </ul>
        <a href="diseno-web.html" style="background:#0ea5e9; color:#fff; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; padding:14px 20px; border-radius:12px; display:inline-flex; align-items:center; justify-content:center; gap:8px; width:100%; text-decoration:none; transition:background 0.3s;" onmouseover="this.style.background='#0b85bd'" onmouseout="this.style.background='#0ea5e9'">DISEÑO WEB <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

    </div>
  </div>
</section>
`;

fs.writeFileSync(file, beforeHero + newHero + afterHero, 'utf8');
console.log("Hero section rebuilt perfectly!");
