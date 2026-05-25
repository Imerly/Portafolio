export function About(): string {
  return `
    <section class="about section" id="about">
      <div class="container">
        <div class="about-grid">

          <div class="about-photo">
            <div class="photo-frame">
              <img src="images/profile.jpg" alt="Imerly Mora" />
            </div>
            <div class="about-links">
              <a href="https://www.linkedin.com/in/imerly-mora-bba7842a9" target="_blank" rel="noopener" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/Imerly" target="_blank" rel="noopener" class="social-link">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
                GitHub
              </a>
            </div>
          </div>

          <div class="about-text">
            <span class="section-label">About me</span>
            <h2>Código limpio,<br /><em>mente segura</em></h2>
            <p>
              Desarrollador frontend con experiencia intermedia en resolución de errores, 
              desarrollo de funcionalidades y soporte técnico en diversos proyectos y frameworks.
            </p>
            <p>
              Principiante apasionado en <strong>ciberseguridad</strong>, explorando activamente 
              la seguridad de redes, la criptografía y el análisis de vulnerabilidades — con un 
              gran interés en aplicar esos conocimientos para crear aplicaciones más seguras.
            </p>
            <p>
              Mi objetivo es combinar un <strong>desarrollo frontend limpio</strong> con una 
              mentalidad centrada en la seguridad.
            </p>
          </div>

        </div>
      </div>
    </section>
  `;
}