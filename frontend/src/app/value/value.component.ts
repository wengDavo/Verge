import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { valueI } from './value.interface';



@Component({
  selector: 'app-value',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <figure class="pt-6">
      <div class="flex items-center p-1 gap-2">
        <p class="rounded-full border border-purple-60 p-2 grid place-content-center"><mat-icon class="text-purple-75">{{value.icon}}</mat-icon></p>
        <p class="capitalize">{{value.title}}</p>
      </div>
      <figcaption class="text-sm font-medium text-grey-60">
        {{value.description}}
      </figcaption>
    </figure>
  `,
  styles: ``,
})
export class ValueComponent {
  @Input() value!: valueI;}
