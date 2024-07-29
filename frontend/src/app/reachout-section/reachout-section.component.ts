import { Component } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ReachoutFormComponent } from '../reachout-form/reachout-form.component';

@Component({
  selector: 'app-reachout-section',
  standalone: true,
  imports: [SectionTitleComponent, ReachoutFormComponent],
  template: `
    <section class="grid gap-8">
      <app-section-title [title]="title" [description]="description" />
      <app-reachout-form />
    </section>
  `,
  styles: ``,
})
export class ReachoutSectionComponent {
  title: string = `Let's Make it Happen`;
  description: string =
    `Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together.`;
}
