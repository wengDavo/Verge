import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-search-property-form',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <form action="" class="space-y-3 p-2 md:p-0 md:w-[90%] md:mx-auto ">
      <div class="flex outline outline-grey-10 pl-4 pr-2 py-1 gap-5 rounded-md border border-grey-15 ">
        <input type="search" name="" id="" class="grow bg-inherit placeholder:font-medium placeholder:text-grey-40 outline-none" placeholder="Search For A Property"/>
        <p class="bg-purple-60 px-3 py-3 rounded-lg grid place-content-center cursor-pointer"><mat-icon>search</mat-icon></p>
      </div>
      <article class="bg-grey-10 p-5 grid gap-5 md:flex">
        <div class="flex text-grey-60 border border-grey-15 bg-grey-8 p-3 rounded-lg items-center">
          <p><mat-icon class="">pin_drop</mat-icon></p>
          <label for="" class="mr-auto border-l border-grey-15 pl-2 ml-2 text-sm font-medium">Location</label>
          <select name="" id="" class="rounded-full bg-grey-10 text-xs px-1">
            <option selected value=""></option>
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
          </select>
        </div>
        <div class="flex text-grey-60 border border-grey-15 bg-grey-8 p-3 rounded-lg items-center">
          <p><mat-icon class="">apartment</mat-icon></p>
          <label for="" class="mr-auto border-l border-grey-15 pl-2 ml-2 text-sm font-medium">Property Type</label>
          <select name="" id="" class="rounded-full bg-grey-10 text-xs px-1">
            <option selected value=""></option>
            <option value="Abuja">Detached</option>
            <option value="Lagos">Bungalow</option>
          </select>
        </div>
        <div class="flex text-grey-60 border border-grey-15 bg-grey-8 p-3 rounded-lg items-center">
          <p><mat-icon class="">payments</mat-icon></p>
          <label for="" class="mr-auto border-l border-grey-15 pl-2 ml-2 text-sm font-medium">Pricing Range</label>
          <select name="" id="" class="rounded-full bg-grey-10 text-xs px-1">
            <option selected value=""></option>
            <option value="Abuja">1000</option>
            <option value="Lagos">500</option>
          </select>
        </div>
        <div class="flex text-grey-60 border border-grey-15 bg-grey-8 p-3 rounded-lg items-center">
          <p><mat-icon class="">deployed_code</mat-icon></p>
          <label for="" class="mr-auto border-l border-grey-15 pl-2 ml-2 text-sm font-medium">Property Size</label>
          <select name="" id="" class="rounded-full bg-grey-10 text-xs px-1">
            <option selected value=""></option>
            <option value="Abuja">500sqm</option>
            <option value="Lagos">1000sqm</option>
          </select>
        </div>
        <div class="flex text-grey-60 border border-grey-15 bg-grey-8 p-3 rounded-lg items-center">
          <p><mat-icon class="">event</mat-icon></p>
          <label for="" class="mr-auto border-l border-grey-15 pl-2 ml-2 text-sm font-medium">Build Year</label>
          <select name="" id="" class="rounded-full bg-grey-10 text-xs px-1">
            <option selected value=""></option>
            <option value="Abuja">2019</option>
            <option value="Lagos">2020</option>
          </select>
        </div>
      </article>
    </form>
  `,
  styles: ``,
})
export class SearchPropertyFormComponent {}
