import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { StepsComponent } from './steps/steps.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, HeroComponent, StepsComponent, FooterComponent],
  template: `
    <app-navbar />
    <main>
      <app-hero />
      <app-steps />
    </main>
    <app-footer />
  `,
})
export class AppComponent {}
