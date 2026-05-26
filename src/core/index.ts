import { Navbar } from '../shared/components/Navbar';
import { Footer } from '../shared/components/Footer';
import { Hero } from '../domains/profile/components/Hero';
import { About } from '../domains/profile/components/About';
import { Skills } from '../domains/profile/components/Skills';
import { Timeline } from '../domains/experience/components/Timeline';
import { ProjectGrid } from '../domains/projects/components/ProjectGrid';
import { Lang } from './i18n';

let currentLang: Lang = 'en';

function renderApp(): void {
  const appContainer = document.getElementById('app');

  if (!appContainer) {
    console.error('No se encontró el contenedor #app');
    return;
  }

  appContainer.innerHTML = `
    ${Navbar(currentLang)}
    <main>
      ${Hero(currentLang)}
      ${About(currentLang)}
      ${Timeline(currentLang)}
      ${ProjectGrid(currentLang)}
      ${Skills(currentLang)}
    </main>
    ${Footer(currentLang)}
  `;

  initNavbar();
  initBackToTop();
  initLangToggle();
}

function initNavbar(): void {
  const toggle = document.getElementById('navToggle');
  const navbar = document.getElementById('navbar');

  if (toggle && navbar) {
    toggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }
}

function initBackToTop(): void {
  const backToTopBtn = document.getElementById('backToTop');

  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

function initLangToggle(): void {
  const langBtn = document.getElementById('langToggle');

  if (langBtn) {
    langBtn.addEventListener('click', () => {
      currentLang = currentLang === 'en' ? 'es' : 'en';
      renderApp();
    });
  }
}

document.addEventListener('DOMContentLoaded', renderApp);