import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from '../hero/hero.component';
import { FeaturedPropertiesComponent } from '../featured-properties/featured-properties.component';
import { TestimonialsComponent } from '../testimonials/testimonials.component';
import { FaqsComponent } from '../faqs/faqs.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroComponent,
    FeaturedPropertiesComponent,
    TestimonialsComponent,
    FaqsComponent,
    FooterComponent,
  ],
  template: `
    <section class="p-2 grid gap-6 md:px-8">
      <app-hero />
      <app-featured-properties />
      <app-testimonials />
      <app-faqs />
    </section>
    <app-footer/>
  `,
  styles: ``,
})
export class HomePageComponent {}
