import { Component, OnInit } from '@angular/core';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';
import { UnitTitleComponent } from '../unit-title/unit-title.component';
import { PaginationNavigationComponent } from '../pagination-navigation/pagination-navigation.component';
import { FaqComponent } from '../faq/faq.component';
import { faqI } from '../faq/faq.interface';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    FaqComponent,
    AbsractDesignSparklesComponent,
    UnitTitleComponent,
    PaginationNavigationComponent,
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
          class="grid md:grid-cols-3 gap-2"
          [ngStyle]="moveSlide()"
        >
          @for (item of faqsData; track $index) {
          <app-faq [faq]="item" />
          }
        </div>
      </article>
      <app-pagination-navigation (prev)="prev($event)" (next)="next($event)" />
    </section>
  `,
  styles: ``,
})
export class FaqsComponent implements OnInit {
  title: string = 'Frequently Asked Questions';
  description: string = `Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`;
  category: string = "FAQ's";
  faqsData!: Array<faqI>;

  curSlide: number = 0;
  moveSlide = (): object => {
    return { transform: `translateX( -${this.curSlide * 100}%)` };
  };
  next = (e: string) => {
    this.curSlide === this.faqsData.length - 1
      ? (this.curSlide = 0)
      : this.curSlide++;
  };
  prev = (e: string) => {
    this.curSlide === 0
      ? (this.curSlide = this.faqsData.length - 1)
      : this.curSlide--;
  };
  ngOnInit(): void {
    this.faqsData = [
      {
        question: 'How do I search for properties on Verge?',
        answer:
          'Learn how to use our user-friendly search tools find properties that match your criteria.',
      },
      {
        question: 'How do I search for properties on Verge?',
        answer:
          'Learn how to use our user-friendly search tools find properties that match your criteria.',
      },
      {
        question: 'How do I search for properties on Verge?',
        answer:
          'Learn how to use our user-friendly search tools find properties that match your criteria.',
      },
    ];
  }
}
