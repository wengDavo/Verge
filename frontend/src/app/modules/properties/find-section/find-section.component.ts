import { Component } from '@angular/core';
import { SearchPropertyFormComponent } from '../search-property-form/search-property-form.component';
import { BgTitleComponent } from '../../../shared/component/bg-title/bg-title.component';
@Component({
  selector: 'app-find-section',
  standalone: true,
  imports: [SearchPropertyFormComponent, BgTitleComponent],
  template: `
    <section class="grid gap-8">
      <app-bg-title [title]="title" [description]="description" />
      <app-search-property-form />
    </section>
  `,
  styles: ``,
})
export class FindSectionComponent {
  title: string = 'Find Your Dream Property';
  description: string = `  Welcome to Verge, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey`;
}
