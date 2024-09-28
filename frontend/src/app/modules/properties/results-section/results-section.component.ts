import { Component, inject, OnInit } from '@angular/core';
import { resultsCardI } from '../results-card/results-card.interface';
import { SectionTitleComponent } from '../../../shared/component/section-title/section-title.component';
import { ResultsCardComponent } from '../results-card/results-card.component';
import { PaginationNavigationComponent } from '../../../shared/component/pagination-navigation/pagination-navigation.component';
import { PropertyService } from '../../../shared/services/property/property.service';
import { Observable } from 'rxjs';
import { propertyI } from '../../../shared/services/property/property.interface';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-results-section',
  standalone: true,
  imports: [
    SectionTitleComponent,
    ResultsCardComponent,
    PaginationNavigationComponent,
    AsyncPipe
  ],
  template: `
    <section class="grid gap-8">
      <app-section-title [title]="title" [description]="description" />
      <article class="overflow-scroll space-x-1 no-scrollbar">
        <div class="flex gap-4">
          @for (item of resultsCardData$ | async; track $index) {
          <app-results-card [data]="item" />
          }
        </div>
      </article>
      <app-pagination-navigation />
    </section>
  `,
  styles: `
    .no-scrollbar{
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .no-scrollbar::-webkit-scrollbar{
      display:none;
    }
    `,
})
export class ResultsSectionComponent implements OnInit {
  title: string = 'Discover a World of Possibilities';
  description: string =
    'Our portfolio of properties is as diverse as your dreams. Explore the following categories to find the perfect property that resonates with your vision of home';
  // resultsCardData!: Array<resultsCardI>;
  resultsCardData$!: Observable<any>;
  private propertyService = inject(PropertyService);

  ngOnInit(): void {
    this.resultsCardData$ = this.propertyService.getPropertiesData()
    // this.resultsCardData = [
    //   {
    //     image_url: '/assets/images/laptop.jpg',
    //     location: 'Coastal Escapes - Where Waves Beckon',
    //     name: 'Seaside Serenity Villa',
    //     description:
    //       'Wake up to the soothing melody of waves. This beachfront villa offers',
    //     price: '1,250,000',
    //   },
    // ];
  }
}
