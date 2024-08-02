import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-note',
  standalone: true,
  imports: [],
  template: `
    <article class="px-5 py-6 dark:bg-grey-10 bg-white-90 border dark:border-grey-15 border-white-95">
      <div >
        <p class="font-semibold text-lg border-b dark:border-grey-15 border-white-85 pb-2">Note</p>
      </div>
      <div>
        <p class="dark:text-grey-60 text-grey-30 font-medium text-sm pt-2">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
      </div>
    </article>
  `,
  styles: ``,
})
export class PricingNoteComponent {}
