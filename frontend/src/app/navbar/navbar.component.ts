import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <header class="nav">
      <div class="container bar">
        <a href="#" class="logo" aria-label="Masari – accueil">
          <svg viewBox="0 0 48 40" width="38" height="32" aria-hidden="true">
            <path d="M24 2 3 12l21 10 21-10L24 2Z" fill="#0e1f4d"/>
            <path d="M11 19v9c0 3.5 6 7 13 7s13-3.5 13-7v-9l-13 6-13-6Z" fill="#1b7f9e"/>
            <path d="M42 14v12" stroke="#0e1f4d" stroke-width="2.4" stroke-linecap="round"/>
          </svg>
          <span>Masari</span>
        </a>

        <nav class="links" [class.open]="open()" aria-label="Navigation principale">
          <a href="#ecoles">Explorer les écoles</a>
          <a href="#filieres">Découvrir les filières</a>
          <a href="#comment">Comment ça marche ?</a>
          <div class="mobile-actions">
            <a class="btn ghost" href="#">Connexion</a>
            <a class="btn primary" href="#">Commencer</a>
          </div>
        </nav>

        <div class="actions">
          <label class="search">
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7" fill="none" stroke="currentColor" stroke-width="2"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            <input type="search" placeholder="Rechercher..." aria-label="Rechercher une école" />
          </label>
          <a class="login" href="#">Connexion</a>
          <a class="btn primary small" href="#">
            Commencer
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>

        <button class="burger" type="button" (click)="open.set(!open())"
                [attr.aria-expanded]="open()" aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    .nav { position: sticky; top: 0; z-index: 20; background: rgba(243,246,253,.85); backdrop-filter: blur(10px); }
    .bar { display: flex; align-items: center; gap: 28px; height: 72px; }
    .logo { display: flex; align-items: center; gap: 10px; font-weight: 800; font-size: 22px; letter-spacing: -.02em; }
    .links { display: flex; gap: 26px; margin-left: 12px; font-size: 14px; font-weight: 600; a:hover { color: var(--teal); } }
    .mobile-actions { display: none; }
    .actions { margin-left: auto; display: flex; align-items: center; gap: 18px; }
    .search { display: flex; align-items: center; gap: 8px; background: #fff; border: 1px solid var(--line); border-radius: 10px; padding: 8px 12px; color: var(--muted);
      svg { width: 16px; height: 16px; }
      input { border: 0; outline: 0; background: transparent; font: inherit; font-size: 13px; width: 110px; color: var(--text); } }
    .login { font-weight: 600; font-size: 14px; &:hover { color: var(--teal); } }
    .small { padding: 9px 16px; font-size: 14px; border-radius: 10px; }
    .burger { display: none; margin-left: auto; width: 42px; height: 42px; border: 1px solid var(--line); border-radius: 10px; background: #fff; flex-direction: column; justify-content: center; gap: 5px; padding: 0 11px;
      span { display: block; height: 2px; background: var(--navy); border-radius: 2px; } }

    @media (max-width: 960px) {
      .search, .login { display: none; }
    }
    @media (max-width: 820px) {
      .actions { display: none; }
      .burger { display: flex; }
      .links { display: none; position: absolute; top: 72px; left: 0; right: 0; flex-direction: column; gap: 4px; margin: 0; padding: 12px 20px 20px; background: #fff; border-bottom: 1px solid var(--line); box-shadow: 0 18px 30px rgba(14,31,77,.08);
        a { padding: 12px 0; font-size: 16px; }
        &.open { display: flex; }
        .mobile-actions { display: flex; gap: 10px; margin-top: 8px; .btn { flex: 1; justify-content: center; } } }
    }
  `],
})
export class NavbarComponent {
  open = signal(false);
}
