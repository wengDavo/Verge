import { Component, Input } from '@angular/core';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';

@Component({
  selector: 'app-section-title',
  standalone: true,
  imports: [AbsractDesignSparklesComponent],
  template: `
    <app-absract-design-sparkles />
    <article class="md:flex md:justify-between">
      <div>
        <h3 class="text-[28px] font-semibold">{{ title }}</h3>
        <p class="text-sm text-grey-60 md:w-[70%]">
          {{ description }}
        </p>
      </div>
    </article>
  `,
  styles: ``,
})
export class SectionTitleComponent {
  @Input() title: string = '';
  @Input() description: string = '';
}
