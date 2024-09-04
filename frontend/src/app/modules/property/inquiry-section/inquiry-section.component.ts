import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../shared/component/section-title/section-title.component';
import { InquiryFormComponent } from '../inquiry-form/inquiry-form.component';

@Component({
  selector: 'app-inquiry-section',
  standalone: true,
  imports: [SectionTitleComponent, InquiryFormComponent],
  template: `
    <section class="grid gap-8 md:grid-cols-2 md:gap-2 md:justify-start">
      <app-section-title [title]="title" [description]="description" />
      <app-inquiry-form />
    </section>
  `,
  styles: ``,
})
export class InquirySectionComponent {
  title: string = `Inquire About Seaside Serenity Villa`;
  description: string = `Interested in this property? Fill out the form below, and our real estate experts will get back to you with more details, including scheduling a viewing and answering any questions you may have.`;
}
