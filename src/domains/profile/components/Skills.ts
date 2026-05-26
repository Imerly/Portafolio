import { translations, Lang } from '../../../core/i18n';

export function Skills(lang: Lang): string {
  const t = translations[lang].skills;
  return `
    <section class="skills section" id="skills">
      <div class="container">
        <span class="section-label">${t.label}</span>
        <h2>${t.title} <em>${t.titleEm}</em></h2>
        <div class="skills-grid">

          <div class="skill-group">
            <h4>Frontend</h4>
            <div class="skill-tags">
              <span class="skill-tag">React</span>
              <span class="skill-tag">Next.js</span>
              <span class="skill-tag">Vue.js</span>
              <span class="skill-tag">TypeScript</span>
              <span class="skill-tag">JavaScript</span>
              <span class="skill-tag">HTML</span>
              <span class="skill-tag">CSS</span>
            </div>
          </div>

          <div class="skill-group">
            <h4>Backend & DB</h4>
            <div class="skill-tags">
              <span class="skill-tag">Node.js</span>
              <span class="skill-tag">PostgreSQL</span>
              <span class="skill-tag">Python</span>
              <span class="skill-tag">REST APIs</span>
            </div>
          </div>

          <div class="skill-group">
            <h4>Tools</h4>
            <div class="skill-tags">
              <span class="skill-tag">Git</span>
              <span class="skill-tag">Vite</span>
              <span class="skill-tag">Jira</span>
              <span class="skill-tag">Figma</span>
              <span class="skill-tag">Cypress</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}