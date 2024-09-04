import { Component } from '@angular/core';
import { CtaComponent } from '../cta/cta.component';
import { OverviewComponent } from '../overview/overview.component';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CtaComponent, OverviewComponent],
  template: `
    <section class="grid gap-4">
      <app-cta />
      <app-overview />
    </section>
  `,
  styles: ``,
})
export class FooterComponent {}
