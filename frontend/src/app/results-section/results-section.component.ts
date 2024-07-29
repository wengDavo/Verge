import { Component, OnInit } from '@angular/core';
import { resultsCardI } from '../results-card/results-card.interface';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { ResultsCardComponent } from '../results-card/results-card.component';
import { PaginationNavigationComponent } from '../pagination-navigation/pagination-navigation.component';

@Component({
  selector: 'app-results-section',
  standalone: true,
  imports: [
    SectionTitleComponent,
    ResultsCardComponent,
    PaginationNavigationComponent,
  ],
  template: `
    <section class="grid gap-8">
      <app-section-title [title]="title" [description]="description" />
      <article class="md:grid md:grid-cols-3">
        @for (item of resultsCardData; track $index) {
        <app-results-card [data]="item" />
        }
      </article>
      <app-pagination-navigation />
    </section>
  `,
  styles: ``,
})
export class ResultsSectionComponent implements OnInit {
  title: string = 'Discover a World of Possibilities';
  description: string =
    'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home';
  resultsCardData!: Array<resultsCardI>;

  ngOnInit(): void {
    this.resultsCardData = [
      {
        img: '/assets/images/laptop.jpg',
        location: 'Coastal Escapes - Where Waves Beckon',
        name: 'Seaside Serenity Villa',
        description:
          'Wake up to the soothing melody of waves. This beachfront villa offers',
        price: '1,250,000',
      },
    ];
  }
}
