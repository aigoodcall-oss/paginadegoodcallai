const fs = require('fs');
const file = 'c:/Users/User/Desktop/Nueva carpeta (4)/paginadegoodcallai_staging/index.html';
let content = fs.readFileSync(file, 'utf8');

const voiceDescEnd = content.indexOf('</p>\n      </div>');
const voiceSectionEnd = content.indexOf('</section>', voiceDescEnd);

const oldVoiceContent = content.slice(voiceDescEnd + 15, voiceSectionEnd);

const newVoiceContent = `
      <!-- Layout Principal: Video Izquierda, Ofertas Derecha -->
      <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 40px; align-items: stretch; max-width: 1200px; margin: 0 auto;">
        
        <!-- Video Vertical Izquierda -->
        <!-- Usamos un scale(1.4) o 1.5 para recortar a lo bestia la marca de agua -->
        <div style="flex: 0 0 280px; height: 500px; border-radius: 24px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.15); position: relative; background: #000;">
          <video src="media/demo_llamadas.mp4" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; transform: scale(1.4); transform-origin: center center;"></video>
        </div>

        <!-- 3 Ofertas Derecha (Grid) -->
        <div style="flex: 1; display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; align-items: stretch;">
          
          <!-- Plan 1 (Blue) -->
          <div style="text-align: center; background: #ffffff; border: 1px solid rgba(14,165,233,0.3); border-bottom: 4px solid #0ea5e9; border-radius: 24px; padding: 30px 20px; backdrop-filter: blur(12px); box-shadow: 0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(14,165,233,0.3), inset 0 2px 2px rgba(255,255,255,1); transform: perspective(1000px) translateZ(0) translateY(-5px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.transform='perspective(1000px) translateZ(30px) translateY(-20px)'; this.style.boxShadow='0 30px 60px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.06), 0 20px 40px rgba(14,165,233,0.3), inset 0 2px 2px rgba(255,255,255,1)';" onmouseout="this.style.transform='perspective(1000px) translateZ(0) translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(14,165,233,0.3), inset 0 2px 2px rgba(255,255,255,1)';">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Plan 1</h3>
            <p style="color: var(--ink-3); margin-bottom: 20px; min-height:45px; font-size:0.9rem;">Ideal para automatizaci&oacute;n b&aacute;sica.</p>
            <div style="font-size: 2.8rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>350</div>
            <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
            <div style="background: rgba(14,165,233,0.1); color: #0ea5e9; padding: 12px; border-radius: 10px; font-weight: 800; font-size: 1rem; margin-bottom: 30px;">1 IA Exclusiva</div>
            <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #0ea5e9; color: #0ea5e9; padding: 12px; border-radius: 10px; font-weight: 800; text-decoration: none; font-size: 0.95rem; transition: all 0.3s;" onmouseover="this.style.background='#0ea5e9'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#0ea5e9';">ELEGIR PLAN 1</a>
          </div>
    
          <!-- Plan 2 (Purple) -->
          <div style="text-align: center; position: relative; background: #ffffff; border: 1px solid rgba(168,85,247,0.3); border-bottom: 4px solid #a855f7; border-radius: 24px; padding: 30px 20px; backdrop-filter: blur(12px); box-shadow: 0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(168,85,247,0.3), inset 0 2px 2px rgba(255,255,255,1); transform: perspective(1000px) translateZ(0) translateY(-5px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.transform='perspective(1000px) translateZ(30px) translateY(-20px)'; this.style.boxShadow='0 30px 60px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.06), 0 20px 40px rgba(168,85,247,0.3), inset 0 2px 2px rgba(255,255,255,1)';" onmouseout="this.style.transform='perspective(1000px) translateZ(0) translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(168,85,247,0.3), inset 0 2px 2px rgba(255,255,255,1)';">
            <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%); background: #a855f7; color: #fff; padding: 4px 12px; border-radius: 20px; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.1em; width: max-content;">M&Aacute;S POPULAR</div>
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Pack 2 Voces</h3>
            <p style="color: var(--ink-3); margin-bottom: 20px; min-height:45px; font-size:0.9rem;">Duplica la fuerza de llamadas con atenci&oacute;n simult&aacute;nea.</p>
            <div style="font-size: 2.8rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>600</div>
            <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
            <div style="background: rgba(168,85,247,0.15); color: #a855f7; padding: 12px; border-radius: 10px; font-weight: 800; font-size: 1rem; margin-bottom: 30px;">2 IAs Simult&aacute;neas</div>
            <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; background: #a855f7; color: #fff; padding: 12px; border-radius: 10px; font-weight: 800; text-decoration: none; font-size: 0.95rem; transition: all 0.3s; box-shadow: 0 10px 20px rgba(168,85,247,0.3);" onmouseover="this.style.background='#8b3dce'" onmouseout="this.style.background='#a855f7'">ELEGIR PACK 2</a>
          </div>
    
          <!-- Plan 3 (Gold) -->
          <div style="text-align: center; background: #ffffff; border: 1px solid rgba(245,158,11,0.3); border-bottom: 4px solid #f59e0b; border-radius: 24px; padding: 30px 20px; backdrop-filter: blur(12px); box-shadow: 0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(245,158,11,0.3), inset 0 2px 2px rgba(255,255,255,1); transform: perspective(1000px) translateZ(0) translateY(-5px); transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);" onmouseover="this.style.transform='perspective(1000px) translateZ(30px) translateY(-20px)'; this.style.boxShadow='0 30px 60px rgba(0,0,0,0.1), 0 10px 25px rgba(0,0,0,0.06), 0 20px 40px rgba(245,158,11,0.3), inset 0 2px 2px rgba(255,255,255,1)';" onmouseout="this.style.transform='perspective(1000px) translateZ(0) translateY(-5px)'; this.style.boxShadow='0 15px 35px rgba(0,0,0,0.06), 0 5px 15px rgba(0,0,0,0.03), 0 10px 20px rgba(245,158,11,0.3), inset 0 2px 2px rgba(255,255,255,1)';">
            <h3 style="font-size: 1.3rem; font-weight: 800; color: var(--ink-1); margin-bottom: 10px;">Call Premium</h3>
            <p style="color: var(--ink-3); margin-bottom: 20px; min-height:45px; font-size:0.9rem;">El Call Center definitivo para grandes vol&uacute;menes.</p>
            <div style="font-size: 2.8rem; font-weight: 900; color: var(--ink-1); margin-bottom: 10px; line-height: 1;"><span style="font-size: 1.5rem; color: var(--ink-3); vertical-align: super;">$</span>1000</div>
            <p style="color: var(--ink-3); margin-bottom: 30px;">Mensual</p>
            <div style="background: rgba(245,158,11,0.1); color: #f59e0b; padding: 12px; border-radius: 10px; font-weight: 800; font-size: 1rem; margin-bottom: 30px;">5 IAs Simult&aacute;neas</div>
            <a href="https://wa.me/51912440960" target="_blank" style="display: block; width: 100%; border: 2px solid #f59e0b; color: #f59e0b; padding: 12px; border-radius: 10px; font-weight: 800; text-decoration: none; font-size: 0.95rem; transition: all 0.3s;" onmouseover="this.style.background='#f59e0b'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#f59e0b';">ELEGIR PREMIUM</a>
          </div>
        </div>
      </div>
    </div>
  `;

content = content.slice(0, voiceDescEnd + 15) + newVoiceContent + content.slice(voiceSectionEnd);

fs.writeFileSync(file, content, 'utf8');
console.log("Voice layout updated successfully!");
