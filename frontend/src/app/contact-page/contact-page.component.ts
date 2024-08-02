import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { BannerComponent } from '../banner/banner.component';
import { HeroCardsComponent } from '../hero-cards/hero-cards.component';
import { BgTitleComponent } from '../bg-title/bg-title.component';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { DiscoverSectionComponent } from '../discover-section/discover-section.component';
import { ExploreSectionComponent } from '../explore-section/explore-section.component';

import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    BannerComponent,
    NavbarComponent,
    HeroCardsComponent,
    BgTitleComponent,
    SectionTitleComponent,
    ContactFormComponent,
    DiscoverSectionComponent,
    ExploreSectionComponent,
    FooterComponent,
  ],
  template: `
    <app-banner />
    <app-navbar />
    <app-bg-title [title]="title" [description]="description" />
    <section class="p-2 grid space-y-6 md:px-7">
      <app-hero-cards />
      <app-section-title
        [title]="connectTitle"
        [description]="connectDescription"
      />
      <app-contact-form />
      <app-discover-section />
      <app-explore-section />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class ContactPageComponent {
  title: string = 'Get in Touch with Estatein';
  description: string =
    "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have.";
  connectTitle: string = "Let's Connect";
  connectDescription: string =
    "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein.";
}
