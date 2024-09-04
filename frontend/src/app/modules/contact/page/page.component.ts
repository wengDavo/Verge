import { Component } from '@angular/core';

import { ContactFormComponent } from '../contact-form/contact-form.component';
import { DiscoverSectionComponent } from '../discover-section/discover-section.component';
import { ExploreSectionComponent } from '../explore-section/explore-section.component';
//
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    ContactFormComponent,
    DiscoverSectionComponent,
    ExploreSectionComponent,
    SharedModule,
  ],
  template: `
     <app-banner />
     <app-navbar />
    <app-bg-title [title]="title" [description]="description" />
    <section class="p-2 grid gap-6 md:px-8">
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
export class PageComponent {
  title: string = 'Get in Touch with Estatein';
  description: string =
    "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have.";
  connectTitle: string = "Let's Connect";
  connectDescription: string =
    "We're excited to connect with you and learn more about your real estate goals. Use the form below to get in touch with Estatein.";
}
