import { Component } from '@angular/core';

@Component({
  selector: 'app-stats',
  standalone: true,
  template: `
    <ul class="stats">
      @for (s of stats; track s.label) {
        <li>
          <span class="ico" [innerHTML]="s.icon"></span>
          <div>
            <strong>{{ s.value }}</strong>
            <small>{{ s.label }}</small>
          </div>
        </li>
      }
    </ul>
  `,
  styles: [`
    .stats { list-style: none; margin: 0; padding: 0; display: flex; gap: 34px; flex-wrap: wrap; }
    li { display: flex; align-items: center; gap: 12px; }
    .ico { width: 36px; height: 36px; border-radius: 10px; background: #e4ecfa; color: var(--teal-dark); display: grid; place-items: center; }
    :host ::ng-deep .ico svg { width: 20px; height: 20px; }
    strong { display: block; font-size: 20px; letter-spacing: -.02em; }
    small { color: var(--muted); font-size: 12.5px; }
  `],
})
export class StatsComponent {
  private static svg = (p: string) =>
    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;

  stats = [
    { value: '+50', label: 'Écoles référencées', icon: StatsComponent.svg('<path d="M3 10 12 4l9 6M5 10v8m4-8v8m6-8v8m4-8v8M3 20h18"/>') },
    { value: '+30', label: 'Filières disponibles', icon: StatsComponent.svg('<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 9h6v6H9z"/>') },
    { value: '100%', label: 'Fiable et à jour', icon: StatsComponent.svg('<circle cx="12" cy="12" r="9"/><path d="m8 12.5 3 3 5-6"/>') },
  ];
}
