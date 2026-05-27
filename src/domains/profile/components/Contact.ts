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

            <a href="https://wa.me/5491164763018" target="_blank" rel="noopener" class="contact-item">
              <div class="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.132.558 4.13 1.532 5.862L.057 23.447a.75.75 0 00.92.92l5.635-1.474A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.956 9.956 0 01-5.127-1.417l-.369-.218-3.821 1.001 1.02-3.72-.24-.382A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              </div>
              <div>
                <span class="contact-label">WhatsApp</span>
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

            <a href="https://github.com/Imerly" target="_blank" rel="noopener" class="contact-item">
              <div class="contact-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/></svg>
              </div>
              <div>
                <span class="contact-label">GitHub</span>
                <span class="contact-value">github.com/Imerly</span>
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  `;
}