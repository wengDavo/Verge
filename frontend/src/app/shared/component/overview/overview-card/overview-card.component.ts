import { Component, Input } from '@angular/core';
import { overviewCardI } from './overview-card.interface';
@Component({
  selector: 'app-overview-card',
  standalone: true,
  imports: [],
  template: `
    <div class="grid gap-2">
      <p class="font-medium text-grey-60 pb-2 pt-4">{{ overview.title }}</p>
      @for (item of overview.items; track $index) {
      <p class="text-sm">{{ item }}</p>
      }
    </div>
  `,
  styles: ``,
})
export class OverviewCardComponent {
  @Input() overview!: overviewCardI;
}
