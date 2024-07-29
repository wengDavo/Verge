import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { AboutHeroComponent } from '../about-hero/about-hero.component';
import { ValuesContainerComponent } from '../values-container/values-container.component';
import { AchievmentsContainerComponent } from '../achievments-container/achievments-container.component';
import { StepsSectionComponent } from '../steps-section/steps-section.component';
import { TeamsSectionComponent } from '../teams-section/teams-section.component';
import { ClientSectionComponent } from '../client-section/client-section.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [
    BannerComponent,
    NavbarComponent,
    AboutHeroComponent,
    ValuesContainerComponent,
    AchievmentsContainerComponent,
    StepsSectionComponent,
    TeamsSectionComponent,
    ClientSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-banner />
    <app-navbar />
    <section class="p-2 grid space-y-6 md:px-8">
      <app-about-hero />
      <app-values-container />
      <app-achievments-container />
      <app-steps-section />
      <app-teams-section/>
      <app-client-section/>
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class AboutPageComponent {}
