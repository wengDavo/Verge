import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { DiscoverCardComponent } from '../discover-card/discover-card.component';
import { ExploreSectionComponent } from '../explore-section/explore-section.component';
import { discoverCardI } from '../discover-card/discover-card.interface';

@Component({
  selector: 'app-discover-section',
  standalone: true,
  imports: [SectionTitleComponent, DiscoverCardComponent, ExploreSectionComponent],
  template: `
    <section class="grid gap-8">
      <app-section-title [title]="title" [description]="description" />
      <article
        class="rounded-md p-3 bg-grey-10 border border-grey-15 flex gap-2 md:w-fit "
      >
        <p class="rounded-md px-5 py-3 hover:bg-grey-8 border border-grey-15">
          All
        </p>
        <p class="rounded-md px-5 py-3 hover:bg-grey-8 border border-grey-15">
          Regional
        </p>
        <p class="rounded-md px-5 py-3 hover:bg-grey-8 border border-grey-15">
          International
        </p>
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
