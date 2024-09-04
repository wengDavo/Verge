import { Component } from '@angular/core';

import { HeroComponent } from '../hero/hero.component';
import { ValuesContainerComponent } from '../values-container/values-container.component';
import { AchievmentsContainerComponent } from '../achievments-container/achievments-container.component';
import { StepsSectionComponent } from '../steps-section/steps-section.component';
import { TeamsSectionComponent } from '../teams-section/teams-section.component';
import { ClientSectionComponent } from '../client-section/client-section.component';
// 
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    HeroComponent,
    ValuesContainerComponent,
    AchievmentsContainerComponent,
    StepsSectionComponent,
    TeamsSectionComponent,
    ClientSectionComponent,
    SharedModule
  ],
  template: `
    <app-banner />
    <app-navbar />
    <section class="p-2 grid gap-6 md:px-8">
      <app-hero />
      <app-values-container />
      <app-achievments-container />
      <app-steps-section />
      <app-teams-section />
      <app-client-section />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PageComponent {}
