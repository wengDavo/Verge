import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bg-title',
  standalone: true,
  imports: [],
  template: `
    <article class="md:flex md:justify-between">
      <div
        class="py-12 px-4 space-y-2 bg-gradient-to-r from-grey-15 to-grey-8 md:pl-20 md:pr-52"
      >
        <h3 class="text-3xl font-semibold">{{ title }}</h3>
        <p class="text-sm text-grey-60">
          {{ description }}
        </p>
      </div>
    </article>
  `,
  styles: ``,
})
export class BgTitleComponent {
  @Input() title!: string;
  @Input() description!: string;
}
