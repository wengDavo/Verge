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
      <article class="grid gap-2">
        <div class="grid md:grid-cols-3 gap-2">
          @for (item of testimonialsData; track $index) {
          <app-testimony [testimony]="item" />
          }
        </div>
        <app-pagination-navigation />
      </article>
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

  ngOnInit(): void {
    this.testimonialsData = [
      {
        rating: 5,
        title: 'Exceptional Service!',
        review: 'Our experience with Verge was outstanding.',
        userName: 'Wade Warren',
        userLocation: 'USA, CAlifornia',
      },
      {
        rating: 5,
        title: 'Exceptional Service!',
        review: 'Our experience with Verge was outstanding.',
        userName: 'Paul Wosetimi',
        userLocation: 'USA, CAlifornia',
      },
      {
        rating: 5,
        title: 'Exceptional Service!',
        review: 'Our experience with Verge was outstanding.',
        userName: 'Wade Warren',
        userLocation: 'USA, CAlifornia',
      },
    ];
  }
}
