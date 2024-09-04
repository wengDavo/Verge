import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/component/section-title/section-title.component';
import { PricingNoteComponent } from '../pricing-note/pricing-note.component';
import { PricingCardComponent } from '../pricing-card/pricing-card.component';
import { pricingCardI } from '../pricing-card/pricing-card.interface';
import { PricingCardService } from '../pricing-card/pricing-card.service';

@Component({
  selector: 'app-pricing-section',
  standalone: true,
  imports: [SectionTitleComponent, PricingNoteComponent, PricingCardComponent],
  template: `
    <section class="grid gap-8">
      <app-section-title [title]="title" [description]="description" />
      <article>
        <app-pricing-note />
      </article>
      <article class="grid gap-5 md:grid-cols-3">
        <div class="md:col-span-1 ">
          <p class="font-medium text-sm text-grey-60">Listing Price</p>
          <p class="font-semibold text-2xl">$1,250,000</p>
        </div>
        <div class="grid gap-4 md:col-span-2">
          @for (item of pricingCardData; track $index) {
          <app-pricing-card [data]="item" />
          }
        </div>
      </article>
    </section>
  `,
  styles: ``,
})
export class PricingSectionComponent implements OnInit {
  title: string = `Comprehensive Pricing Details`;
  description: string = `At Estatein, transparency is key. We want you to have a clear understanding of all costs associated with your property investment. Below, we break down the pricing for Seaside Serenity Villa to help you make an informed decision`;
  pricingCardData!: Array<pricingCardI>;

  constructor(private pricingCardService: PricingCardService) {
    this.pricingCardData = pricingCardService.getPricingData();
  }
  ngOnInit(): void {}
}
