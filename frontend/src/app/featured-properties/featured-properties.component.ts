import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';
import { PropertyComponent } from '../property/property.component';
import { MatIconModule } from '@angular/material/icon';
import { propertyI } from '../property/property.interface';
import { UnitTitleComponent } from '../unit-title/unit-title.component';
import { PaginationNavigationComponent } from '../pagination-navigation/pagination-navigation.component';

import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-featured-properties',
  standalone: true,
  imports: [
    AbsractDesignSparklesComponent,
    MatIconModule,
    PropertyComponent,
    UnitTitleComponent,
    PaginationNavigationComponent,
    NgStyle,
    RouterModule
  ],
  template: `
    <section class="grid gap-4 md:px-10">
      <app-absract-design-sparkles />
      <app-unit-title
        [title]="title"
        [description]="description"
        [category]="category"
      />
      <!-- <article class="grid gap-2">
        <div
          class="grid gap-2 md:grid-cols-3"
          [ngStyle]="moveSlide()"
        >
          @for (item of propertiesData; track $index) {
          <app-property [propertyData]="item" />
          }
        </div>
        <app-pagination-navigation (prev)="prev($event)" (next)="next($event)" />
      </article> -->
      <article class="overflow-scroll space-x-1 no-scrollbar">
        <div class="flex gap-4">
          @for (item of propertiesData; track $index) {
          <app-property [propertyData]="item" />
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
export class FeaturedPropertiesComponent implements OnInit {
  title: string = 'Featured Properties';
  description: string =
    'Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Verge.';
  category: string = 'Properties';
  propertiesData!: Array<propertyI>;

  curSlide: number = 1;
  moveSlide = (): object => {
    return { transform: `translateX( -${this.curSlide * 100}%)` };
  };
  next = (e: string) => {
    this.curSlide === this.propertiesData.length - 1
      ? (this.curSlide = 0)
      : this.curSlide++;
  };
  prev = (e: string) => {
    this.curSlide === 0
      ? (this.curSlide = this.propertiesData.length - 1)
      : this.curSlide--;
  };

  ngOnInit(): void {
    this.propertiesData = [
      {
        img: '/assets/images/laptop.jpg',
        name: 'Rustic Retreat Cottage',
        description:
          'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
        bedRoom: 2,
        bathRoom: 3,
        type: 'Villa',
        price: '550,000',
      },
      {
        img: '/assets/images/laptop.jpg',
        name: 'Seaside Serenity Villa',
        description:
          'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
        bedRoom: 2,
        bathRoom: 3,
        type: 'Villa',
        price: '550,000',
      },
      {
        img: '/assets/images/laptop.jpg',
        name: 'Wen Villa',
        description:
          'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
        bedRoom: 2,
        bathRoom: 3,
        type: 'Villa',
        price: '550,000',
      },
      {
        img: '/assets/images/laptop.jpg',
        name: 'Wen Villa',
        description:
          'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
        bedRoom: 2,
        bathRoom: 3,
        type: 'Villa',
        price: '550,000',
      },
      {
        img: '/assets/images/laptop.jpg',
        name: 'Wen Villa',
        description:
          'An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community...',
        bedRoom: 2,
        bathRoom: 3,
        type: 'Villa',
        price: '550,000',
      },
    ];
  }
}
