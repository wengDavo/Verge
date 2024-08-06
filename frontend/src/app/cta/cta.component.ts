import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [RouterModule],
  template: `
    <article class="relative py-12 px-4 grid gap-7 md:gap-36 border border-y-grey-15 border-x-grey-8 bg-grey-8 text-abs-white md:flex">
      <div class="z-10 ">
        <h3 class="font-semibold text-[28px] ">
          Start Your Real Estate Journey Today
        </h3>
        <p class="text-sm font-medium text-grey-60 leading-6">
          Your dream property is just a click away. Whether you're looking for a
          new home, a strategic investment, or expert real estate advice,
          Estatein is here to assist you every step of the way. Take the first
          step towards your real estate goals and explore our available
          properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <button class="bg-purple-60 rounded-lg px-5 py-[14px] w-full z-10 md:self-center">
        <a routerLink="/properties">Explore Properties Now</a>
      </button>
      <figure class="absolute bottom-0 md:right-0">
        <img src="assets/images/shatteredBoxesRight.svg" alt="" class=""/>
      </figure>
      <figure class="absolute rotate-180 top-0 left-0">
        <img src="assets/images/shatteredBoxesLeft.svg" alt="" class=""/>
      </figure>
    </article>
  `,
  styles: ``,
})
export class CtaComponent {}
