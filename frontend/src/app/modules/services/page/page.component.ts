import { Component } from '@angular/core';

import { UnlockSectionComponent } from '../unlock-section/unlock-section.component';
import { unlockSectionI } from '../unlock-section/unlock-section.interface';
import { UnlockSectionService } from '../unlock-section/unlock-section.service';
//
import { SharedModule } from '../../../shared/shared.module';
@Component({
  selector: 'app-page',
  standalone: true,
  imports: [UnlockSectionComponent, SharedModule],
  template: `
     <app-banner />
     <app-navbar />
    <app-bg-title [title]="title" [description]="description" />
    <section class="p-2 grid gap-6 mb-8 md:px-8">
      <app-hero-cards />
      @for (item of sectionData; track $index) {
      <app-unlock-section [data]="item" />
      }
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PageComponent {
  constructor(private unlockSectionService: UnlockSectionService) {
    this.sectionData = unlockSectionService.getSectionData();
  }
  sectionData: Array<unlockSectionI>;
  title: string = 'Elevate Your Real Estate Experience';
  description: string = `    Welcome to Verge, where your dream property awaits in every corner of
          our beautiful world. Explore our curated selection of properties, each
          offering a unique story and a chance to redefine your life. With
          categories to suit every dreamer, your journey`;
}
