import { Component, OnInit, Inject } from '@angular/core';
import { OverviewCardComponent } from '../overview-card/overview-card.component';
import { overviewCardI } from '../overview-card/overview-card.interface';
import { appName } from '../app.config';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [OverviewCardComponent],
  template: `
    <section class="grid gap-6">
      <article class="">
        <figure class="flex gap-2">
          <img src="assets/icons/logo.svg" alt="" class="w-6" />
          <figcaption>{{app_name}}</figcaption>
        </figure>
        <div class="grid grid-cols-2 md:flex md:justify-between">
          @for (item of overviewCardData; track $index) {
          <app-overview-card [overview]="item" />
          }
        </div>
      </article>
      <article class="text-center dark:bg-grey-10 text-abs-black bg-white-90 py-5 grid gap-2 dark:text-abs-white">
        <p>Terms & Conditions</p>
        <p>{{year}} {{app_name}}. All Rights Reserved.</p>
      </article>
    </section>
  `,
  styles: ``,
})
export class OverviewComponent implements OnInit {
  overviewCardData!: Array<overviewCardI>;
  date: Date = new Date();
  year: number = this.date.getFullYear()

  constructor(@Inject(appName) public app_name: string){
    this.app_name = app_name;
  }
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
