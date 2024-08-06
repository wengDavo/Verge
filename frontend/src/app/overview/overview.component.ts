import { Component, OnInit, Inject, inject } from '@angular/core';
import { OverviewCardComponent } from '../overview-card/overview-card.component';
import { overviewCardI } from '../overview-card/overview-card.interface';
import { APP_NAME } from '../app.config';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [OverviewCardComponent, MatIconModule],
  template: `
    <section class="grid gap-6">
      <article class="p-2">
        <figure class="flex gap-2">
          <img src="assets/icons/logo.svg" alt="" class="w-6" />
          <figcaption>{{ APP_NAME }}</figcaption>
        </figure>
        <div class="grid grid-cols-2 md:flex md:justify-between">
          @for (item of overviewCardData; track $index) {
          <app-overview-card [overview]="item" />
          }
        </div>
      </article>
      <article
        class="text-center dark:bg-grey-10 text-abs-black bg-white-90 py-5 grid gap-4 dark:text-abs-white md:flex md:justify-between md:p-4 md:items-center md:flex-row-reverse"
      >
      
        <div class="flex gap-4 mx-auto md:mx-0">
          <p class="bg-white-95 dark:bg-grey-8 p-2 rounded-full grid place-content-center"><mat-icon>emoji_nature</mat-icon></p>
          <p class="bg-white-95 dark:bg-grey-8 p-2 rounded-full grid place-content-center"><mat-icon>compost</mat-icon></p>
          <p class="bg-white-95 dark:bg-grey-8 p-2 rounded-full grid place-content-center"><mat-icon>diamond</mat-icon></p>
          <p class="bg-white-95 dark:bg-grey-8 p-2 rounded-full grid place-content-center"><mat-icon>spa</mat-icon></p>
        </div>
        <div class="md:flex md:gap-4">
          <p>Terms & Conditions</p>
          <p>{{ year }} {{ APP_NAME }} All Rights Reserved.</p>
        </div>
      </article>
    </section>
  `,
  styles: ``,
})
export class OverviewComponent implements OnInit {
  overviewCardData!: Array<overviewCardI>;
  date: Date = new Date();
  year: number = this.date.getFullYear();
  public APP_NAME = inject(APP_NAME)
  
  ngOnInit(): void {
    this.overviewCardData = [
      {
        title: 'Home',
        items: [
          'Hero Section',
          'Features',
          'Properties',
          'Testimonials',
          `FAQ's`,
        ],
      },
      {
        title: 'About Us',
        items: [
          'Our Story',
          'Our Works',
          'How it Works',
          'Our Team',
          `Our Clients`,
        ],
      },
      {
        title: 'Properties',
        items: ['Portfolio', 'Categories', '', '', ``],
      },
      {
        title: 'Contact Us',
        items: ['Contact Form', 'Categories'],
      },
      {
        title: 'Services',
        items: [
          'Valuation Mastery',
          'Strategic Marketing',
          'Negotiation Wizardry',
          'Closing Success',
          `Property Management`,
        ],
      },
    ];
  }
}
