import { Component } from '@angular/core';
import { BannerComponent } from '../banner/banner.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [BannerComponent, NavbarComponent],
  template: `
    <!-- <app-banner /> -->
    <!-- <app-navbar /> -->
    <section class="signika-negative text-center grid gap-6 p-4 place-content-center">
      <figure class="flex md:space-x-2">
        <p class="font-medium text-[#222222] text-[150px] rotate-[10deg]">4</p>
        <img src="assets/images/404-image.svg" alt="" />
        <p class="font-medium text-[#222222] text-[150px] -rotate-[10deg]">4</p>
      </figure>
      <p class="font-bold text-[50px] text-[#222222]">Boo! Page missing!</p>
      <p class="font-medium text-xl text-[#222222]">
        Whoops! This page must be a ghost - it's not here!
      </p>
      <button
        class=" px-14 py-4 bg-[#222222] font-bold text-lg rounded-[100px] md:w-fit md:mx-auto"
      >
        Find Shelter
      </button>
    </section>
  `,
  styles: `
  .signika-negative{
    font-family: "Signika Negative", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  `,
})
export class PageNotFoundComponent {}
