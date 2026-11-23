import { Component } from '@angular/core';
import { StatsComponent } from '../stats/stats.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [StatsComponent],
  template: `
    <section class="hero container">
      <div class="copy">
        <h1>
          Ton avenir<br>d'ingénieur<br>commence par<br>
          <span>le bon choix.</span>
        </h1>
        <p class="lead">
          Découvrez les écoles, trouvez votre voie et bénéficiez d'un accompagnement intelligent.
        </p>

        <div class="cta">
          <a class="btn primary" href="#">
            Commencer maintenant
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <button class="video" type="button">
            <span class="play" aria-hidden="true">
              <svg viewBox="0 0 24 24"><path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor"/></svg>
            </span>
            Voir la vidéo
          </button>
        </div>

        <app-stats />
      </div>

      <div class="visual">
        <img src="assets/hero.jpg" alt="Étudiant souriant devant la mosquée Hassan II, un cahier à la main" width="820" height="684" fetchpriority="high">
      </div>
    </section>
  `,
  styles: [`
    .hero { display: grid; grid-template-columns: 1.05fr 1fr; align-items: center; gap: 24px; padding: 40px 0 72px; }
    h1 { margin: 0 0 22px; font-size: clamp(40px, 5.2vw, 66px); line-height: 1.04; letter-spacing: -.035em; font-weight: 800;
      span { color: var(--teal); } }
    .lead { margin: 0 0 30px; color: var(--muted); font-size: 17px; line-height: 1.6; max-width: 440px; }
    .cta { display: flex; align-items: center; gap: 22px; flex-wrap: wrap; margin-bottom: 44px; }
    .video { display: inline-flex; align-items: center; gap: 12px; border: 0; background: none; font-weight: 600; font-size: 15px; color: var(--navy);
      &:hover .play { background: var(--navy); color: #fff; } }
    .play { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid var(--navy); display: grid; place-items: center; transition: background .2s, color .2s;
      svg { width: 18px; height: 18px; } }
    .visual { border-radius: 28px; overflow: hidden; box-shadow: 0 30px 60px -30px rgba(14,31,77,.35);
      img { width: 100%; height: auto; } }

    @media (max-width: 900px) {
      .hero { grid-template-columns: 1fr; padding-top: 24px; }
      .visual { order: -1; img { object-fit: cover; object-position: top; max-height: 380px; } }
      .lead { max-width: none; }
    }
  `],
})
export class HeroComponent {}
