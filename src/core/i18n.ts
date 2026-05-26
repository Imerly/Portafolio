export type Lang = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available for work',
      title: "Hi, I'm",
      subtitle: 'Junior Frontend Developer',
      desc: 'Specialized in React, Next.js & Vue.js — with a passion for clean architecture and AI-powered experiences.',
      contact: 'Contact me',
      cv: 'Download CV',
    },
    about: {
      label: 'About me',
      title: 'Clean code,',
      titleEm: 'secure mind',
      p1: 'Frontend developer with intermediate experience in bug fixing, feature development and technical support across various projects and frameworks.',
      p2: 'Passionate beginner in cybersecurity, actively exploring network security, cryptography and vulnerability analysis — with a keen interest in building safer applications.',
      p3: 'My goal is to combine clean frontend development with a security-focused mindset.',
    },
    experience: {
      label: 'Experience',
      title: 'My',
      titleEm: 'journey',
      role: 'Web Developer',
      type: 'Hackmetrix · Internship',
      date: 'Feb 2025 – Aug 2025',
      items: [
        'Frontend and backend bug resolution, maintaining application stability and user experience.',
        'Technical incident management via ticketing system, supporting internal teams and external users.',
        'Development of new UI features with Next.js and Vue.js, from design to production deploy.',
        'Backend/frontend integration through SQL queries and API connections.',
        'Unit and E2E tests with Cypress before each deployment.',
      ],
    },
    projects: {
      label: 'Projects',
      title: "What I'm",
      titleEm: 'building',
      taskwise: {
        badge: 'In progress',
        desc: 'SaaS task management app with AI-powered automatic prioritization, integrating Groq + Llama 3.3 for intelligent task analysis and classification.',
        status: 'Active development',
        link: 'View on GitHub',
      },
      cryptodash: {
        badge: 'Live',
        desc: 'Real-time cryptocurrency dashboard with prices, 7-day charts and market statistics. Auto-updates every 30 seconds.',
        demo: 'Live demo',
      },
    },
    skills: {
      label: 'Skills',
      title: 'Technologies I',
      titleEm: 'work with',
    },
    footer: {
      copy: '© 2025 Imerly Mora. Crafted with care.',
      sub: 'Frontend Developer · Buenos Aires, Argentina',
    },
  },
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      skills: 'Habilidades',
      contact: 'Contacto',
    },
    hero: {
      badge: 'Disponible para trabajar',
      title: 'Hola, soy',
      subtitle: 'Desarrolladora Frontend Junior',
      desc: 'Especializada en React, Next.js & Vue.js — con pasión por la arquitectura limpia y experiencias con IA.',
      contact: 'Contáctame',
      cv: 'Descargar CV',
    },
    about: {
      label: 'Sobre mí',
      title: 'Código limpio,',
      titleEm: 'mente segura',
      p1: 'Desarrolladora frontend con experiencia intermedia en resolución de errores, desarrollo de funcionalidades y soporte técnico en diversos proyectos y frameworks.',
      p2: 'Principiante apasionada en ciberseguridad, explorando activamente la seguridad de redes, la criptografía y el análisis de vulnerabilidades — con gran interés en crear aplicaciones más seguras.',
      p3: 'Mi objetivo es combinar un desarrollo frontend limpio con una mentalidad centrada en la seguridad.',
    },
    experience: {
      label: 'Experiencia',
      title: 'Mi',
      titleEm: 'trayectoria',
      role: 'Web Developer',
      type: 'Hackmetrix · Pasantía',
      date: 'Feb 2025 – Ago 2025',
      items: [
        'Resolución de bugs frontend y backend, manteniendo la estabilidad y experiencia de usuario.',
        'Gestión de incidentes técnicos via sistema de tickets, dando soporte a equipos internos y usuarios externos.',
        'Desarrollo de nuevas features de UI con Next.js y Vue.js, desde diseño hasta deploy en producción.',
        'Integración backend/frontend mediante queries SQL y conexiones API.',
        'Tests unitarios y E2E con Cypress previo a cada deploy.',
      ],
    },
    projects: {
      label: 'Proyectos',
      title: 'Lo que estoy',
      titleEm: 'construyendo',
      taskwise: {
        badge: 'En progreso',
        desc: 'Aplicación SaaS de gestión de tareas con priorización automática por IA, integrando Groq + Llama 3.3 para análisis y clasificación inteligente.',
        status: 'En desarrollo activo',
        link: 'Ver en GitHub',
      },
      cryptodash: {
        badge: 'En vivo',
        desc: 'Dashboard de criptomonedas en tiempo real con precios, gráficos de los últimos 7 días y estadísticas de mercado. Actualización automática cada 30 segundos.',
        demo: 'Ver demo',
      },
    },
    skills: {
      label: 'Habilidades',
      title: 'Tecnologías que',
      titleEm: 'manejo',
    },
    footer: {
      copy: '© 2025 Imerly Mora. Hecho con cariño.',
      sub: 'Desarrolladora Frontend · Buenos Aires, Argentina',
    },
  },
};