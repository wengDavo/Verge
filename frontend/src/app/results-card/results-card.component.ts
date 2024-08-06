import { Component, Input } from '@angular/core';
import { resultsCardI } from './results-card.interface';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-results-card',
  standalone: true,
  imports: [RouterModule],
  template: `
    <article
      class="border border-white-85 dark:border-grey-20 p-6 grid gap-6 rounded-xl md:mr-1  "
    >
      <figure class="h-[210px]">
        <img [src]="data.img" alt="" class="w-full h-full rounded-xl" />
      </figure>
      <article class="grid gap-6">
        <div
          class="font-medium text-sm rounded-[28px] py-1 px-4 border dark:border-grey-15 w-fit border-white-85"
        >
          <p>{{ data.location }}</p>
        </div>
        <div>
          <h4 class="font-semibold text-[18px]">{{ data.name }}</h4>
          <p class="font-medium text-sm text-grey-60">
            {{ data.description }}
            <span class="text-abs-white">Read More</span>
          </p>
        </div>
        <div class="flex text-sm justify-between">
          <div>
            <p class="font-medium text-grey-60 mb-1">Price</p>
            <p class="font-semibold text-[18px]">$ {{ data.price }}</p>
          </div>
          <button class="text-abs-white bg-purple-60 px-5 py-[14px] rounded-lg">
            <a routerLink="/property">View Property Details</a>
          </button>
        </div>
      </article>
    </article>
  `,
  styles: ``,
})
export class ResultsCardComponent {
  @Input() data!: resultsCardI;
}
