import { Component } from '@angular/core';
import { PropertyGalleryComponent } from '../property-gallery/property-gallery.component';
import { PropertyDescriptionComponent } from '../property-description/property-description.component';
import { PropertyFeaturesComponent } from '../property-features/property-features.component';
import { InquirySectionComponent } from '../inquiry-section/inquiry-section.component';
import { PricingSectionComponent } from '../pricing-section/pricing-section.component';
import { FaqsComponent } from '../faqs/faqs.component';

import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-property-detail-page',
  standalone: true,
  imports: [
    FooterComponent,
    PropertyGalleryComponent,
    PropertyDescriptionComponent,
    PropertyFeaturesComponent,
    InquirySectionComponent,
    PricingSectionComponent,
    FaqsComponent,
    FooterComponent
  ],
  template: `

    <section class="p-2 grid gap-6 md:px-8">
      <app-property-gallery />
      <article class="grid md:grid-cols-2 gap-2">
        <app-property-description />
        <app-property-features />
      </article>
      <app-inquiry-section />
      <app-pricing-section />
      <app-faqs />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PropertyDetailPageComponent {}
