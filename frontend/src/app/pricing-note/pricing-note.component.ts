import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing-note',
  standalone: true,
  imports: [],
  template: `
    <article class="px-5 py-6 bg-grey-10 border border-grey-15">
      <div >
        <p class="font-semibold text-lg border-b border-grey-15 pb-2">Note</p>
      </div>
      <div>
        <p class="text-grey-60 font-medium text-sm pt-2">The figures provided above are estimates and may vary depending on the property, location, and individual circumstances.</p>
      </div>
    </article>
  `,
  styles: ``,
})
export class PricingNoteComponent {}
