import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reachout-form',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <form
      [formGroup]="reachoutForm"
      action=""
      class="border dark:border-grey-15 border-white-85 dark:bg-grey-10 bg-white-95 p-5 space-y-5 rounded-[6px] "
    >
      <fieldset class="md:grid md:grid-cols-4 gap-4">
        <div class="grid gap-2">
          <label for="" class="font-semibold">First Name</label>
          <input
            formControlName="firstName"
            type="text"
            name=""
            id=""
            placeholder="Enter First Name"
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85"
          />
        </div>
        <div class="grid gap-2">
          <label for="" class="font-semibold">Last Name</label>
          <input
            formControlName="lastName"
            type="text"
            name=""
            id=""
            placeholder="Enter Last Name"
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85"
          />
        </div>
        <div class="grid gap-2">
          <label for="" class="font-semibold">Email</label>
          <input
            formControlName="email"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85"
          />
        </div>
        <div class="grid gap-2">
          <label for="" class="font-semibold">Phone</label>
          <input
            formControlName="phone"
            type="text"
            name=""
            id=""
            placeholder="Enter Phone Number"
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85"
          />
        </div>
        <div class="grid gap-2">
          <label for="" class="font-semibold">Preffered Location</label>
          <select
            formControlName="location"
            name=""
            id=""
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 text-grey-40"
          >
            <option value="" disabled selected>Select Location</option>
            <option value="">Abuja</option>
            <option value="">Lagos</option>
          </select>
        </div>
        <div class="grid gap-2">
          <label for="" class="font-semibold">Property Type</label>
          <select
            formControlName="propertyType"
            name=""
            id=""
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 text-grey-40"
          >
            <option value="" disabled selected>Select Property Type</option>
            <option value="">Duplex</option>
            <option value="">Terrace</option>
          </select>
        </div>
        <div class="grid gap-2">
          <label for="" class="font-semibold">No. of Bedrooms</label>
          <select
            formControlName="bedrooms"
            name=""
            id=""
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 text-grey-40"
          >
            <option value="" disabled selected>Select no. of Bedrooms</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
        <div class="grid gap-2">
          <label for="" class="font-semibold">No. of Bathrooms</label>
          <select
            formControlName="bathrooms"
            name=""
            id=""
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 text-grey-40"
          >
            <option value="" disabled selected>Select no. of Bathrooms</option>
            <option value="">4</option>
            <option value="">5</option>
          </select>
        </div>
      </fieldset>
      <fieldset class="md:grid md:grid-cols-2 md:gap-4">
        <div class="grid gap-2 ">
          <label for="" class="font-semibold">Budget</label>
          <select
            formControlName="budget"
            name=""
            id=""
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 text-grey-40"
          >
            <option value="" disabled selected>Select Budget</option>
            <option value="">500</option>
            <option value="">1000</option>
          </select>
        </div>
        <div class="space-y-2">
          <label for="" class="font-semibold">Preferred Contact Method</label>
          <div class="md:flex md:gap-4 space-y-2">
            <div class="relative md:grow">
              <p
                class="absolute top-[55%] -translate-y-1/2 -translate-x-1/2 left-6"
              >
                <mat-icon>phone</mat-icon>
              </p>
              <input
                formControlName="phone"
                type="text"
                name=""
                id=""
                placeholder="Enter Your Number"
                class="rounded-md pl-10 py-4  placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 w-full"
              />
              <input
                type="radio"
                name="contact"
                id=""
                class="absolute top-[52%] right-2 -translate-y-1/2 -translate-x-1/2 "
              />
            </div>
            <div class="relative md:grow">
              <p
                class="absolute top-[55%] -translate-y-1/2 -translate-x-1/2 left-6"
              >
                <mat-icon>email</mat-icon>
              </p>
              <input
                formControlName="email"
                type="email"
                name=""
                id=""
                placeholder="Enter Your Email"
                class="rounded-md pl-10 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 w-full"
              />
              <input
                type="radio"
                name="contact"
                id=""
                class="absolute top-1/2 right-2 -translate-y-1/2 -translate-x-1/2 "
              />
            </div>
          </div>
        </div>
      </fieldset>
      <div class="grid gap-2">
        <label for="" class="font-semibold">Message</label>
        <textarea
          formControlName="message"
          name=""
          id=""
          placeholder="Enter Your Message Here"
          class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-90 border dark:border-grey-20 border-white-85 text-grey-40 resize-none"
        ></textarea>
      </div>
      <div class="md:flex">
        <div
          class="flex text-xs text-grey-60 space-x-2 md:font-medium md:grow items-center"
        >
          <input type="checkbox" name="" id="" formControlName="tnc" />
          <p>
            I agree with the Terms of Use and Privacy Policy
            <span class="text-red-600 enabled:text-purple-60">*</span>
          </p>
        </div>
        <button
          [disabled]="reachoutForm.invalid"
          type="submit"
          class="bg-purple-60 px-8 py-3 rounded-md w-full md:w-fit disabled:bg-opacity-30 mt-2"
        >
          Send Your Message
        </button>
      </div>
    </form>
  `,
  styles: `
    input, textarea{
      outline: none;
    }
  `,
})
export class ReachoutFormComponent implements OnInit {
  private fb = inject(FormBuilder);
  reachoutForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    location: [''],
    propertyType: [''],
    bedrooms: [''],
    bathrooms: [''],
    budget: [''],
    message: [''],
    tnc: ['', Validators.requiredTrue],
  });

  ngOnInit(): void {
  }
}
