import { Component, Input } from '@angular/core';
import { stepCardI } from './step-card.interface';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [],
  template: `
     <article class=" border-l dark:border-grey-10 relative rounded-md border-white-85">
      <p class="font-medium px-6 py-3">Step {{ data.num }}</p>
      <div class="absolute -left-7 blurred-box-purple-60 "></div>
      <div class="p-7 space-y-4 border dark:border-grey-15 rounded-md border-white-90">
        <p>{{ data.title }}</p>
        <p class="text-sm font-medium text-grey-60 ">
          {{ data.description }}
        </p>
      </div>
    </article>
  `,
  styles: `
    .blurred-box-purple-60{
      box-shadow: 55px 15px 30px 15px #703BF7;
    }
  `
})
export class StepCardComponent {
  @Input() data!: stepCardI;
}
