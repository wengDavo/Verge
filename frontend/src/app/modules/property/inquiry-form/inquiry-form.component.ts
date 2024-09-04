import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inquiry-form',
  standalone: true,
  imports: [MatIconModule, ReactiveFormsModule],
  template: `
    <form
      [formGroup]="inquiryForm"
      action=""
      class="border dark:border-grey-15 border-white-95 dark:bg-grey-10 bg-white-90 p-5 space-y-5 rounded-[6px] "
    >
      <fieldset class="grid md:grid-cols-2 gap-4">
        <div class="grid gap-2">
          <label for="" class="font-semibold">First Name</label>
          <input
            formControlName="firstName"
            type="text"
            name=""
            id=""
            placeholder="Enter First Name"
            class="rounded-md px-5 py-4 dark:placeholder:text-grey-40 placeholder:text-grey-60 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
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
            class="rounded-md px-5 py-4 dark:placeholder:text-grey-40 placeholder:text-grey-60 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
          />
        </div>
      </fieldset>
      <fieldset class="grid md:grid-cols-2 gap-4">
        <div class="grid gap-2">
          <label for="" class="font-semibold">Email</label>
          <input
            formControlName="email"
            type="email"
            name=""
            id=""
            placeholder="Enter Your Email"
            class="rounded-md px-5 py-4 dark:placeholder:text-grey-40 placeholder:text-grey-60 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
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
            class="rounded-md px-5 py-4 dark:placeholder:text-grey-40 placeholder:text-grey-60 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
          />
        </div>
      </fieldset>
      <div class="relative md:grow text-sm">
        <label for="" class="font-semibold">Selected Property</label>
        <p class="absolute top-[65%] -translate-y-1/2 -translate-x-1/2 right-0">
          <mat-icon>pin_drop</mat-icon>
        </p>
        <input
          type="text"
          name=""
          id=""
          placeholder="Enter Your Number"
          class="rounded-md px-2 py-4  dark:placeholder:text-grey-40 placeholder:text-grey-60 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97 w-full mt-2"
          [value]="propertyName"
          disabled
        />
      </div>
      <div class="grid gap-2">
        <label for="" class="font-semibold">Message</label>
        <textarea
          formControlName="message"
          name=""
          id=""
          placeholder="Enter Your Message Here"
          class="rounded-md px-5 py-4 dark:placeholder:text-grey-40 placeholder:text-grey-60 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97 text-grey-40 resize-none"
        ></textarea>
      </div>
      <div class="md:flex space-y-2">
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
          [disabled]="inquiryForm.invalid"
          type="submit"
          class="bg-purple-60 px-8 py-3 rounded-md w-full md:w-fit disabled:bg-opacity-30"
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
export class InquiryFormComponent {
  propertyName: string = 'Seaside Serenity Villa, Malibu, California';
  fb = inject(FormBuilder);
  inquiryForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    phone: [''],
    property: [''], // disbaled on the HTML try disabling here so the value will be passed to the object using .getRawValue()
    message: [''],
    tnc: ['', Validators.requiredTrue],
  });
}
