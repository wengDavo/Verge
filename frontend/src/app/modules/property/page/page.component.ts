import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { PropertyGalleryComponent } from '../property-gallery/property-gallery.component';
import { PropertyDescriptionComponent } from '../property-description/property-description.component';
import { PropertyFeaturesComponent } from '../property-features/property-features.component';
import { InquirySectionComponent } from '../inquiry-section/inquiry-section.component';
import { PricingSectionComponent } from '../pricing-section/pricing-section.component';
// 
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    PropertyGalleryComponent,
    PropertyFeaturesComponent,
    PropertyDescriptionComponent,
    InquirySectionComponent,
    PricingSectionComponent,
    SharedModule
  ],
  template: `
     <app-banner />
     <app-navbar />
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
export class PageComponent implements OnInit {
  private router = inject(ActivatedRoute);
  roomId$ = this.router.paramMap.pipe(map((params) => params.get('id')));

  ngOnInit(): void {}
}
