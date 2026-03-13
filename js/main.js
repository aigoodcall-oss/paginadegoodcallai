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

const statsSection = document.querySelector('.stats-bar');
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


// ══ HERO SIGNAL + OFFER POPUP ══
(function(){
  const viewerEl = document.getElementById('heroViewerCount');
  const slotEl = document.getElementById('heroSlotCount');
  const recentEl = document.getElementById('heroRecentActivity');

  if (viewerEl || slotEl || recentEl) {
    const recentItems = [
      'Una clínica en Lima pidió una demo hace 2 min',
      'Un negocio de servicios consultó por leads hace 4 min',
      'Una tienda online preguntó por seguimiento hace 6 min',
      'Una empresa local pidió agenda por WhatsApp hace 9 min'
    ];

    let viewers = parseInt(viewerEl?.textContent || '14', 10) || 14;
    let slots = parseInt(slotEl?.textContent || '4', 10) || 4;
    let recentIndex = 0;

    setInterval(() => {
      if (viewerEl) {
        viewers += Math.random() > 0.5 ? 1 : -1;
        viewers = Math.max(11, Math.min(19, viewers));
        viewerEl.textContent = viewers;
      }

      if (slotEl && Math.random() > 0.76 && slots > 3) {
        slots -= 1;
        slotEl.textContent = slots;
      }

      if (recentEl) {
        recentIndex = (recentIndex + 1) % recentItems.length;
        recentEl.textContent = recentItems[recentIndex];
      }
    }, 5200);
  }

  const overlay = document.getElementById('gcOfferOverlay');
  const countdownEl = document.getElementById('gcOfferCountdown');
  const slotsEl = document.getElementById('gcOfferSlots');
  const feedItems = Array.from(document.querySelectorAll('#gcOfferFeed .gc-offer-feed-item'));

  if (!overlay || !countdownEl || !slotsEl) return;

  let secondsLeft = 10 * 60;
  let countdownTimer = null;
  let feedIndex = 0;
  let popupOpened = false;
  let popupSlots = parseInt(slotsEl.textContent || '4', 10) || 4;

  function renderCountdown() {
    const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const secs = String(secondsLeft % 60).padStart(2, '0');
    countdownEl.textContent = `${mins}:${secs}`;
  }

  function startCountdown() {
    if (countdownTimer) return;
    renderCountdown();

    countdownTimer = setInterval(() => {
      if (secondsLeft <= 0) {
        closeOffer();
        return;
      }

      secondsLeft -= 1;

      if (secondsLeft % 90 === 0 && popupSlots > 2) {
        popupSlots -= 1;
        slotsEl.textContent = popupSlots;
      }

      renderCountdown();
    }, 1000);
  }

  function startFeedRotation() {
    if (feedItems.length < 2) return;
    setInterval(() => {
      feedItems[feedIndex].classList.remove('is-active');
      feedIndex = (feedIndex + 1) % feedItems.length;
      feedItems[feedIndex].classList.add('is-active');
    }, 2400);
  }

  function openOffer() {
    if (popupOpened) return;
    popupOpened = true;
    overlay.classList.add('is-visible');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    startCountdown();
  }

  function closeOffer() {
    overlay.classList.remove('is-visible');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (countdownTimer) {
      clearInterval(countdownTimer);
      countdownTimer = null;
    }
  }

  document.querySelectorAll('[data-offer-close]').forEach((el) => {
    el.addEventListener('click', closeOffer);
  });

  document.querySelectorAll('.gc-offer-primary, .gc-offer-secondary').forEach((el) => {
    el.addEventListener('click', closeOffer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('is-visible')) {
      closeOffer();
    }
  });

  startFeedRotation();
  setTimeout(openOffer, 10000);
})();
