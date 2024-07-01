import { Component, Input } from '@angular/core';
import { faqI } from './faq.interface';
@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  template: `
    <article
      class="border border-white-90 dark:border-grey-15 p-8 grid gap-5 rounded-[10px] w-screen"
    >
      <h3 class="font-semibold text-lg">
        {{ faq.question }}
      </h3>
      <p class="font-medium text-sm">
        {{ faq.answer }}
      </p>
      <button
        class="bg-white-95 border-white-90 dark:bg-grey-10 border dark:border-grey-15 py-3 px-5 font-medium text-sm"
      >
        Read More
      </button>
    </article>
  `,
  styles: ``,
})
export class FaqComponent {
  @Input() faq!: faqI;
}
