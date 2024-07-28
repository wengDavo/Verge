import { Component, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../section-title/section-title.component';
import { AbsractDesignSparklesComponent } from '../absract-design-sparkles/absract-design-sparkles.component';
import { ClientCardComponent } from '../client-card/client-card.component';
import { clientCardI } from '../client-card/client-card.interface';
import { PaginationNavigationComponent } from '../pagination-navigation/pagination-navigation.component';

@Component({
  selector: 'app-client-section',
  standalone: true,
  imports: [
    SectionTitleComponent,
    AbsractDesignSparklesComponent,
    ClientCardComponent,
    PaginationNavigationComponent,
  ],
  template: ` <section class="grid gap-8">
    <app-absract-design-sparkles />
    <app-section-title [title]="title" [description]="description" />
    <div  class="md:grid md: grid-cols-2 md:gap-2">
      @for (item of clientCardData; track $index) {
      <app-client-card [data]="item" />

      }
    </div>
    <app-pagination-navigation />
  </section>`,
  styles: ``,
})
export class ClientSectionComponent implements OnInit {
  title: string = 'Our Valued Clients';
  description: string = `At Estatein, we have had the privilege of working with a diverse range of clients across various industries. Here are some of the clients we've had the pleasure of serving`;
  clientCardData!: Array<clientCardI>;

  ngOnInit(): void {
    this.clientCardData = [
      {
        date: '2019',
        companyName: 'ABC Corporation',
        review:
          "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
      },
      {
        date: '2019',
        companyName: 'ABC Corporation',
        review:
          "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
      },
    ];
  }
}
