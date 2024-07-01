import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div
      class="bg-white-90 dark:bg-grey-10 text-center px-5 py-6 rounded-[10px] grid gap-4 dark:border-grey-20 border md:p-2 text-abs-black dark:text-abs-white"
    >
      <figure class="rounded-[10px] flex justify-center items-center relative">
        <div
          class="bg-grey-8 p-2 rounded-full outline border-purple-75 border outline-grey-8"
        >
          <img [src]="imagePath" alt="" />
        </div>
        <div class="absolute right-4 top-0 md:right-20">
          <mat-icon class="text-grey-30">north_east</mat-icon>
        </div>
      </figure>
      <p class="text-xs">{{ message }}</p>
    </div>
  `,
  styles: ``,
})
export class HeroCardComponent {
  @Input() message: string = '';
  @Input() imagePath: string = '';
}
