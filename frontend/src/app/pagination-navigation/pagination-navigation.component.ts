import { Component, output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pagination-navigation',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <article
      class="border-t border-white-90 dark:border-grey-20 p-4 flex justify-between"
    >
      <button
        class=" bg-white-95 border border-white-90 dark:bg-grey-15 dark:border-grey-15 p-[8px] rounded-lg md:hidden"
      >
        View All Properties
      </button>
      <div class="flex justify-center items-center text-sm gap-1 md:ml-auto">
        <div
          class="rounded-full bg-white-95 border-white-90 dark:bg-grey-15 p-[4px] flex justify-center items-center border  dark:border-grey-20 cursor-pointer"
          (click)="prevClicked()"
        >
          <mat-icon class="dark:text-grey-60">west</mat-icon>
        </div>
        <p class="flex gap-[10px]">
          <span>01</span>
          <span class="text-grey-60">of</span>
          <span class="text-grey-60">60</span>
        </p>
        <div
          class="rounded-full bg-white-95 border-white-90 dark:bg-grey-15 p-[4px] flex justify-center items-center border  dark:border-grey-20 cursor-pointer"
          (click)="nextClicked()"
        >
          <mat-icon class="">east</mat-icon>
        </div>
      </div>
    </article>
  `,
  styles: ``,
})
export class PaginationNavigationComponent {
  prev = output<string>();
  next = output<string>();

  prevClicked = () => this.prev.emit('prev');
  nextClicked = () => this.next.emit('next');
}
