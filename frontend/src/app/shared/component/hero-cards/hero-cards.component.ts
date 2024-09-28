import { Component, OnInit } from '@angular/core';
import { HeroCardComponent } from './hero-card/hero-card.component';
import { heroCardI } from './hero-card/hero-card.interface';

@Component({
  selector: 'app-hero-cards',
  standalone: true,
  imports: [HeroCardComponent],
  template: `
    <article
      class="bg-white-85 dark:bg-grey-8 rounded-[12px] shadow-sm dark:shadow-md grid grid-cols-2 gap-3 dark:shadow-grey-8 p-2 outline outline-white-90 dark:outline-grey-15 text-abs-white md:grid-cols-4 md:rounded-none "
    >
      @for (item of heroCardData; track $index) {
      <app-hero-card [message]="item.message" [imagePath]="item.imagePath" />
      }
    </article>
  `,
  styles: ``,
})
export class HeroCardsComponent implements OnInit {
  heroCardData!: Array<heroCardI>;
  ngOnInit(): void {
    this.heroCardData = [
      {
        message: 'Find Your Dream Home at Verge',
        imagePath: '/assets/icons/home.svg',
      },
      {
        message: 'Unlock Property Value With Us',
        imagePath: '/assets/icons/camera.svg',
      },
      {
        message: 'Effortlesly Property Management',
        imagePath: '/assets/icons/corperation.svg',
      },
      {
        message: 'Smart Investments, Informed Decisions',
        imagePath: '/assets/icons/sun.svg',
      },
    ];
  }
}
