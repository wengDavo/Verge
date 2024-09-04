import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { FeaturedPropertiesComponent } from '../featured-properties/featured-properties.component';
// 
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedPropertiesComponent,
    SharedModule,
  ],
  template: `
     <app-banner />
     <app-navbar />
    <section class="p-2 grid gap-6 md:px-8">
      <app-hero />
      <app-featured-properties />
      <app-testimonials />
      <app-faqs />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PageComponent {}
