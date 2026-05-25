export function Navbar(): string {
  return `
    <nav class="navbar" id="navbar">
      <a href="#home" class="nav-logo">
        <span class="nav-logo-text">Imerly <em>Mora</em></span>
      </a>
      <ul class="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button class="nav-toggle" id="navToggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  `;
}