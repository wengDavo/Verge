import { Component, Input } from '@angular/core';
import { pricingCardUnitI } from './pricing-card-unit.interface';

@Component({
  selector: 'app-pricing-card-unit',
  standalone: true,
  imports: [],
  template: `
    <div class="grid gap-4 py-5 md:gap-1">
      <p class="text-sm dark:text-grey-60 text-grey-30">{{data.title}}</p>
      <p class="flex items-center gap-4 justify-between">
        <span class="inline-block font-semibold text-lg  py-1"><span>$</span>{{data.price}}</span>
        <span
          class="inline-block font-medium text-sm dark:text-grey-60 text-grey-30 dark:bg-grey-10 bg-white-90 border dark:border-grey-15 border-white-95 px-3 py-1 rounded-md "
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
