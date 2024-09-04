import { Component, Input } from '@angular/core';
import { achievmentI } from './achievment.interface';

@Component({
  selector: 'app-achievment',
  standalone: true,
  imports: [],
  template: `
    <article class="p-7 grid gap-4 border dark:border-grey-20 rounded-xl outline dark:outline-grey-10 border-white-95 outline-white-90">
      <p class="font-semibold text-lg">{{ data.title }}</p>
      <p class="font-medium text-sm text-grey-60">{{ data.description }}</p>
    </article>
  `,
  styles: ``,
})
export class AchievmentComponent{
  @Input() data!: achievmentI;
}
