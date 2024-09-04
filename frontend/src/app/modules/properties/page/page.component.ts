import { Component } from '@angular/core';

import { FindSectionComponent } from '../find-section/find-section.component';
import { ResultsSectionComponent } from '../results-section/results-section.component';
import { ReachoutSectionComponent } from '../reachout-section/reachout-section.component';
// 
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    FindSectionComponent,
    ResultsSectionComponent,
    ReachoutSectionComponent,
    SharedModule,
  ],
  template: `
     <app-banner />
     <app-navbar />
    <app-find-section />
    <section class="p-2 grid gap-6 md:px-8">
      <app-results-section />
      <app-reachout-section />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PageComponent {}
