const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// The points to cut are <!-- HERO --> and <!-- TESTIMONIALS -->
const heroStart = content.indexOf('<!-- HERO -->');
const testimonialsStart = content.indexOf('<!-- TESTIMONIALS -->');

if (heroStart === -1 || testimonialsStart === -1) {
    console.error("Could not find the split markers!");
    process.exit(1);
}

const headerPart = content.slice(0, heroStart);
const footerPart = content.slice(testimonialsStart);

const newMainContent = `
<!-- HERO -->
<section id="hero" style="padding-top:160px; padding-bottom:100px; position:relative; overflow:hidden;">
  <div class="hero-bg"></div>
  <div class="hero-logo-bg" style="background-image:url('logos/logo-new.png'); opacity:0.04; transform:scale(1.2);"></div>
  <div class="hero-glow-ring"></div>
  
  <div class="hero-content" style="max-width:860px; margin:0 auto; text-align:center; position:relative; z-index:10;">
    <div class="hero-badge" style="margin-bottom:24px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) both;"><span class="dot"></span> Agencia de IA y Desarrollo Web</div>
    <h1 class="hero-h1" style="animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s both;">El ecosistema digital <br><em style="color:var(--accent);">definitivo para tu negocio</em></h1>
    <p class="hero-sub" style="font-size:1.15rem; max-width:640px; margin:0 auto 40px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s both;">Automatización de WhatsApp, Agentes de Llamadas IA y Desarrollo Web de ultra conversión para empresas que buscan escalar sin límites.</p>
    <div class="hero-ctas" style="justify-content:center; gap:20px; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.3s both;">
      <a class="btn-accent" href="#servicios" style="padding:16px 36px; font-size:1rem;">Explorar Soluciones</a>
      <a class="btn-outline" href="https://wa.me/51987312687" target="_blank" style="padding:16px 36px; font-size:1rem;">Asesoría Gratuita</a>
    </div>
  </div>

  <div style="display:flex; justify-content:center; gap:40px; margin-top:80px; opacity:0.7; animation: fadeUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s both; flex-wrap:wrap;">
    <div style="font-size:0.8rem; font-weight:700; color:var(--ink-3); text-transform:uppercase; letter-spacing:0.1em; display:flex; align-items:center; gap:8px;"><span style="color:var(--accent);">✓</span> IA Generativa</div>
    <div style="font-size:0.8rem; font-weight:700; color:var(--ink-3); text-transform:uppercase; letter-spacing:0.1em; display:flex; align-items:center; gap:8px;"><span style="color:var(--accent);">✓</span> Modelos Propios</div>
    <div style="font-size:0.8rem; font-weight:700; color:var(--ink-3); text-transform:uppercase; letter-spacing:0.1em; display:flex; align-items:center; gap:8px;"><span style="color:var(--accent);">✓</span> Código a Medida</div>
  </div>
</section>

<!-- SERVICIOS -->
<section id="servicios" style="padding:100px 20px; background:var(--bg-alt); position:relative; overflow:hidden;">
  <div style="position:absolute; top:-200px; left:-200px; width:600px; height:600px; background:var(--accent); filter:blur(250px); opacity:0.05; border-radius:50%;"></div>
  <div class="inner" style="max-width:1200px; margin:0 auto; position:relative; z-index:2;">
    <div style="text-align:center; margin-bottom:70px;">
      <div class="eyebrow" style="color:#ffffff; font-size:1.1rem; letter-spacing:0.2em; font-weight:900;"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/></svg> Nuestros Servicios</div>
      <h2 class="sec-h2">Tres soluciones, <em>un solo objetivo: Crecer</em></h2>
    </div>
    
    <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px, 1fr)); gap:30px;">
      
      <!-- WSP Bot -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:40px; border-radius:24px; text-align:left; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.2);" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:64px; height:64px; border-radius:18px; background:rgba(37,211,102,0.1); color:#25D366; display:flex; align-items:center; justify-content:center; margin-bottom:30px;">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
        </div>
        <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:18px;">Agentes de WhatsApp</h3>
        <p style="color:var(--ink-2); font-size:1rem; line-height:1.6; margin-bottom:28px; min-height:80px;">Ventas y atención al cliente 24/7 de forma automática. El bot entiende el contexto, vende y cierra tratos como tu mejor empleado.</p>
        <ul style="list-style:none; padding:0; margin:0 0 32px; display:flex; flex-direction:column; gap:12px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> Mensajes Ilimitados</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> Catálogo y Cotizaciones</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#25D366; font-weight:bold;">✓</span> CRM Integrado</li>
        </ul>
        <a href="ia-whatsapp.html" style="color:#25D366; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

      <!-- Voice Bot -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:40px; border-radius:24px; text-align:left; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.2);" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:64px; height:64px; border-radius:18px; background:rgba(168,85,247,0.1); color:#a855f7; display:flex; align-items:center; justify-content:center; margin-bottom:30px;">
          <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line></svg>
        </div>
        <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:18px;">Llamadas Inteligentes</h3>
        <p style="color:var(--ink-2); font-size:1rem; line-height:1.6; margin-bottom:28px; min-height:80px;">Voces IA que hacen y reciben llamadas. Agenda citas, califica leads y da soporte técnico hablando de forma natural y fluida.</p>
        <ul style="list-style:none; padding:0; margin:0 0 32px; display:flex; flex-direction:column; gap:12px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Recepción y Emisión</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Voces Ultra-Reales</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#a855f7; font-weight:bold;">✓</span> Agendamiento Automático</li>
        </ul>
        <a href="pages/servicios.html" style="color:#a855f7; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

      <!-- Web Design -->
      <div style="background:var(--bg-card); border:1px solid var(--border); padding:40px; border-radius:24px; text-align:left; transition:all 0.4s cubic-bezier(0.22, 1, 0.36, 1); box-shadow:0 10px 40px rgba(0,0,0,0.2);" onmouseover="this.style.transform='translateY(-10px)';this.style.borderColor='var(--accent)'" onmouseout="this.style.transform='translateY(0)';this.style.borderColor='var(--border)'">
        <div style="width:64px; height:64px; border-radius:18px; background:rgba(14,165,233,0.1); color:#0ea5e9; display:flex; align-items:center; justify-content:center; margin-bottom:30px;">
          <svg width="32" height="32" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        </div>
        <h3 style="font-size:1.6rem; font-weight:800; color:#fff; margin-bottom:18px;">Desarrollo Web</h3>
        <p style="color:var(--ink-2); font-size:1rem; line-height:1.6; margin-bottom:28px; min-height:80px;">Creamos sitios web de altísimo impacto visual. Interfaces futuristas, ultra rápidas y optimizadas para máxima conversión.</p>
        <ul style="list-style:none; padding:0; margin:0 0 32px; display:flex; flex-direction:column; gap:12px; color:var(--ink-3); font-size:0.9rem;">
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Diseño Premium Exclusivo</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Micro-Animaciones</li>
          <li style="display:flex; align-items:center; gap:8px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Optimización SEO</li>
        </ul>
        <a href="pages/servicios.html" style="color:#0ea5e9; font-weight:800; font-size:0.95rem; text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:6px;">Ver detalles <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>
      </div>

    </div>
  </div>
</section>

<!-- PRECIOS -->
<section id="precios" style="padding:120px 20px; background:var(--bg);">
  <div class="inner" style="max-width:1100px; margin:0 auto;">
    <div style="text-align:center; margin-bottom:60px;">
      <div class="eyebrow" style="color:var(--accent);"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> Inversión Transparente</div>
      <h2 class="sec-h2">Planes diseñados <em>para escalar</em></h2>
      <p class="sec-p">Sin costos ocultos. Todo claro desde el primer minuto.</p>
    </div>

    <!-- TABS MENU -->
    <div style="display:flex; justify-content:center; gap:12px; margin-bottom:50px; flex-wrap:wrap;">
      <button class="pricing-tab active" onclick="switchPricing('wsp')" style="background:var(--accent); color:#fff; border:none; padding:12px 28px; border-radius:100px; font-weight:800; font-size:0.95rem; cursor:pointer; transition:all 0.3s;">IA de WhatsApp</button>
      <button class="pricing-tab" onclick="switchPricing('voz')" style="background:var(--bg-card); color:var(--ink-2); border:1px solid var(--border); padding:12px 28px; border-radius:100px; font-weight:800; font-size:0.95rem; cursor:pointer; transition:all 0.3s;">Agentes de Llamadas</button>
      <button class="pricing-tab" onclick="switchPricing('web')" style="background:var(--bg-card); color:var(--ink-2); border:1px solid var(--border); padding:12px 28px; border-radius:100px; font-weight:800; font-size:0.95rem; cursor:pointer; transition:all 0.3s;">Desarrollo Web</button>
    </div>

    <!-- PRICING GRIDS -->
    
    <!-- WhatsApp -->
    <div id="pricing-wsp" class="pricing-content active" style="max-width:440px; margin:0 auto; animation:fadeIn 0.5s;">
      <div class="price-card popular" style="background:linear-gradient(to bottom, rgba(14,165,233,0.1), rgba(0,0,0,0.5)); border:1px solid rgba(14,165,233,0.3); padding:50px 40px; border-radius:28px; position:relative; overflow:hidden;">
        <div style="position:absolute; top:0; left:0; right:0; text-align:center; background:#0ea5e9; color:#fff; font-size:0.75rem; font-weight:800; padding:8px; letter-spacing:0.15em; text-transform:uppercase;">El más pedido</div>
        <h3 style="font-size:1.6rem; color:#fff; margin-top:10px; font-weight:800;">WhatsApp Bot</h3>
        <div style="font-size:3.5rem; font-weight:900; color:#fff; margin:20px 0; font-family:var(--font-display);">$99<span style="font-size:1rem; color:var(--ink-3); font-weight:600; font-family:var(--font-body);">/mes</span></div>
        <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:16px; margin-bottom:40px; font-size:0.95rem; color:var(--ink-2);">
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Mensajes Ilimitados</li>
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Atención 24/7</li>
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Manejo de Multimedia</li>
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> CRM Integrado</li>
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Instalación en 2 días (Gratis)</li>
        </ul>
        <a href="https://wa.me/51987312687" target="_blank" class="btn-submit" style="display:block; text-align:center; padding:18px; background:#fff; color:#000; border-radius:14px; font-weight:800; font-size:1rem;">Contratar Ahora</a>
      </div>
    </div>

    <!-- Voz -->
    <div id="pricing-voz" class="pricing-content" style="max-width:440px; margin:0 auto; display:none; animation:fadeIn 0.5s;">
      <div class="price-card" style="background:var(--bg-card); border:1px solid var(--border); padding:50px 40px; border-radius:28px;">
        <h3 style="font-size:1.6rem; color:#fff; font-weight:800;">Llamadas IA</h3>
        <div style="font-size:3.5rem; font-weight:900; color:#fff; margin:20px 0; font-family:var(--font-display);">$350<span style="font-size:1rem; color:var(--ink-3); font-weight:600; font-family:var(--font-body);">/mes base</span></div>
        <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:16px; margin-bottom:40px; font-size:0.95rem; color:var(--ink-2);">
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Agentes Inbound y Outbound</li>
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Voz humana Ultra Real</li>
          <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Integración con Calendarios</li>
          <li style="color:var(--ink-3); font-size:0.8rem; margin-top:10px; line-height:1.5;">* No incluye saldo ni numeraciones SIP. Costos varían según volumen y configuración.</li>
        </ul>
        <a href="https://wa.me/51987312687" target="_blank" class="btn-submit" style="display:block; text-align:center; padding:18px; background:var(--accent); color:#fff; border-radius:14px; font-weight:800; font-size:1rem;">Consultar Detalles</a>
      </div>
    </div>

    <!-- Web -->
    <div id="pricing-web" class="pricing-content" style="display:none; animation:fadeIn 0.5s;">
      <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(300px, 1fr)); gap:24px;">
        
        <!-- Basico -->
        <div class="price-card" style="background:var(--bg-card); border:1px solid var(--border); padding:40px; border-radius:24px;">
          <h3 style="font-size:1.3rem; color:#fff; font-weight:800;">Pack Básico</h3>
          <div style="font-size:3rem; font-weight:900; color:#fff; margin:20px 0; font-family:var(--font-display);">$200</div>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:14px; margin-bottom:40px; font-size:0.9rem; color:var(--ink-2);">
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Hasta 5 Páginas</li>
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Diseño con Animaciones</li>
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Entrega en aprox. 2 semanas</li>
          </ul>
          <a href="https://wa.me/51987312687" target="_blank" class="btn-submit" style="display:block; text-align:center; padding:16px; background:rgba(255,255,255,0.05); color:#fff; border-radius:12px; font-weight:800;">Empezar</a>
        </div>
        
        <!-- Medio -->
        <div class="price-card popular" style="background:linear-gradient(to bottom, rgba(14,165,233,0.1), rgba(0,0,0,0.5)); border:1px solid rgba(14,165,233,0.3); padding:40px; border-radius:24px; position:relative; overflow:hidden;">
          <div style="position:absolute; top:0; left:0; right:0; text-align:center; background:#0ea5e9; color:#fff; font-size:0.7rem; font-weight:800; padding:6px; letter-spacing:0.1em; text-transform:uppercase;">Recomendado</div>
          <h3 style="font-size:1.3rem; color:#fff; font-weight:800; margin-top:10px;">Pack Medio</h3>
          <div style="font-size:3rem; font-weight:900; color:#fff; margin:20px 0; font-family:var(--font-display);">$400</div>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:14px; margin-bottom:40px; font-size:0.9rem; color:var(--ink-2);">
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Hasta 12 Páginas</li>
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Diseño con Animaciones</li>
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Optimización SEO Inicial</li>
          </ul>
          <a href="https://wa.me/51987312687" target="_blank" class="btn-submit" style="display:block; text-align:center; padding:16px; background:#fff; color:#000; border-radius:12px; font-weight:800;">Empezar</a>
        </div>
        
        <!-- Premium -->
        <div class="price-card" style="background:var(--bg-card); border:1px solid var(--border); padding:40px; border-radius:24px;">
          <h3 style="font-size:1.3rem; color:#fff; font-weight:800;">Pack Premium</h3>
          <div style="font-size:3rem; font-weight:900; color:#fff; margin:20px 0; font-family:var(--font-display);">$700</div>
          <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:14px; margin-bottom:40px; font-size:0.9rem; color:var(--ink-2);">
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Hasta 20 Páginas</li>
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Animaciones Premium</li>
            <li style="display:flex; align-items:center; gap:10px;"><span style="color:var(--accent);">✓</span> Integraciones Complejas</li>
          </ul>
          <a href="https://wa.me/51987312687" target="_blank" class="btn-submit" style="display:block; text-align:center; padding:16px; background:rgba(255,255,255,0.05); color:#fff; border-radius:12px; font-weight:800;">Empezar</a>
        </div>

      </div>
    </div>
  </div>

  <script>
    function switchPricing(tab) {
      document.querySelectorAll('.pricing-tab').forEach(el => {
        el.style.background = 'var(--bg-card)';
        el.style.color = 'var(--ink-2)';
        el.style.border = '1px solid var(--border)';
      });
      document.querySelectorAll('.pricing-content').forEach(el => el.style.display = 'none');
      
      const activeBtn = event.currentTarget;
      activeBtn.style.background = 'var(--accent)';
      activeBtn.style.color = '#fff';
      activeBtn.style.border = 'none';
      
      document.getElementById('pricing-' + tab).style.display = 'block';
    }
  </script>
</section>

`;

const finalContent = headerPart + newMainContent + '\n\n' + footerPart;
fs.writeFileSync(file, finalContent, 'utf8');

console.log("Agency Hub index.html redesign completed successfully!");
