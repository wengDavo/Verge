import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/component/section-title/section-title.component';
import { AbsractDesignSparklesComponent } from '../../../shared/component/absract-design-sparkles/absract-design-sparkles.component';
import { AchievmentsComponent } from '../achievments/achievments.component';

@Component({
  selector: 'app-achievments-container',
  standalone: true,
  imports: [
    AbsractDesignSparklesComponent,
    SectionTitleComponent,
    AchievmentsComponent,
  ],
  template: `
    <section class="p-2 grid space-y-6">
      <app-section-title [title]="title" [description]="description" />
      <app-achievments />
    </section>
  `,
  styles: ``,
})
export class AchievmentsContainerComponent {
  title: string = 'Our Achievments';
  description: string =
    'Our story is one of continuous growth and evolution. We started as a small team with big dreams, determined to create a real estate platform that transcended the ordinary.';
}
