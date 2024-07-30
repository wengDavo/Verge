import { Component, Input } from '@angular/core';
import { pricingCardUnitI } from './pricing-card-unit.interface';

@Component({
  selector: 'app-pricing-card-unit',
  standalone: true,
  imports: [],
  template: `
    <div class="grid gap-4 py-5 md:gap-1">
      <p class="text-sm text-grey-60">{{data.title}}</p>
      <p class="flex items-center gap-4 justify-between">
        <span class="inline-block font-semibold text-lg  py-1"><span>$</span>{{data.price}}</span>
        <span
          class="inline-block font-medium text-sm text-grey-60 bg-grey-10 border border-grey-15 px-3 py-1 rounded-md "
          >{{data.description}}</span
        >
      </p>
    </div>
  `,
  styles: ``,
})
export class PricingCardUnitComponent {
  @Input() data!: pricingCardUnitI;
}
