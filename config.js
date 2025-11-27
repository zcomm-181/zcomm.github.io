// ================= DEFAULT CONFIG =================
const defaultConfig = {
  background_color: '#000000',
  surface_color: '#0a0a0a',
  text_color: '#ffffff',
  primary_action_color: '#b8860b',   // dark gold (dark mode)
  secondary_action_color: '#1a1a1a',
  font_family: 'Inter',
  font_size: 16,

  company_name: 'PT. ZERYN KOMUNIKA',
  tagline: 'Event Organizer (EO) by PT. ZERYN KOMUNIKA',
  hero_title: 'We Go All-Out So You Don’t Have To',
  hero_subtitle: 'Where Creativity Sparks Connection and Communication Flows',
  cta_button: 'Start Your Journey',

  about_title: 'About Us',
  about_text:
    'We are a premier event organization company specializing in creating extraordinary experiences that leave lasting impressions. With years of expertise in managing large-scale events, we bring innovation, precision, and creativity to every project. Our team of dedicated professionals works tirelessly to transform your vision into reality, ensuring every detail is executed flawlessly.',

  services_title: 'Our Services',
  service_1_title: 'Corporate Events',
  service_2_title: 'Luxury Celebrations',
  service_3_title: 'Large-Scale Productions',

  contact_title: "Let's Create Magic Together",
  contact_subtitle:
    'Ready to bring your event vision to life? Get in touch with our team today.',
  contact_button: 'Get In Touch',
};

