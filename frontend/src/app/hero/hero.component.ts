import { Component, inject} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { HeroCardsComponent } from '../hero-cards/hero-cards.component';
import { APP_NAME } from '../app.config';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule, HeroCardsComponent, RouterModule],
  template: `
    <section class="grid gap-4">
      <article class="relative md:flex md:gap-2 md:flex-row-reverse">
        <figure class="">
          <img
            src="assets/images/heroBuilding.svg"
            alt=""
            class="rounded-[12px]"
          />
        </figure>
        <figure class="absolute top-[260px] left-0 md:left-[56%] md:top-16">
          <img src="assets/images/badge.svg" alt="" />
        </figure>
        <div class="mt-16 grid gap-4 md:px-[60px] ">
          <div class="md:leading-6 md:space-y-4 ">
            <p class="text-[28px] leading-10 w-[80%] md:text-[48px]">
              Discover Your Dream Property With {{ APP_NAME }}
            </p>
            <p class="text-sm font-medium text-grey-60 md:w-[80%]">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
          </div>
          <div class="grid gap-4 text-abs-white md:flex">
            <button
              class="p-4 md:p-2 grid place-content-center text-sm dark:bg-grey-10 w-full rounded-lg bg-red-300 md:w-[151px] md:h-[49px] border dark:border-grey-15 "
            >
              <a routerLink="/services">Learn More</a>
            </button>
            <button
              class="p-4 md:p-2 grid place-content-center text-sm bg-purple-60 w-full rounded-lg md:w-[151px] md:h-[49px]"
            >
              <a routerLink="/properties">Browse Properties</a>
            </button>
          </div>
          <div class="grid gap-2 text-abs-white md:flex">
            <div
              class="text-center md:text-left grid grid-cols-2 gap-2 md:grid-cols-3"
            >
              <div
                class="p-4 md:px-2 md:w md:py-0 dark:bg-grey-10 grid gap-[2px] md:gap-2 rounded-lg border dark:border-grey-15 md:place-content-center text-abs-dark dark:text-abs-white bg-white-90 border-white-95"
              >
                <p class="font-bold text-2xl">200+</p>
                <p class="font-medium text-xs text-grey-60">Happy Customers</p>
              </div>
              <div
                class="p-4 md:px-2 md:w md:py-0 dark:bg-grey-10 grid gap-[2px] md:gap-2 rounded-lg border dark:border-grey-15 md:place-content-center text-abs-dark dark:text-abs-white bg-white-90 border-white-95"
              >
                <p class="font-bold text-2xl">10k+</p>
                <p class="font-medium text-xs text-grey-60">
                  Properties For Clients
                </p>
              </div>
              <div
                class="p-4 md:px-2 md:w md:py-0 grid gap-[2px] md:gap-2 dark:bg-grey-10 rounded-lg col-span-2 md:col-span-1 border dark:border-grey-15 md:place-content-center text-abs-dark dark:text-abs-white bg-white-90 border-white-95"
              >
                <p class="font-bold text-2xl">16+</p>
                <p class="font-medium text-xs text-grey-60">
                  Years of Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
      <app-hero-cards />
    </section>
  `,
  styles: ``,
})
export class HeroComponent {
  public APP_NAME = inject(APP_NAME)
}
