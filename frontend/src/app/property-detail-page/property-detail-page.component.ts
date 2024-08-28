import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyModule } from '../property/property.module';

import { InquirySectionComponent } from '../inquiry-section/inquiry-section.component';
import { PricingSectionComponent } from '../pricing-section/pricing-section.component';
import { FaqsComponent } from '../faqs/faqs.component';

import { FooterComponent } from '../footer/footer.component';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-property-detail-page',
  standalone: true,
  imports: [
    FooterComponent,
    PropertyModule,
    InquirySectionComponent,
    PricingSectionComponent,
    FaqsComponent,
    FooterComponent,
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
export class PropertyDetailPageComponent implements OnInit {
  private router = inject(ActivatedRoute);
  roomId$ = this.router.paramMap.pipe(
    map((params) => params.get('id'))
  );

  ngOnInit(): void {}
}
