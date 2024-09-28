import { Component, Input, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { propertyI } from '../../../shared/services/property/property.interface';

@Component({
  selector: 'app-property-gallery',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="grid gap-4">
      <article class="grid gap-4 md:flex md:items-center ">
        <h3 class="font-semibold text-xl">{{ obj.name }}</h3>
        <div class="flex gap-1 text-sm md:grow">
          <p
            class="p-2 border dark:border-grey-15 border-white-85 rounded-md flex items-center"
          >
            <mat-icon>pin_drop</mat-icon>{{ obj.location }}
          </p>
          <p class="p-2 md:ml-auto md:grid">
            <span class="text-grey-60">Price</span
            ><span class="text-lg">$ {{ obj.price }}</span>
          </p>
        </div>
      </article>
      <figure
        class="p-5 grid gap-5 dark:bg-grey-10 bg-white-90 border dark:border-grey-15 border-white-95 rounded-lg place-content-center"
      >
        <div class="md:grid md:grid-cols-2 md:gap-4 md:order-2">
          <img
            src="/assets/images/propertyMain1.png"
            alt=""
            class="w-[485px] h-[407px]"
          />
          <img
            src="/assets/images/propertyMain2.png"
            alt=""
            class="hidden md:block w-[485px] h-[407px] "
          />
        </div>
        <div
          class="flex overflow-scroll gap-3 no-scrollbar h-16 dark:bg-grey-8 bg-white-85 border dark:border-grey-15 border-white-95 p-3 rounded-md md:order-1"
        >
          <img src="/assets/images/property1.png" alt="" />
          <img src="/assets/images/property2.png" alt="" />
          <img src="/assets/images/property3.png" alt="" />
          <img src="/assets/images/property4.png" alt="" />
        </div>
        <div
          class="flex dark:bg-grey-8 bg-white-85 p-2 rounded-[100px] items-center justify-between md:order-3 md:w-52 md:mx-auto"
        >
          <p
            class="p-2 dark:bg-grey-10 bg-white-90 border dark:border-grey-15 border-white-95 rounded-full grid place-content-center"
          >
            <mat-icon>west</mat-icon>
          </p>
          <div class="flex gap-[2px]">
            <div class="w-3 h-1 bg-purple-60 rounded-[60px]"></div>
            <div class="w-3 h-1 bg-grey-30 rounded-[60px]"></div>
            <div class="w-3 h-1 bg-grey-30 rounded-[60px]"></div>
            <div class="w-3 h-1 bg-grey-30 rounded-[60px]"></div>
            <div class="w-3 h-1 bg-grey-30 rounded-[60px]"></div>
            <div class="w-3 h-1 bg-grey-30 rounded-[60px]"></div>
          </div>
          <p
            class="p-2 dark:bg-grey-10 bg-white-90 border dark:border-grey-15 border-white-95 rounded-full grid place-content-center"
          >
            <mat-icon>east</mat-icon>
          </p>
        </div>
      </figure>
    </section>
  `,
  styles: `
  .no-scrollbar{
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .no-scrollbar::-webkit-scrollbar{
    display:none;
  }
  `,
})
export class PropertyGalleryComponent implements OnInit {
  @Input() obj!: propertyI;
  ngOnInit(): void {}
}
