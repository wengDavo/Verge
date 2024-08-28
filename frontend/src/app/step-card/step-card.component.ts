import { Component, Input } from '@angular/core';
import { stepCardI } from './step-card.interface';

@Component({
  selector: 'app-step-card',
  standalone: true,
  imports: [],
  template: `
    <article
      class=" border-l dark:border-grey-10 relative rounded-md border-white-85 z-10"
    >
      <p class="font-medium px-6 py-3">Step {{ data.num }}</p>
      <div class="absolute -left-7"></div>
      <div
        class="card p-7 space-y-4 border dark:border-grey-15 rounded-md border-white-90 dark:bg-abs-dark bg-abs-white"
      >
        <p>{{ data.title }}</p>
        <p class="text-sm font-medium text-grey-60 ">
          {{ data.description }}
        </p>
      </div>
    </article>
  `,
  styles: `
    .card{
      position: relative; 
      }
      @property --angle{
        syntax: "<angle>";
        initial-value: 293deg;
        inherits: false;
      }
    .card::after, .card::before{
      content: '';
      position: absolute;
      height: 104%;
      width: 102%;
      background-image: conic-gradient(from var(--angle), transparent 60%, #703BF7);
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      z-index: -1;
      border-radius: 6px;
      animation: 20s spin linear infinite;    
    }
    .card::before{
      filter: blur(0.5rem);
      opacity: 1.0;
    }
    @keyframes spin{
      from{
        --angle: 0deg;
      }
      to{
        --angle: 360deg;
      }
    }
  `,
})
export class StepCardComponent {
  @Input() data!: stepCardI;
}
