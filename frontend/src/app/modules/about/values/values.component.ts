import { Component } from '@angular/core';
import { ValueComponent } from '../value/value.component';
import { valueI } from '../value/value.interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-values',
  standalone: true,
  imports: [ValueComponent],
  template: ` <section
    class="p-6 grid gap-5 divide-y dark:divide-grey-15 border dark:border-grey-15 outline dark:outline-grey-10 rounded-xl md:grid md:grid-cols-2  divide-white-85 border-white-95 outline-white-90"
  >
    @for (item of valueData; track $index) {
    <app-value [value]="item" />
    }
  </section>`,
  styles: ``,
})
export class ValuesComponent implements OnInit {
  valueData!: Array<valueI>;

  ngOnInit(): void {
    this.valueData = [
      {
        icon: 'star',
        title: 'trust',
        description:
          'Trust is the cornerstone of every successful real estate transaction.',
      },
      {
        icon: 'school',
        title: 'excellence',
        description:
          'We set the bar high for ourselves. From the properties we list to the services we provide.',
      },
      {
        icon: 'group',
        title: 'client-centric',
        description:
          'Your dreams and needs are at the center of our universe. We listen, understand.',
      },
      {
        icon: 'star',
        title: 'our commitment',
        description:
          'We are dedicated to providing you with the highest level of service, professionalism',
      },
    ];
  }
}
