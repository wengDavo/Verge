import { Component } from '@angular/core';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';
import { UnitTitleComponent } from '../unit-title/unit-title.component';
import { PaginationNavigationComponent } from '../pagination-navigation/pagination-navigation.component';
import { TestimonyComponent } from '../testimony/testimony.component';
import { testimonyI } from '../testimony/testimony.interface';
import { OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [
    AbsractDesignSparklesComponent,
    UnitTitleComponent,
    PaginationNavigationComponent,
    TestimonyComponent,
    NgStyle,
  ],
  template: `
    <section class="grid gap-4 md:px-10">
      <app-absract-design-sparkles />
      <app-unit-title
        [title]="title"
        [description]="description"
        [category]="category"
      />
      <article class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          [ngStyle]="moveSlide()"
        >
          @for (item of testimonialsData; track $index) {
          <app-testimony [testimony]="item" />
          }
        </div>
      </article>
      <app-pagination-navigation (prev)="prev($event)" (next)="next($event)" />
    </section>
  `,
  styles: ``,
})
export class TestimonialsComponent implements OnInit {
  title: string = 'What Our Clients Say';
  description: string =
    'Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.';
  category: string = 'Testomonies';
  testimonialsData!: Array<testimonyI>;

  curSlide: number = 0;
  moveSlide = (): object => {
    return { transform: `translateX( -${this.curSlide * 100}%)` };
  };
  next = (e: string) => {
    this.curSlide === this.testimonialsData.length - 1
      ? (this.curSlide = 0)
      : this.curSlide++;
  };
  prev = (e: string) => {
    this.curSlide === 0
      ? (this.curSlide = this.testimonialsData.length - 1)
      : this.curSlide--;
  };
  ngOnInit(): void {
    this.testimonialsData = [
      {
        rating: 5,
        title: 'Exceptional Service!',
        review:
          "Our experience with Verge was outstanding. Their team's dedicationand professionalism made finding our dream home a breeze. Highly recommended!",
        userName: 'Wade Warren',
        userLocation: 'USA, CAlifornia',
      },
      {
        rating: 5,
        title: 'Exceptional Service!',
        review:
          "Our experience with Verge was outstanding. Their team's dedicationand professionalism made finding our dream home a breeze. Highly recommended!",
        userName: 'Paul Wosetimi',
        userLocation: 'USA, CAlifornia',
      },
      {
        rating: 5,
        title: 'Golden Nwosu!',
        review:
          "Our experience with Verge was outstanding. Their team's dedicationand professionalism made finding our dream home a breeze. Highly recommended!",
        userName: 'Wade Warren',
        userLocation: 'USA, CAlifornia',
      },
    ];
  }
}
