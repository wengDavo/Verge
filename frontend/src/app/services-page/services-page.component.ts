import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroCardsComponent } from '../hero-cards/hero-cards.component';
import { UnlockSectionComponent } from '../unlock-section/unlock-section.component';
import { unlockSectionI } from '../unlock-section/unlock-section.interface';
import { UnlockSectionService } from '../unlock-section/unlock-section.service';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    BannerComponent,
    NavbarComponent,
    HeroCardsComponent,
    UnlockSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-banner />
    <app-navbar />
    <article class="md:flex md:justify-between">
      <div
        class="py-12 px-4 space-y-2 bg-gradient-to-r from-grey-15 to-grey-8 md:pl-20 md:pr-52"
      >
        <h3 class="text-3xl font-semibold">
          Elevate Your Real Estate Experience
        </h3>
        <p class="text-sm text-grey-60">
          Welcome to Verge, where your dream property awaits in every corner of
          our beautiful world. Explore our curated selection of properties, each
          offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey
        </p>
      </div>
    </article>
    <section class="p-2 grid space-y-6">
      <app-hero-cards />
      @for (item of sectionData; track $index) {
      <app-unlock-section [data]="item" />
      }
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class ServicesPageComponent {
  constructor(private unlockSectionService: UnlockSectionService) {
    this.sectionData = unlockSectionService.getSectionData();
  }
  sectionData: Array<unlockSectionI>;
}
