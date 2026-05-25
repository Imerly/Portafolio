export function Timeline(): string {
  return `
    <section class="experience section" id="experience">
      <div class="container">
        <span class="section-label">Experience</span>
        <h2>Mi <em>trayectoria</em></h2>
        <div class="timeline">

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div>
                  <h3>Web Developer</h3>
                  <span class="company">Hackmetrix · Internship</span>
                </div>
                <span class="timeline-date">Feb 2025 – Ago 2025</span>
              </div>
              <ul class="timeline-list">
                <li>Resolución de bugs frontend y backend, manteniendo la estabilidad y experiencia de usuario.</li>
                <li>Gestión de incidentes técnicos via sistema de tickets, dando soporte a equipos internos y usuarios externos.</li>
                <li>Desarrollo de nuevas features de UI con Next.js y Vue.js, desde diseño hasta deploy en producción.</li>
                <li>Integración backend/frontend mediante queries SQL y conexiones API.</li>
                <li>Implementación de tests unitarios y E2E con Cypress previo a cada deploy.</li>
              </ul>
              <div class="tag-row">
                <span class="tag">Next.js</span>
                <span class="tag">Vue.js</span>
                <span class="tag">Cypress</span>
                <span class="tag">SQL</span>
                <span class="tag">REST APIs</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}