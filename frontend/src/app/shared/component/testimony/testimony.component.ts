import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { testimonyI } from './testimony.interface';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <article
      class="border border-white-85 dark:border-grey-20 p-8 gap-7 grid rounded-lg"
    >
      <div class="flex gap-1">
        @for (item of [1, 2, 3, 4 , 5]; track $index) {
        <div
          class="bg-white-90 border-white-95 dark:bg-grey-10 rounded-full border dark:border-grey-30 flex items-center justify-center p-[2px]"
        >
          <mat-icon class="text-[#FFE500]">star</mat-icon>
        </div>
        }
      </div>
      <div class="grid gap-2">
        <h3 class="font-semibold">{{ testimony.title }}</h3>
        <p class="text-xs">
          {{ testimony.review }}
        </p>
      </div>
      <div class="flex gap-2">
        <div class="grid place-content-center w-12 dark:bg-grey-10 bg-white-90 rounded-full">
          <mat-icon class="text-abs-white">person</mat-icon>
        </div>
        <div>
          <p class="font-medium">{{ testimony.userName }}</p>
          <p class="font-medium text-sm text-grey-60">
            {{ testimony.userLocation }}
          </p>
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class TestimonyComponent {
  @Input() testimony!: testimonyI;
}
