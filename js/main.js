/* ═══════════════════════════════════
   GOOD CALL AI — MASTER JS
═══════════════════════════════════ */

// ── Nav scroll effect ──
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Hamburger ──
const ham = document.getElementById('ham');
const drawer = document.getElementById('drawer');
if (ham) {
  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    drawer.classList.toggle('open');
  });
}
function closeDrawer() {
  if (ham) ham.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
}

// ── Smooth scroll ──
function goto(id) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  closeDrawer();
}

// ── Scroll Reveal ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── FAQ Toggle ──
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    // Toggle clicked
    if (!wasOpen) item.classList.add('open');
  });
});

// ── Counter Animation ──
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseInt(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  });
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) counterObserver.observe(statsSection);

// ── WhatsApp Widget ──
const wspWidget = document.getElementById('wspWidget');
const wspBtn = document.getElementById('wspBtn');

function toggleWsp() {
  wspWidget.classList.toggle('open');
  const notif = wspWidget.querySelector('.wsp-notif');
  if (notif) notif.style.display = 'none';
}
function closeWsp() {
  wspWidget.classList.remove('open');
}

if (wspBtn) wspBtn.addEventListener('click', toggleWsp);

// Auto-show bubble after 4 seconds
setTimeout(() => {
  if (wspWidget && !wspWidget.classList.contains('open')) {
    wspWidget.classList.add('open');
  }
}, 4000);

// ── Active nav link ──
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
        link.classList.add('active');
      }
    }
  });
}
window.addEventListener('scroll', updateActiveNav);

// ── 3D Tilt Cards ──
document.querySelectorAll('.price-card, .feat-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    const rx = ((y - r.height / 2) / (r.height / 2)) * -5;
    const ry = ((x - r.width / 2) / (r.width / 2)) * 5;
    const featured = card.classList.contains('featured');
    card.style.transform = `${featured ? 'scale(1.04) ' : ''}perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
  });
  card.addEventListener('mouseleave', () => {
    const featured = card.classList.contains('featured');
    card.style.transition = 'transform 0.5s cubic-bezier(.22,1,.36,1)';
    card.style.transform = featured ? 'scale(1.04)' : '';
    setTimeout(() => card.style.transition = '', 510);
  });
});

// ── Form submission ──
const forms = document.querySelectorAll('form[data-action]');
forms.forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('.btn-submit');
    const origText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    
    setTimeout(() => {
      btn.textContent = '¡Mensaje enviado! ✓';
      btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
      setTimeout(() => {
        btn.textContent = origText;
        btn.style.background = '';
        btn.disabled = false;
        form.reset();
      }, 3000);
    }, 1500);
  });
});

// ── Parallax subtle on hero ──
window.addEventListener('scroll', () => {
  const hero = document.getElementById('hero');
  if (hero) {
    const scroll = window.scrollY;
    const orbs = hero.querySelectorAll('.hero-orb');
    orbs.forEach((orb, i) => {
      orb.style.transform = `translateY(${scroll * (i === 0 ? 0.15 : -0.1)}px)`;
    });
  }
});

// ══ THEME TOGGLE ══
(function(){
  const toggle = document.getElementById('themeToggle');
  if(!toggle) return;
  
  // Check saved preference or system preference
  const saved = localStorage.getItem('gc-theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = saved || (prefersDark ? 'dark' : 'dark'); // default dark
  document.documentElement.setAttribute('data-theme', theme);
  
  toggle.addEventListener('click', ()=>{
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('gc-theme', next);
  });
})();


// ══ HERO URGENCY + OFFER POPUP ══
(function(){
  const liveCount = document.getElementById('liveViewerCount');
  const recentText = document.getElementById('heroRecentText');
  const slotCount = document.getElementById('slotCount');
  const offerOverlay = document.getElementById('gcai-offer-overlay');
  const offerCountdown = document.getElementById('gcaiOfferCountdown');
  const offerSlots = document.getElementById('gcaiOfferSlots');
  const feedItems = Array.from(document.querySelectorAll('.gcai-offer-feed-item'));
  if(!liveCount || !recentText || !slotCount || !offerOverlay || !offerCountdown || !offerSlots) return;

  const recentMessages = [
    'Nueva demo solicitada por una clínica en Lima hace 2 min',
    'Un e-commerce pidió automatización de catálogo hace 4 min',
    'Un negocio de servicios quiere filtrar leads por WhatsApp ahora',
    'Una empresa local revisó planes y pidió implementación rápida',
  ];

  let msgIndex = 0;
  let viewers = parseInt(liveCount.textContent, 10) || 14;
  let slots = parseInt(slotCount.textContent, 10) || 4;

  function rotateHeroProof(){
    viewers += Math.random() > 0.5 ? 1 : -1;
    viewers = Math.max(11, Math.min(19, viewers));
    liveCount.textContent = viewers;
    msgIndex = (msgIndex + 1) % recentMessages.length;
    recentText.textContent = recentMessages[msgIndex];
  }

  setInterval(rotateHeroProof, 4200);

  const FEED_ROTATE_MS = 2400;
  let activeFeed = 0;
  if(feedItems.length){
    setInterval(()=>{
      feedItems[activeFeed].classList.remove('is-active');
      activeFeed = (activeFeed + 1) % feedItems.length;
      feedItems[activeFeed].classList.add('is-active');
    }, FEED_ROTATE_MS);
  }

  const SESSION_KEY = 'gcai-offer-shown';
  let offerSeconds = 9 * 60 + 59;
  let offerTimer = null;

  function renderOfferCountdown(){
    const mins = Math.floor(offerSeconds / 60).toString().padStart(2, '0');
    const secs = (offerSeconds % 60).toString().padStart(2, '0');
    offerCountdown.textContent = `${mins}:${secs}`;
  }

  function startOfferCountdown(){
    if(offerTimer) return;
    renderOfferCountdown();
    offerTimer = setInterval(()=>{
      if(offerSeconds <= 0){
        clearInterval(offerTimer);
        offerTimer = null;
        closeOffer();
        return;
      }
      offerSeconds -= 1;
      if(offerSeconds % 90 === 0 && slots > 2){
        slots -= 1;
        slotCount.textContent = slots;
        offerSlots.textContent = slots;
      }
      renderOfferCountdown();
    }, 1000);
  }

  function openOffer(){
    offerOverlay.classList.add('is-visible');
    offerOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    startOfferCountdown();
  }

  function closeOffer(){
    offerOverlay.classList.remove('is-visible');
    offerOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    sessionStorage.setItem(SESSION_KEY, '1');
  }

  document.querySelectorAll('[data-offer-close]').forEach(el => {
    el.addEventListener('click', closeOffer);
  });

  document.querySelectorAll('.gcai-offer-cta, .gcai-offer-link').forEach(el => {
    el.addEventListener('click', closeOffer);
  });

  document.addEventListener('keydown', e => {
    if(e.key === 'Escape' && offerOverlay.classList.contains('is-visible')) closeOffer();
  });

  if(!sessionStorage.getItem(SESSION_KEY)){
    setTimeout(openOffer, 10000);
  }
})();
