import { Component, Input, OnInit } from '@angular/core';
import { PricingCardUnitComponent } from '../pricing-card-unit/pricing-card-unit.component';
import { pricingCardI } from './pricing-card.interface';
import { pricingCardUnitI } from '../pricing-card-unit/pricing-card-unit.interface';

@Component({
  selector: 'app-pricing-card',
  standalone: true,
  imports: [PricingCardUnitComponent],
  template: `
    <article class="rounded-xl p-5 border border-grey-15 md:rounded-md">
      <div class="flex items-center">
        <p class="grow">{{ data.title }}</p>
        <button class="border border-grey-10 px-5 py-3 rounded-lg">
          Learn More
        </button>
      </div>
      <div class="grid gap-5 divide-y divide-grey-15">
        @for (item of data.pricingBreakdown; track $index) {
        <app-pricing-card-unit [data]="item" />
        }
      </div>
    </article>
  `,
  styles: ``,
})
export class PricingCardComponent implements OnInit {
  @Input() data!: pricingCardI;
  pricingCardUnitData!: Array<pricingCardUnitI>;

  ngOnInit(): void {}
}
