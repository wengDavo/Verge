import { Component, Input } from '@angular/core';
import { stepCardI } from './step-card.interface';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [],
  template: `
     <article class=" border-l border-grey-15 relative rounded-md">
      <p class="font-medium px-6 py-3">Step {{ data.num }}</p>
      <div class="absolute -left-7 blurred-box-purple-60 "></div>
      <div class="p-7 space-y-4 border border-grey-15 rounded-md">
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
