import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { clientCardI } from './client-card.interface';

@Component({
  selector: 'app-client-card',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <article class="p-6 space-y-7 border border-grey-20 outline outline-grey-15">
      <div class="space-y-2">
        <p class="font-medium text-sm text-grey-60">Since {{data.date}}</p>
        <p class="font-semibold">{{data.companyName}}</p>
        <button class="rounded-sm px-5 py-3 border border-grey-15 bg-grey-10 w-full">Visit Website</button>
      </div>
      <div class="grid divide-x text-sm grid-cols-2 divide-grey-60">
        <div>
          <p class="text-grey-60 text-xs flex items-center"><mat-icon>widgets</mat-icon>Domain</p>
          <p>Commercial Real</p>
          <p>Estate</p>
        </div>
        <div class="pl-4">
          <p class="text-grey-60 text-xs flex items-center"><mat-icon>flash_on</mat-icon>Domain</p>
          <p>Luxury Home</p>
          <p>Development</p>
        </div>
      </div>
      <div class="p-5 border border-grey-15 font-medium text-sm rounded-xl space-y-2">
        <p class="text-grey-60">What They Said 🤗</p>
        <p class="">{{data.review}}</p>
      </div>
    </article>
  `,
  styles: ``
})
export class ClientCardComponent {
  @Input() data!: clientCardI;
}
