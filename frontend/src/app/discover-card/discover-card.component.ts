import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { discoverCardI } from './discover-card.interface';

@Component({
  selector: 'app-discover-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <article class="p-6 border border-grey-15 grid gap-4 rounded-md">
      <div>
        <p class="font-medium text-xs">{{ data.name }}</p>
        <p class="font-semibold text-xl">
          {{ data.location }}
        </p>
        <p class="font-medium text-sm text-grey-60">
          {{ data.description }}
        </p>
      </div>
      <div class="text-xs grid gap-2">
        <p
          class="rounded-[28px] px-4 py-2 bg-grey-10 border border-grey-15 flex items-center w-fit gap-2"
        >
          <mat-icon>mail</mat-icon>{{ data.email }}
        </p>
        <div class="flex gap-2">
          <p
            class="rounded-[28px] px-4 py-2 bg-grey-10 border border-grey-15 flex items-center w-fit gap-2"
          >
            <mat-icon>phone</mat-icon>{{ data.phone }}
          </p>
          <p
            class="rounded-[28px] px-4 py-2 bg-grey-10 border border-grey-15 flex items-center w-fit gap-2"
          >
            <mat-icon>pin_drop</mat-icon>{{ data.address }}
          </p>
        </div>
      </div>
      <button class="px-5 py-3 bg-purple-60 rounded-lg w-full">
        Get Direction
      </button>
    </article>
  `,
  styles: ``,
})
export class DiscoverCardComponent {
  @Input() data!: discoverCardI;
}