// ================= CONFIG CHANGE HANDLER =================
async function onConfigChange(config) {
  const baseSize = config.font_size || defaultConfig.font_size;
  const customFont = config.font_family || defaultConfig.font_family;
  const baseFontStack = '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif';
  const fontFamily = `${customFont}, ${baseFontStack}`;

  // Global text / bg
  document.body.style.fontFamily = fontFamily;
  document.body.style.fontSize = `${baseSize}px`;
  document.body.style.backgroundColor =
    config.background_color || defaultConfig.background_color;
  document.body.style.color = config.text_color || defaultConfig.text_color;

  // Sections bg gradients
  const aboutSection = document.querySelector('.about');
  if (aboutSection) {
    aboutSection.style.background = `linear-gradient(180deg, ${
      config.background_color || defaultConfig.background_color
    } 0%, ${config.surface_color || defaultConfig.surface_color} 100%)`;
  }

  const contactSection = document.querySelector('.contact');
  if (contactSection) {
    contactSection.style.background = `linear-gradient(180deg, ${
      config.background_color || defaultConfig.background_color
    } 0%, ${config.surface_color || defaultConfig.surface_color} 100%)`;
  }

  // Logo text (jika ada)
  const logoText = document.querySelector('.logo-text');
  if (logoText) {
    // Warna tetap dikontrol CSS theme; ukuran ikut base font
    logoText.style.fontSize = `clamp(14px, 1.6vw, ${Math.round(baseSize * 1.125)}px)`;
  }

  // Nav links (warna saja, ukuran biar dari CSS)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((link) => {
    link.style.color = config.text_color || defaultConfig.text_color;
    link.style.removeProperty('font-size'); // jangan paksa ukuran
  });

  // Hero
  const heroTagline = document.querySelector('.hero-tagline');
  if (heroTagline) {
    heroTagline.style.color =
      config.primary_action_color || defaultConfig.primary_action_color;
    heroTagline.style.fontSize = `${baseSize}px`;
  }

  const heroTitle = document.querySelector('.hero-title');
  if (heroTitle) {
    heroTitle.style.background = `linear-gradient(135deg, ${
      config.text_color || defaultConfig.text_color
    } 0%, ${config.primary_action_color || defaultConfig.primary_action_color} 50%, ${
      config.secondary_action_color || defaultConfig.secondary_action_color
    } 100%)`;
    heroTitle.style.webkitBackgroundClip = 'text';
    heroTitle.style.webkitTextFillColor = 'transparent';
    heroTitle.style.backgroundClip = 'text';
    heroTitle.style.fontSize = `${baseSize * 3.125}px`;
  }

  const heroSubtitle = document.querySelector('.hero-subtitle');
  if (heroSubtitle) {
    heroSubtitle.style.color =
      config.secondary_action_color || defaultConfig.secondary_action_color;
    heroSubtitle.style.fontSize = `${baseSize * 0.9375}px`;
  }

  // Buttons
  const ctaButtons = document.querySelectorAll('.cta-button');
  ctaButtons.forEach((btn) => {
    btn.style.background = `linear-gradient(135deg, ${
      config.primary_action_color || defaultConfig.primary_action_color
    } 0%, ${config.primary_action_color || defaultConfig.primary_action_color} 100%)`;
    btn.style.color = config.background_color || defaultConfig.background_color;
    btn.style.fontSize = `${baseSize}px`;
  });

  const contactButtons = document.querySelectorAll('.contact-button');
  contactButtons.forEach((btn) => {
    btn.style.background = `linear-gradient(135deg, ${
      config.primary_action_color || defaultConfig.primary_action_color
    } 0%, ${config.primary_action_color || defaultConfig.primary_action_color} 100%)`;
    btn.style.color = config.background_color || defaultConfig.background_color;
    btn.style.fontSize = `${baseSize}px`;
  });

  // Section titles/subtitles
  const sectionTitles = document.querySelectorAll('.section-title');
  sectionTitles.forEach((title) => {
    title.style.background = `linear-gradient(135deg, ${
      config.text_color || defaultConfig.text_color
    } 0%, ${config.primary_action_color || defaultConfig.primary_action_color} 100%)`;
    title.style.webkitBackgroundClip = 'text';
    title.style.webkitTextFillColor = 'transparent';
    title.style.backgroundClip = 'text';
    title.style.fontSize = `${baseSize * 2.1875}px`;
  });

  const sectionSubtitles = document.querySelectorAll('.section-subtitle');
  sectionSubtitles.forEach((subtitle) => {
    subtitle.style.color =
      config.secondary_action_color || defaultConfig.secondary_action_color;
    subtitle.style.fontSize = `${baseSize * 0.75}px`;
  });

  // About text & services
  const aboutText = document.querySelector('.about-text');
  if (aboutText) {
    aboutText.style.color =
      config.secondary_action_color || defaultConfig.secondary_action_color;
    aboutText.style.fontSize = `${baseSize * 0.6875}px`;
  }

  const serviceTitles = document.querySelectorAll('.service-title');
  serviceTitles.forEach((title) => {
    title.style.color =
      config.primary_action_color || defaultConfig.primary_action_color;
    title.style.fontSize = `${baseSize * 0.9375}px`;
  });

  const serviceDescriptions = document.querySelectorAll('.service-description');
  serviceDescriptions.forEach((desc) => {
    desc.style.color =
      config.secondary_action_color || defaultConfig.secondary_action_color;
    desc.style.fontSize = `${baseSize}px`;
  });

  // Footer
  const footerText = document.querySelector('footer p');
  if (footerText) {
    footerText.style.color =
      config.secondary_action_color || defaultConfig.secondary_action_color;
    footerText.style.fontSize = `${baseSize * 0.5625}px`;
  }

  // Update text content (cek null agar aman)
  const setText = (sel, text) => {
    const el = document.querySelector(sel);
    if (el && typeof text === 'string') el.textContent = text;
  };
  setText('.logo-text', config.company_name || defaultConfig.company_name);
  setText('#tagline', config.tagline || defaultConfig.tagline);
  setText('#hero-title', config.hero_title || defaultConfig.hero_title);
  setText('#hero-subtitle', config.hero_subtitle || defaultConfig.hero_subtitle);
  setText('#cta-button', config.cta_button || defaultConfig.cta_button);
  setText('#about-title', config.about_title || defaultConfig.about_title);
  setText('#about-text', config.about_text || defaultConfig.about_text);
  setText('#services-title', config.services_title || defaultConfig.services_title);
  setText('#service-1-title', config.service_1_title || defaultConfig.service_1_title);
  setText('#service-2-title', config.service_2_title || defaultConfig.service_2_title);
  setText('#service-3-title', config.service_3_title || defaultConfig.service_3_title);
  setText('#contact-title', config.contact_title || defaultConfig.contact_title);
  setText('#contact-subtitle', config.contact_subtitle || defaultConfig.contact_subtitle);
  setText('#contact-button', config.contact_button || defaultConfig.contact_button);
}

