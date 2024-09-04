import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-property-form',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <form
      action=""
      class="space-y-3 p-2 md:p-0 md:w-[90%] md:mx-auto"
      [formGroup]="searchPropertyForm"
    >
      <div
        class="flex outline dark:outline-grey-10 pl-4 pr-2 py-1 gap-5 rounded-md border dark:border-grey-15 border-white-85 outline-white-90 "
      >
        <input
          formControlName="searchBar"
          type="search"
          name=""
          id=""
          class="grow bg-inherit placeholder:font-medium placeholder:text-grey-40 outline-none"
          placeholder="Search For A Property"
        />
        <p
          class="bg-purple-60 px-3 py-3 rounded-lg grid place-content-center cursor-pointer"
        >
          <mat-icon>search</mat-icon>
        </p>
      </div>
      <article class="dark:bg-grey-10 bg-white-90 p-5 grid gap-5 md:flex">
        <div
          class="flex text-grey-60 border dark:border-grey-15 border-white-90 dark:bg-grey-8 bg-white-97 p-3 rounded-lg items-center"
        >
          <p><mat-icon class="">pin_drop</mat-icon></p>
          <label
            for=""
            class="mr-auto border-l dark:border-grey-15 border-white-90 pl-2 ml-2 text-sm font-medium"
            >Location</label
          >
          <select
            formControlName="location"
            name=""
            id=""
            class="rounded-full dark:bg-grey-10 bg-white-95 text-xs px-1"
          >
            <option selected value=""></option>
            <option value="Abuja">Abuja</option>
            <option value="Lagos">Lagos</option>
          </select>
        </div>
        <div
          class="flex text-grey-60 border dark:border-grey-15 border-white-90 dark:bg-grey-8 bg-white-97 p-3 rounded-lg items-center"
        >
          <p><mat-icon class="">apartment</mat-icon></p>
          <label
            for=""
            class="mr-auto border-l dark:border-grey-15 border-white-90 pl-2 ml-2 text-sm font-medium"
            >Property Type</label
          >
          <select
            formControlName="propertyType"
            name=""
            id=""
            class="rounded-full dark:bg-grey-10 bg-white-95 text-xs px-1"
          >
            <option selected value=""></option>
            <option value="Abuja">Detached</option>
            <option value="Lagos">Bungalow</option>
          </select>
        </div>
        <div
          class="flex text-grey-60 border dark:border-grey-15 border-white-90 dark:bg-grey-8 bg-white-97 p-3 rounded-lg items-center"
        >
          <p><mat-icon class="">payments</mat-icon></p>
          <label
            for=""
            class="mr-auto border-l dark:border-grey-15 border-white-90 pl-2 ml-2 text-sm font-medium"
            >Pricing Range</label
          >
          <select
            formControlName="princingRange"
            name=""
            id=""
            class="rounded-full dark:bg-grey-10 bg-white-95 text-xs px-1"
          >
            <option selected value=""></option>
            <option value="Abuja">1000</option>
            <option value="Lagos">500</option>
          </select>
        </div>
        <div
          class="flex text-grey-60 border dark:border-grey-15 border-white-90 dark:bg-grey-8 bg-white-97 p-3 rounded-lg items-center"
        >
          <p><mat-icon class="">square</mat-icon></p>
          <label
            for=""
            class="mr-auto border-l dark:border-grey-15 border-white-90 pl-2 ml-2 text-sm font-medium"
            >Property Size</label
          >
          <select
            formControlName="propertySize"
            name=""
            id=""
            class="rounded-full dark:bg-grey-10 bg-white-95 text-xs px-1"
          >
            <option selected value=""></option>
            <option value="Abuja">500sqm</option>
            <option value="Lagos">1000sqm</option>
          </select>
        </div>
        <div
          class="flex text-grey-60 border dark:border-grey-15 border-white-90 dark:bg-grey-8 bg-white-97 p-3 rounded-lg items-center"
        >
          <p><mat-icon class="">event</mat-icon></p>
          <label
            for=""
            class="mr-auto border-l dark:border-grey-15 border-white-90 pl-2 ml-2 text-sm font-medium"
            >Build Year</label
          >
          <select
            formControlName="buildYear"
            name=""
            id=""
            class="rounded-full dark:bg-grey-10 bg-white-95 text-xs px-1"
          >
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
export class SearchPropertyFormComponent {
  private fb = inject(FormBuilder);
  searchPropertyForm = this.fb.group({
    searchBar: [''],
    location: [''],
    propertyType: [''],
    princingRange: [''],
    propertySize: [''],
    buildYear: [''],
  });
}
