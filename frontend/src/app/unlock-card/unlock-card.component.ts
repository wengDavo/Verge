import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { unlockCardI } from './unlock-card.interface';

@Component({
  selector: 'app-unlock-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <article
      class="bg-white-90 dark:bg-grey-8 px-5 py-6 rounded-md grid gap-4 dark:border-grey-15 border md:p-2 text-abs-black dark:text-abs-white"
    >
      <div>
        <p class="flex items-center gap-2">
          <mat-icon>{{ data.icon }}</mat-icon
          ><span class="font-semibold text-lg">{{ data.title }}</span>
        </p>
      </div>
      <div class="text-xs text-grey-60">
        {{ data.message }}
      </div>
    </article>
  `,
  styles: ``,
})
export class UnlockCardComponent {
  @Input() data!: unlockCardI;
}
