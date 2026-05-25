export function Hero(): string {
  return `
    <section class="hero" id="home">
      <div class="hero-bg">
        <img src="images/header.jpg" alt="" aria-hidden="true" />
        <div class="hero-overlay"></div>
      </div>
      <div class="hero-content">
        <span class="badge available">
          <span class="badge-dot"></span>
          Available for work · Disponible para trabajar
        </span>
        <h1>Hi, I'm <em>Imerly</em></h1>
        <p class="hero-subtitle">Junior Frontend Developer</p>
        <p class="hero-desc">Specialized in React, Next.js & Vue.js — with a passion for clean architecture and AI-powered experiences.</p>
        <div class="hero-ctas">
          <a href="#contact" class="btn btn-primary">Contact me</a>
          <a href="Imerly_C__Resume.pdf" download class="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Download CV
          </a>
        </div>
      </div>
      <div class="scroll-hint">
        <span>scroll</span>
        <div class="scroll-line"></div>
      </div>
    </section>
  `;
}