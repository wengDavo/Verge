import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { testimonyI } from './testimony.interface';

@Component({
  selector: 'app-testimony',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <article
      class="border border-white-90 dark:border-grey-20 p-8 gap-7 grid rounded-lg w-screen"
    >
      <div class="flex gap-1">
        @for (item of [1, 2, 3, 4 , 5]; track $index) {
        <div
          class="bg-grey-10 rounded-full border border-grey-30 flex items-center justify-center p-[2px]"
        >
          <mat-icon class="text-[#FFE500]">star</mat-icon>
        </div>
        }
      </div>
      <div class="space-y-2">
        <h3 class="font-semibold">{{ testimony.title }}</h3>
        <p class="text-sm">
          {{ testimony.review }}
        </p>
      </div>
      <div class="flex gap-2">
        <div class="grid place-content-center w-12 dark:bg-grey-10 bg-white-95 rounded-full">
          <mat-icon class="text-white-90">person</mat-icon>
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
