import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AbsractDesignSparklesComponent } from '../../../shared/component/absract-design-sparkles/absract-design-sparkles.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatIconModule, AbsractDesignSparklesComponent],
  template: `
    <section>
      <article class="relative md:grid md:gap-2 md:grid-cols-2">
        <figure class="order-2">
          <img
            src="assets/images/houseHandheld.png"
            alt=""
            class="rounded-[12px]"
          />
        </figure>
        <div class="mt-16 grid gap-4 md:px-[60px] ">
          <div class="md:leading-6 md:space-y-4 ">
            <app-absract-design-sparkles />
            <p class="text-[28px] leading-10 w-[80%] md:text-[48px]">
              Our Journey
            </p>
            <p class="text-sm font-medium text-grey-60 md:w-[80%]">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
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
    </section>
  `,
  styles: ``,
})
export class HeroComponent {}
