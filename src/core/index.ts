// 1. IMPORTACIONES DE COMPONENTES
// (Nota: Estos imports darán error temporalmente hasta que crees los archivos)
import { Navbar } from '../shared/components/Navbar';
import { Footer } from '../shared/components/Footer';
import { Hero } from '../domains/profile/components/Hero';
import { About } from '../domains/profile/components/About';
import { Skills } from '../domains/profile/components/Skills';
import { Timeline } from '../domains/experience/components/Timeline';
import { ProjectGrid } from '../domains/projects/components/ProjectGrid';

// 2. FUNCIÓN PRINCIPAL DE RENDERIZADO
function renderApp(): void {
  const appContainer = document.getElementById('app');
  
  if (!appContainer) {
    console.error('No se encontró el contenedor #app');
    return;
  }

  // Inyectamos todo tu HTML modularizado respetando el orden original
  appContainer.innerHTML = `
    ${Navbar()}
    <main>
      ${Hero()}
      ${About()}
      ${Timeline()}
      ${ProjectGrid()}
      ${Skills()}
    </main>
    ${Footer()}
  `;

  // 3. INICIALIZAR EVENTOS (Interactividad)
  // Una vez que el HTML existe en el DOM, activamos los botones y funciones
  initNavbar();
  initBackToTop();
}

// 4. LÓGICA DE INTERACTIVIDAD (Antes estaba en script.js)
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
    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    // Evento para volver arriba al hacer click
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// 5. ESCUCHAR EL CARGADO DEL DOM
// Nos aseguramos de que el navegador lea el HTML base antes de ejecutar TypeScript
document.addEventListener('DOMContentLoaded', renderApp);