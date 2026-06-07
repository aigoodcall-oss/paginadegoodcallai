const fs = require('fs');

const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

// 1. Find the end of the HERO SERVICIOS section
const heroEnd = content.indexOf('</section>', content.indexOf('<!-- HERO SERVICIOS -->'));
if (heroEnd === -1) {
    console.error("Could not find end of hero section!");
    process.exit(1);
}

const beforeSections = content.slice(0, heroEnd + '</section>'.length);

// 2. We will discard everything from here down to the footer (<!-- FOOTER -->)
const footerStart = content.indexOf('<!-- FOOTER -->');
let footerStr = "";
if (footerStart !== -1) {
    footerStr = content.slice(footerStart);
} else {
    // Fallback if no specific footer tag
    const scriptStart = content.lastIndexOf('<script');
    footerStr = content.slice(scriptStart);
}

// 3. Build the new sections
const newSections = `

<!-- WSP IA SECTION -->
<section id="wsp-ia" style="padding: 100px 0; background: var(--bg); position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05);">
  <div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <div style="text-align: center; margin-bottom: 60px;">
      <h2 style="font-size: 3rem; font-weight: 900; color: #25D366; margin-bottom: 15px;">IA de WhatsApp</h2>
      <p style="font-size: 1.2rem; color: var(--ink-2); max-width: 700px; margin: 0 auto;">Automatiza tu atención, cierra más ventas y gestiona todas tus conversaciones con un asistente inteligente que trabaja 24/7 sin descanso.</p>
    </div>

    <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; align-items: center;">
      <!-- WSP Info -->
      <div style="flex: 1; min-width: 300px; max-width: 500px;">
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 20px;">
          <li style="display: flex; gap: 15px; align-items: flex-start;">
            <div style="background: rgba(37,211,102,0.1); padding: 10px; border-radius: 12px; color: #25D366;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div>
            <div><h4 style="font-weight: 800; color: var(--ink-1); font-size: 1.2rem;">Formatos Ilimitados</h4><p style="color: var(--ink-3); font-size: 0.95rem;">Envía texto, imágenes, audios y documentos sin restricciones para explicar mejor tu negocio.</p></div>
          </li>
          <li style="display: flex; gap: 15px; align-items: flex-start;">
            <div style="background: rgba(37,211,102,0.1); padding: 10px; border-radius: 12px; color: #25D366;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></div>
            <div><h4 style="font-weight: 800; color: var(--ink-1); font-size: 1.2rem;">Atención Simultánea</h4><p style="color: var(--ink-3); font-size: 0.95rem;">Atiende a 100 o 1000 clientes al mismo tiempo desde uno o varios números sin perder calidad.</p></div>
          </li>
          <li style="display: flex; gap: 15px; align-items: flex-start;">
            <div style="background: rgba(37,211,102,0.1); padding: 10px; border-radius: 12px; color: #25D366;"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg></div>
            <div><h4 style="font-weight: 800; color: var(--ink-1); font-size: 1.2rem;">Pausa y Control Humano</h4><p style="color: var(--ink-3); font-size: 0.95rem;">CRM incluido con control total. Pausa el bot cuando quieras y permite que un asesor humano tome el control de la charla.</p></div>
          </li>
        </ul>
      </div>

      <!-- WSP Pricing Card -->
      <div style="flex: 1; min-width: 300px; max-width: 400px; background: rgba(255,255,255,0.03); border: 2px solid rgba(37,211,102,0.3); border-radius: 24px; padding: 40px; text-align: center; box-shadow: 0 20px 50px rgba(0,0,0,0.1), inset 0 0 20px rgba(37,211,102,0.05); backdrop-filter: blur(10px);">
        <div style="display:inline-block; background:rgba(37,211,102,0.15); color:#25D366; padding:8px 16px; border-radius:20px; font-weight:800; font-size:0.9rem; text-transform:uppercase; letter-spacing:0.1em; margin-bottom:20px;">Suscripción Mensual</div>
        <div style="font-size: 4rem; font-weight: 900; color: var(--ink-1); line-height: 1;"><span style="font-size: 2rem; color: var(--ink-3); vertical-align: super;">$</span>99</div>
        <div style="color: var(--ink-3); margin-bottom: 30px; font-weight:500;">Suscripción todo incluido</div>
        <ul style="list-style: none; padding: 0; text-align: left; margin-bottom: 40px; display:flex; flex-direction:column; gap:12px;">
          <li style="display: flex; gap: 10px;"><span style="color:#25D366; font-weight:bold;">✓</span> Mensajes Ilimitados</li>
          <li style="display: flex; gap: 10px;"><span style="color:#25D366; font-weight:bold;">✓</span> CRM Integrado</li>
          <li style="display: flex; gap: 10px;"><span style="color:#25D366; font-weight:bold;">✓</span> Instalación en solo 2 días</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; background: #25D366; color: #fff; padding: 18px; border-radius: 12px; font-weight: 800; font-size: 1.1rem; text-decoration: none; transition: background 0.3s; box-shadow: 0 10px 20px rgba(37,211,102,0.3);">CONTRATAR AHORA</a>
      </div>
    </div>
  </div>
</section>

<!-- VOICE IA SECTION -->
<section id="voice-ia" style="padding: 100px 0; background: linear-gradient(to bottom, var(--bg) 0%, rgba(168,85,247,0.05) 100%); position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05);">
  <div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <div style="text-align: center; margin-bottom: 60px;">
      <h2 style="font-size: 3rem; font-weight: 900; color: #a855f7; margin-bottom: 15px;">Llamadas Inteligentes</h2>
      <p style="font-size: 1.2rem; color: var(--ink-2); max-width: 700px; margin: 0 auto;">Crea tu propio Call Center con agentes virtuales. Realiza cientos de llamadas diarias para prospectar y agendar reuniones con una voz humana ultra realista.</p>
    </div>

    <!-- Pricing 3 columns -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
      
      <!-- Plan 1 -->
      <div style="background: var(--bg-card); border: 1px solid rgba(168,85,247,0.2); border-radius: 24px; padding: 40px 30px; text-align: center; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Plan 1</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px; min-height:40px;">Ideal para negocios que inician en automatización telefónica.</p>
        <div style="font-size: 3.5rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>350</div>
        <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
        <div style="background: rgba(168,85,247,0.1); color: #a855f7; padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1.2rem; margin-bottom: 30px;">1 IA Exclusiva</div>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #a855f7; color: #a855f7; padding: 15px; border-radius: 12px; font-weight: 800; text-decoration: none; transition: all 0.3s;">ELEGIR PLAN 1</a>
      </div>

      <!-- Plan 2 -->
      <div style="background: var(--bg-card); border: 2px solid #a855f7; border-radius: 24px; padding: 40px 30px; text-align: center; transition: all 0.3s; box-shadow: 0 20px 50px rgba(168,85,247,0.15); transform: scale(1.03); position: relative;">
        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #a855f7; color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em;">MÁS POPULAR</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack 2 Voces</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px; min-height:40px;">Duplica la fuerza de llamadas con atención simultánea.</p>
        <div style="font-size: 3.5rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>600</div>
        <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
        <div style="background: rgba(168,85,247,0.15); color: #a855f7; padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1.2rem; margin-bottom: 30px;">2 IAs Concurrentes</div>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; background: #a855f7; color: #fff; padding: 15px; border-radius: 12px; font-weight: 800; text-decoration: none; transition: all 0.3s; box-shadow: 0 10px 20px rgba(168,85,247,0.3);">ELEGIR PACK 2</a>
      </div>

      <!-- Plan 3 -->
      <div style="background: var(--bg-card); border: 1px solid rgba(168,85,247,0.2); border-radius: 24px; padding: 40px 30px; text-align: center; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Call Premium</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px; min-height:40px;">El Call Center definitivo para grandes volúmenes de ventas.</p>
        <div style="font-size: 3.5rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>1000</div>
        <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
        <div style="background: rgba(168,85,247,0.1); color: #a855f7; padding: 15px; border-radius: 12px; font-weight: 800; font-size: 1.2rem; margin-bottom: 30px;">5 IAs Concurrentes</div>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #a855f7; color: #a855f7; padding: 15px; border-radius: 12px; font-weight: 800; text-decoration: none; transition: all 0.3s;">ELEGIR PREMIUM</a>
      </div>

    </div>
  </div>
</section>

<!-- WEB DESIGN SECTION -->
<section id="diseno-web" style="padding: 100px 0; background: var(--bg); position: relative; overflow: hidden; border-top: 1px solid rgba(255,255,255,0.05);">
  <div class="inner" style="max-width: 1200px; margin: 0 auto; padding: 0 20px;">
    <div style="text-align: center; margin-bottom: 60px;">
      <h2 style="font-size: 3rem; font-weight: 900; color: #0ea5e9; margin-bottom: 15px;">Diseño Web</h2>
      <p style="font-size: 1.2rem; color: var(--ink-2); max-width: 700px; margin: 0 auto;">Creamos plataformas corporativas con impacto visual extraordinario, optimizadas para móviles y enfocadas netamente en la conversión (Ventas).</p>
      <p style="font-size: 0.9rem; color: var(--ink-3); margin-top: 10px; text-transform: uppercase; letter-spacing: 0.05em; font-weight:700;">⏱️ Tiempo de Desarrollo: Aprox. 2 Semanas</p>
    </div>

    <!-- Pricing 3 columns -->
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
      
      <!-- Plan Basico -->
      <div style="background: var(--bg-card); border: 1px solid rgba(14,165,233,0.2); border-radius: 24px; padding: 40px 30px; text-align: left; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Básico</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px;">Ideal para pequeños negocios o emprendimientos.</p>
        <div style="font-size: 3rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>200</div>
        <p style="color: var(--ink-3); margin-bottom: 30px; font-size: 0.85rem; text-transform: uppercase;">Pago Único</p>
        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display:flex; flex-direction:column; gap:12px; font-size:0.95rem;">
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Hasta 5 Páginas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Animaciones Exclusivas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Diseño Responsivo</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #0ea5e9; color: #0ea5e9; padding: 15px; border-radius: 12px; font-weight: 800; text-align:center; text-decoration: none; transition: all 0.3s;">ELEGIR BÁSICO</a>
      </div>

      <!-- Plan Medio -->
      <div style="background: var(--bg-card); border: 2px solid #0ea5e9; border-radius: 24px; padding: 40px 30px; text-align: left; transition: all 0.3s; box-shadow: 0 20px 50px rgba(14,165,233,0.15); transform: scale(1.03); position: relative;">
        <div style="position: absolute; top: -15px; left: 50%; transform: translateX(-50%); background: #0ea5e9; color: #fff; padding: 5px 15px; border-radius: 20px; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em;">RECOMENDADO</div>
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Medio</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px;">Ideal para empresas en crecimiento con más contenido.</p>
        <div style="font-size: 3rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>400</div>
        <p style="color: var(--ink-3); margin-bottom: 30px; font-size: 0.85rem; text-transform: uppercase;">Pago Único</p>
        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display:flex; flex-direction:column; gap:12px; font-size:0.95rem;">
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Hasta 12 Páginas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Animaciones Exclusivas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Integración Avanzada</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; background: #0ea5e9; color: #fff; padding: 15px; border-radius: 12px; font-weight: 800; text-align:center; text-decoration: none; transition: all 0.3s; box-shadow: 0 10px 20px rgba(14,165,233,0.3);">ELEGIR MEDIO</a>
      </div>

      <!-- Plan Premium -->
      <div style="background: var(--bg-card); border: 1px solid rgba(14,165,233,0.2); border-radius: 24px; padding: 40px 30px; text-align: left; transition: all 0.3s; box-shadow: 0 15px 35px rgba(0,0,0,0.1);">
        <h3 style="font-size: 1.5rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack Premium</h3>
        <p style="color: var(--ink-3); margin-bottom: 20px;">Presencia digital corporativa masiva y completa.</p>
        <div style="font-size: 3rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>700</div>
        <p style="color: var(--ink-3); margin-bottom: 30px; font-size: 0.85rem; text-transform: uppercase;">Pago Único</p>
        <ul style="list-style: none; padding: 0; margin-bottom: 40px; display:flex; flex-direction:column; gap:12px; font-size:0.95rem;">
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Hasta 20 Páginas</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Animaciones Top</li>
          <li style="display: flex; gap: 10px;"><span style="color:#0ea5e9; font-weight:bold;">✓</span> Optimización SEO Máxima</li>
        </ul>
        <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #0ea5e9; color: #0ea5e9; padding: 15px; border-radius: 12px; font-weight: 800; text-align:center; text-decoration: none; transition: all 0.3s;">ELEGIR PREMIUM</a>
      </div>

    </div>
  </div>
</section>

`;

const finalContent = beforeSections + newSections + footerStr;
fs.writeFileSync(file, finalContent, 'utf8');
console.log("Restructured sections built successfully!");
