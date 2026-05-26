import { translations, Lang } from '../../core/i18n';

export function Footer(lang: Lang): string {
  const t = translations[lang].footer;
  return `
    <footer>
      <div class="container">
        <p>${t.copy}</p>
        <p class="footer-sub">${t.sub}</p>
      </div>
    </footer>
  `;
}