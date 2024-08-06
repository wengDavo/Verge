import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { propertyI } from './property.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  template: `
    <article class="border border-white-85 dark:border-grey-20 p-6 grid gap-6 rounded-xl md:mr-1">
      <figure class="w-[310px] h-[210px] mx-auto">
        <img [src]="propertyData.img" alt="" class="w-full h-full rounded-xl" />
      </figure>
      <article class="grid gap-6">
        <div>
          <h4 class="font-semibold text-[18px]">{{ propertyData.name }}</h4>
          <p class="font-medium text-sm dark:text-grey-60 text-grey-30">
            {{ propertyData.description }}
            <span class="text-abs-white">Read More</span>
          </p>
        </div>
        <div class="grid grid-cols-2 gap-1">
          <div class="flex items-center">
            <mat-icon>bed</mat-icon>{{ propertyData.bedRoom }}-Bedroom
          </div>
          <div class="flex items-center">
            <mat-icon>bathtub</mat-icon>{{ propertyData.bathRoom }}-Bathroom
          </div>
          <div class="flex items-center">
            <mat-icon>villa</mat-icon>{{ propertyData.type }}
          </div>
        </div>
        <div class="flex text-sm justify-between">
          <div>
            <p class="font-medium text-grey-60 mb-1">Price</p>
            <p class="font-semibold text-[18px]">$ {{ propertyData.price }}</p>
          </div>
          <button class="text-abs-white bg-purple-60 px-5 py-[14px] rounded-lg">
            <a routerLink="/property">View Property Details</a>
          </button>
        </div>
      </article>
    </article>
  `,
  styles: ``,
})
export class PropertyComponent {
  @Input() propertyData!: propertyI;
}
