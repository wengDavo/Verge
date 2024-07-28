import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';
import { StepsComponent } from '../steps/steps.component';

@Component({
  selector: 'app-steps-section',
  standalone: true,
  imports: [StepsComponent, SectionTitleComponent, AbsractDesignSparklesComponent],
  template: ` <section class="grid gap-8">
    <app-absract-design-sparkles />
    <app-section-title [title]="title" [description]="description" />
    <app-steps />
  </section>`,
  styles: ``,
})
export class StepsSectionComponent {
  title: string = 'Navigating the Estatein Experience';
  description: string =
    "At Estatein, we've designed a straightforward process to help you find and purchase your dream property with ease. Here's a step-by-step guide to how it all works.";
}
