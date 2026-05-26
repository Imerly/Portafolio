import { translations, Lang } from '../../core/i18n';

export function Navbar(lang: Lang): string {
  const t = translations[lang].nav;
  return `
    <nav class="navbar" id="navbar">
      <a href="#home" class="nav-logo">
        <span class="nav-logo-text">Imerly <em>Mora</em></span>
      </a>
      <ul class="nav-links">
        <li><a href="#about">${t.about}</a></li>
        <li><a href="#experience">${t.experience}</a></li>
        <li><a href="#projects">${t.projects}</a></li>
        <li><a href="#skills">${t.skills}</a></li>
        <li><a href="#contact">${t.contact}</a></li>
      </ul>
      <div class="nav-right">
        <button class="lang-toggle" id="langToggle">
          <span class="lang-option ${lang === 'en' ? 'active' : ''}">EN</span>
          <span class="lang-divider">·</span>
          <span class="lang-option ${lang === 'es' ? 'active' : ''}">ES</span>
        </button>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </nav>
  `;
}