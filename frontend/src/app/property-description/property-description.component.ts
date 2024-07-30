import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-property-description',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="p-5 grid gap-5 rounded-lg border border-grey-15">
      <article>
        <h3 class="font-semibold text-lg">Description</h3>
        <p class="font-medium text-sm text-grey-60">
          Discover your own piece of paradise with the Seaside Serenity Villa. T
          With an open floor plan, breathtaking ocean views from every room, and
          direct access to a pristine sandy beach, this property is the epitome
          of coastal living.
        </p>
      </article>
      <article class="border-y border-grey-15 p-2 divide-x divide-grey-15 grid grid-cols-2">
        <div class="">
          <p class="flex text-grey-60 text-sm"><mat-icon>bed</mat-icon>Bedrooms</p>
          <p class="font-semibold text-lg">04</p>
        </div>
        <div class="pl-4">
          <p class="flex text-grey-60 text-sm"><mat-icon>bathtub</mat-icon>Bathrooms</p>
          <p class="font-semibold text-lg">04</p>
        </div>
      </article>
      <article>
        <p class="flex text-grey-60 text-sm"><mat-icon>crop</mat-icon>Area</p>
        <p>2,500 Square Feet</p>
      </article>
    </section>
  `,
  styles: ``,
})
export class PropertyDescriptionComponent {}
