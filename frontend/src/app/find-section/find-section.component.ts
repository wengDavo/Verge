import { Component } from '@angular/core';
import { SearchPropertyFormComponent } from '../search-property-form/search-property-form.component';
@Component({
  selector: 'app-find-section',
  standalone: true,
  imports: [SearchPropertyFormComponent],
  template: `
    <section class="grid gap-8">
      <article class="md:flex md:justify-between">
        <div
          class="py-12 px-4 space-y-2 bg-gradient-to-r from-grey-15 to-grey-8 md:pl-20 md:pr-52"
        >
          <h3 class="text-3xl font-semibold">Find Your Dream Property</h3>
          <p class="text-sm text-grey-60">
            Welcome to Verge, where your dream property awaits in every
            corner of our beautiful world. Explore our curated selection of
            properties, each offering a unique story and a chance to redefine
            your life. With categories to suit every dreamer, your journey
          </p>
        </div>
      </article>
      <app-search-property-form />
    </section>
  `,
  styles: ``,
})
export class FindSectionComponent {}
