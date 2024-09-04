import { Component, OnInit, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { PropertyComponent } from '../../property/property/property.component';

import { propertyI } from '../../../shared/services/property/property.interface';
import { AbsractDesignSparklesComponent } from '../../../shared/component/absract-design-sparkles/absract-design-sparkles.component';
import { PropertyService } from '../../../shared/services/property/property.service';
import { UnitTitleComponent } from '../../../shared/component/unit-title/unit-title.component';
import { PaginationNavigationComponent } from '../../../shared/component/pagination-navigation/pagination-navigation.component';

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
    RouterModule,
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

  propertyService = inject(PropertyService);
  propertiesData: Array<propertyI> = this.propertyService.getPropertiesData();

  // curSlide: number = 1;
  // moveSlide = (): object => {
  //   return { transform: `translateX( -${this.curSlide * 100}%)` };
  // };
  // next = (e: string) => {
  //   this.curSlide === this.propertiesData.length - 1
  //     ? (this.curSlide = 0)
  //     : this.curSlide++;
  // };
  // prev = (e: string) => {
  //   this.curSlide === 0
  //     ? (this.curSlide = this.propertiesData.length - 1)
  //     : this.curSlide--;
  // };

  ngOnInit(): void {}
}
