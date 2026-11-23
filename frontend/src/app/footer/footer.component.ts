import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <div class="container row">
        <strong>Masari</strong>
        <p>Masari est une aide à la décision, pas une source officielle. Vérifiez toujours les dates, frais et conditions auprès des établissements.</p>
      </div>
    </footer>
  `,
  styles: [`
    footer { border-top: 1px solid var(--line); padding: 28px 0; background: #fff; }
    .row { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
    strong { font-size: 18px; }
    p { margin: 0; color: var(--muted); font-size: 13.5px; max-width: 640px; line-height: 1.5; }
  `],
})
export class FooterComponent {}
