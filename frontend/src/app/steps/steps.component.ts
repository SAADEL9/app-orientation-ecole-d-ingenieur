import { Component } from '@angular/core';

@Component({
  selector: 'app-steps',
  standalone: true,
  template: `
    <section id="comment" class="steps container">
      <h2>Comment ça marche ?</h2>
      <p class="sub">Trois étapes pour trouver l'école qui vous correspond.</p>

      <ol>
        @for (s of steps; track s.title) {
          <li>
            <span class="n">{{ $index + 1 }}</span>
            <h3>{{ s.title }}</h3>
            <p>{{ s.text }}</p>
          </li>
        }
      </ol>
    </section>
  `,
  styles: [`
    .steps { padding: 20px 0 90px; }
    h2 { margin: 0 0 8px; font-size: clamp(26px, 3vw, 34px); letter-spacing: -.025em; }
    .sub { margin: 0 0 32px; color: var(--muted); }
    ol { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    li { background: #fff; border: 1px solid var(--line); border-radius: 18px; padding: 26px; }
    .n { width: 34px; height: 34px; border-radius: 50%; background: var(--navy); color: #fff; display: grid; place-items: center; font-weight: 700; margin-bottom: 16px; }
    h3 { margin: 0 0 8px; font-size: 18px; }
    li p { margin: 0; color: var(--muted); line-height: 1.55; font-size: 15px; }
    @media (max-width: 800px) { ol { grid-template-columns: 1fr; } }
  `],
})
export class StepsComponent {
  steps = [
    { title: 'Répondez au questionnaire', text: "Niveau d'études, matières fortes, centres d'intérêt, budget et villes : six courtes étapes pour construire votre profil." },
    { title: 'Recevez vos recommandations', text: "Une liste d'écoles et de filières classées par compatibilité, avec les critères qui correspondent à votre profil." },
    { title: 'Posez vos questions au coach IA', text: "Comparez des écoles, comprenez les modes d'admission et préparez vos concours avec un coach disponible à tout moment." },
  ];
}
