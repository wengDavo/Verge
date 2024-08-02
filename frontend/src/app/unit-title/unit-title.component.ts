import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-unit-title',
  standalone: true,
  imports: [],
  template: `
    <article class="md:flex md:justify-between">
      <div>
        <h3 class="text-[28px]">{{ title }}</h3>
        <p class="text-sm text-grey-60 md:w-[70%]">
          {{ description }}
        </p>
      </div>
      <button
        class=" bg-white-90 border border-white-85 dark:bg-grey-15 dark:border-grey-15 p-[8px] rounded-lg hidden md:block md:self-center md:items-end"
      >
        View All {{ category }}
      </button>
    </article>
  `,
  styles: ``,
})
export class UnitTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() category: string = '';
}
