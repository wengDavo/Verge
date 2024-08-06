import { Component } from '@angular/core';
import { FindSectionComponent } from '../find-section/find-section.component';
import { ResultsSectionComponent } from '../results-section/results-section.component';
import { ReachoutSectionComponent } from '../reachout-section/reachout-section.component';

import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-properties-page',
  standalone: true,
  imports: [
    FindSectionComponent,
    FooterComponent,
    ResultsSectionComponent,
    ReachoutSectionComponent,
    FooterComponent
  ],
  template: `
    <app-find-section />
    <section class="p-2 grid gap-6 md:px-8">
      <app-results-section />
      <app-reachout-section />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PropertiesPageComponent {}
