import { Component, OnInit } from '@angular/core';
import { AchievmentComponent } from '../achievment/achievment.component';
import { achievmentI } from '../achievment/achievment.interface';

@Component({
  selector: 'app-achievments',
  standalone: true,
  imports: [AchievmentComponent],
  template: ` <section class="grid gap-4 md:grid-cols-3">
    @for (item of achievmentData; track $index) {
    <app-achievment [data]="item" />
    }
  </section>`,
  styles: ``,
})
export class AchievmentsComponent implements OnInit {
  achievmentData!: Array<achievmentI>;
  ngOnInit(): void {
    this.achievmentData = [
      {
        title: '3+ Years of Excellence',
        description:
          "With over 3 years in the industry, we've amassed a wealth of knowledge and experience. We are good at what we do",
      },
      {
        title: 'Happy Clients',
        description:
          'Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.',
      },
      {
        title: 'Industry Recognition',
        description:
          "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
      },
    ];
  }
}
