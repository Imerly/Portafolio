export function ProjectGrid(): string {
  return `
    <section class="projects section" id="projects">
      <div class="container">
        <span class="section-label">Projects</span>
        <h2>Lo que estoy <em>construyendo</em></h2>
        <div class="projects-grid">

          <div class="project-card featured">
            <span class="project-badge">En progreso</span>
            <h3>TaskWise</h3>
            <p>SaaS de gestión de tareas con priorización automática por IA. Integra Groq + Llama 3.3 para análisis y clasificación inteligente de tareas.</p>
            <div class="project-status">
              <span class="status-dot"></span>
              En desarrollo activo
            </div>
            <div class="tag-row">
              <span class="tag">Next.js 15</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Supabase</span>
              <span class="tag">Groq + Llama 3.3</span>
              <span class="tag">Tailwind CSS</span>
              <span class="tag">shadcn/ui</span>
            </div>
            <a href="https://github.com/Imerly/taskwise" target="_blank" rel="noopener" class="project-link">
              Ver en GitHub
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </a>
          </div>

          <div class="project-card">
            <span class="project-badge">Live</span>
            <h3>CryptoDash</h3>
            <p>Dashboard de criptomonedas en tiempo real con precios, gráficos de los últimos 7 días y estadísticas de mercado. Actualización automática cada 30 segundos.</p>
            <div class="tag-row">
              <span class="tag">Next.js 15</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Recharts</span>
              <span class="tag">CoinGecko API</span>
              <span class="tag">shadcn/ui</span>
            </div>
            <div style="display:flex; gap: 1rem; margin-top: auto;">
              <a href="https://cryptodash-delta.vercel.app" target="_blank" rel="noopener" class="project-link">
                Ver demo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
              <a href="https://github.com/Imerly/cryptodash" target="_blank" rel="noopener" class="project-link">
                GitHub
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}