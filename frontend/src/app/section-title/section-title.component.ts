import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
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
    </article>
  `,
  styles: ``
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
