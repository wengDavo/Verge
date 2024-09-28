import { Component, inject, OnInit } from '@angular/core';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';
import { UnitTitleComponent } from '../unit-title/unit-title.component';
import { PaginationNavigationComponent } from '../pagination-navigation/pagination-navigation.component';
import { FaqComponent } from './faq/faq.component';
import { faqI } from './faq/faq.interface';
import { FaqsService } from './faqs.service';
import { NgStyle } from '@angular/common';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [
    FaqComponent,
    AbsractDesignSparklesComponent,
    UnitTitleComponent,
    PaginationNavigationComponent,
    NgStyle,
    AsyncPipe
  ],
  template: `
    <section class="grid gap-4 md:px-10">
      <app-absract-design-sparkles />
      <app-unit-title
        [title]="title"
        [description]="description"
        [category]="category"
      />

      <article class="overflow-scroll space-x-1 no-scrollbar">
        <div class="flex gap-4">
          @for (item of faqsData$ | async; track $index) {
          <app-faq [faq]="item" />
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
export class FaqsComponent implements OnInit {
  title: string = 'Frequently Asked Questions';
  description: string = `Find answers to common questions about Estatein's services, property listings, and the real estate process. We're here to provide clarity and assist you every step of the way.`;
  category: string = "FAQ's";
  faqsData$!: Observable<any>;
  private faqService = inject(FaqsService);

  ngOnInit(): void {
    this.faqsData$ = this.faqService.getAllFaqs()
    // this.faqsData = [
    //   {
    //     question: 'How do I search for properties on Verge?',
    //     answer:
    //       'Learn how to use our user-friendly search tools find properties that match your criteria.',
    //   },
    //   {
    //     question: 'How do I search for properties on Verge?',
    //     answer:
    //       'Learn how to use our user-friendly search tools find properties that match your criteria.',
    //   },
    //   {
    //     question: 'How do I search for properties on Verge?',
    //     answer:
    //       'Learn how to use our user-friendly search tools find properties that match your criteria.',
    //   },
    // ];
  }
}