// ================= ELEMENT SDK INIT (opsional, jika tersedia) =================
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
  });
}

// ================= SMOOTH SCROLL =================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// ================= LIQUID INDICATOR (NO-GLITCH VERSION) =================
const pill = document.querySelector('.nav-pill');
const indicator = document.querySelector('.nav-indicator');
const links = Array.from(document.querySelectorAll('.nav-link'));

const EDGE_GAP = 8;
const INDENT = 6;

function moveIndicatorTo(link) {
  if (!pill || !indicator || !link) return;
  const pillRect = pill.getBoundingClientRect();
  const linkRect = link.getBoundingClientRect();

  let left = linkRect.left - pillRect.left - INDENT;
  let width = linkRect.width + INDENT * 2;

  left = Math.max(EDGE_GAP, left);
  const maxWidth = pillRect.width - left - EDGE_GAP;
  width = Math.min(width, maxWidth);

  indicator.style.setProperty('--x', `${left}px`);
  indicator.style.setProperty('--w', `${width}px`);
}

function setActive(link) {
  if (!link) return;
  links.forEach((a) => a.classList.toggle('active', a === link));
  moveIndicatorTo(link);
}

function updateNavIndicatorFromActive() {
  setActive(document.querySelector('.nav-link.active') || links[0]);
}

// Pause scroll-spy sejenak saat klik
let pauseSpyUntil = 0;
links.forEach((a) => {
  a.addEventListener('click', () => {
    pauseSpyUntil = performance.now() + 650;
    setActive(a);
  });
});

// Scroll Spy berbasis center viewport
const sections = links
  .map((a) => document.querySelector(a.getAttribute('href')))
  .filter(Boolean);

let ticking = false;
function onScrollRaf() {
  ticking = false;
  if (performance.now() < pauseSpyUntil) return;

  const refY = window.scrollY + window.innerHeight * 0.5;
  let best = sections[0];
  let bestDist = Infinity;

  for (const sec of sections) {
    const top = sec.offsetTop;
    const h = sec.offsetHeight || 1;
    const center = top + h / 2;
    const d = Math.abs(center - refY);
    if (d < bestDist) {
      bestDist = d;
      best = sec;
    }
  }

  if (best) {
    const id = '#' + best.id;
    const link = links.find((l) => l.getAttribute('href') === id);
    if (link) setActive(link);
  }
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(onScrollRaf);
    ticking = true;
  }
}

window.addEventListener('scroll', onScroll, { passive: true });
window.addEventListener('resize', () => {
  updateNavIndicatorFromActive();
  onScroll();
});
window.addEventListener('load', () => {
  updateNavIndicatorFromActive();
  onScroll();
});

// ========== THEME TOGGLER (switch) ==========
(function () {
  const THEME_KEY = 'leo_theme';
  const root = document.documentElement;
  const checkbox = document.getElementById('theme-toggle');

  const darkPalette = {
    background_color: '#000000',
    surface_color: '#0a0a0a',
    text_color: '#ffffff',
    primary_action_color: '#b8860b', // gold
    secondary_action_color: '#c0c0c0',
  };

  const lightPalette = {
    background_color: '#f6f8fb',
    surface_color: '#ffffff',
    text_color: '#0a1a2b',
    primary_action_color: '#0b6ea9', // blue (logo)
    secondary_action_color: '#1a1a1a', // silver
  };

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    // Set var --accent sesuai tema (dipakai di beberapa elemen)
    root.style.setProperty('--accent', theme === 'light' ? '#0b6ea9' : '#b8860b');

    const palette = theme === 'light' ? lightPalette : darkPalette;
    try {
      onConfigChange({ ...defaultConfig, ...palette });
    } catch (e) {
      // noop
    }
    localStorage.setItem(THEME_KEY, theme);
    if (checkbox) checkbox.checked = theme === 'light';
  }

  // Init
  const saved = localStorage.getItem(THEME_KEY);
  applyTheme(saved === 'light' ? 'light' : 'dark');

  // Listen switch
  if (checkbox) {
    checkbox.addEventListener('change', () => {
      applyTheme(checkbox.checked ? 'light' : 'dark');
    });
  }
})();
