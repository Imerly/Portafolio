import { translations, Lang } from '../../../core/i18n';

export function Timeline(lang: Lang): string {
  const t = translations[lang].experience;
  return `
    <section class="experience section" id="experience">
      <div class="container">
        <span class="section-label">${t.label}</span>
        <h2>${t.title} <em>${t.titleEm}</em></h2>
        <div class="timeline">

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-card">
              <div class="timeline-header">
                <div>
                  <h3>${t.role}</h3>
                  <span class="company">${t.type}</span>
                </div>
                <span class="timeline-date">${t.date}</span>
              </div>
              <ul class="timeline-list">
                ${t.items.map(item => `<li>${item}</li>`).join('')}
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