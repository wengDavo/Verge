import { Component, OnInit } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';
import { DiscoverCardComponent } from '../discover-card/discover-card.component';
import { ExploreSectionComponent } from '../explore-section/explore-section.component';
import { discoverCardI } from '../discover-card/discover-card.interface';

@Component({
  selector: 'app-discover-section',
  standalone: true,
  imports: [
    DiscoverCardComponent,
    ExploreSectionComponent,
    SharedModule,
  ],
  template: `
    <section class="grid gap-8">
      <app-section-title [title]="title" [description]="description" />
      <article
        class="rounded-md p-3 dark:bg-grey-10 bg-white-90 border dark:border-grey-15 border-white-95 flex gap-2 md:w-fit "
      >
        <button
          class="rounded-md px-5  py-3 dark:hover:bg-grey-8 bg-white-95 dark:bg-grey-10  hover:bg-white-85 border dark:border-grey-15 border-white-95"
        >
          All
        </button>
        <button
          class="rounded-md px-5  py-3 dark:hover:bg-grey-8 bg-white-95 dark:bg-grey-10 hover:bg-white-85 border dark:border-grey-15 border-white-95"
        >
          Regional
        </button>
        <button
          class="rounded-md px-5  py-3 dark:hover:bg-grey-8 bg-white-95 dark:bg-grey-10 hover:bg-white-85 border dark:border-grey-15 border-white-95"
        >
          International
        </button>
      </article>
      <article class="grid gap-2 md:grid-cols-2">
        @for (item of discoverCardData; track $index) {
        <app-discover-card [data]="item" />
        }
      </article>
    </section>
  `,
  styles: ``,
})
export class DiscoverSectionComponent implements OnInit {
  title: string = 'Discover Our Office Locations';
  description: string =
    "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team.";
  discoverCardData!: Array<discoverCardI>;

  ngOnInit(): void {
    this.discoverCardData = [
      {
        name: 'Main Headquarters',
        location: '123 Estatein Plaza, City Center, Metropolis',
        description:
          'Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.',
        email: 'info@estatein.com',
        phone: '+1 (123) 456-7890',
        address: 'Metropolis',
      },
      {
        name: 'Regional Offices',
        location: '456 Urban Avenue, Downtown District, Metropolis',
        description: `Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.`,
        email: 'info@restatein.com',
        phone: '+1 (123) 628-7890',
        address: 'Metropolis',
      },
    ];
  }
}
