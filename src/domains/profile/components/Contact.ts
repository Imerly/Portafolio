import { translations, Lang } from '../../../core/i18n';

export function Contact(lang: Lang): string {
  return `
    <section class="contact section" id="contact">
      <div class="container">
        <div class="contact-inner">
          <span class="section-label">${lang === 'en' ? 'Contact' : 'Contacto'}</span>
          <h2>${lang === 'en' ? "Let's <em>talk</em>" : 'Hablemos'}</h2>
          <p class="contact-desc">${lang === 'en' ? "I'm open to new opportunities. Feel free to reach out!" : '¡Estoy abierta a nuevas oportunidades. No dudes en escribirme!'}</p>
          <div class="contact-links">

            <a href="mailto:imerlymoratae@gmail.com" class="contact-item">
              <div class="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              </div>
              <div>
                <span class="contact-label">Email</span>
                <span class="contact-value">imerlymoratae@gmail.com</span>
              </div>
            </a>

            <a href="tel:+5491164763018" class="contact-item">
              <div class="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <span class="contact-label">${lang === 'en' ? 'Phone' : 'Teléfono'}</span>
                <span class="contact-value">+54 9 11 6476 3018</span>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/imerly-mora-bba7842a9" target="_blank" rel="noopener" class="contact-item">
              <div class="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </div>
              <div>
                <span class="contact-label">LinkedIn</span>
                <span class="contact-value">imerly-mora-bba7842a9</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  `;
}