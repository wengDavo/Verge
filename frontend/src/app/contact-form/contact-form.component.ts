import { Component, inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form
      [formGroup]="contactForm"
      (ngSubmit)="submit()"
      class="border dark:border-grey-15 border-white-95 dark:bg-grey-10 bg-white-90 p-5 space-y-5 rounded-[6px] outline-none *:input:outline-none"
    >
      <fieldset class="grid md:grid-cols-3 gap-4">
        <div class="grid gap-2">
          @if ( contactForm.get('firstName')?.hasError('required') &&
          contactForm.dirty) {
          <i class="text-xs">this field is required</i>
          }
          <label for="" class="font-semibold">First Name*</label>
          <input
            formControlName="firstName"
            type="text"
            name=""
            id=""
            placeholder="Enter First Name"
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
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
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
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
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
          />
        </div>
      </fieldset>
      <fieldset class="grid md:grid-cols-3 gap-4">
        <div class="grid gap-2">
          <label for="" class="font-semibold">Phone</label>
          <input
            formControlName="phoneNumber"
            type="text"
            name=""
            id=""
            placeholder="Enter Phone Number"
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97"
          />
        </div>
        <div class="grid gap-2 ">
          <label for="" class="font-semibold">Inquiry type</label>
          <select
            formControlName="inquiryType"
            name=""
            id=""
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97 text-grey-40"
          >
            <option value="" disabled selected>Select Inquiry Type</option>
            <option value="">500</option>
            <option value="">1000</option>
          </select>
        </div>
        <div class="grid gap-2 ">
          <label for="" class="font-semibold">How Did You Hear About Us?</label>
          <select
            formControlName="referred"
            name=""
            id=""
            class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97 text-grey-40"
          >
            <option value="" disabled selected>Select</option>
            <option value="">Social Media</option>
            <option value="">Google</option>
          </select>
        </div>
      </fieldset>
      <div class="grid gap-2">
        <label for="" class="font-semibold">Message</label>
        <textarea
          formControlName="message"
          name=""
          id=""
          placeholder="Enter Your Message Here"
          class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97 text-grey-40 resize-none"
        ></textarea>
      </div>
      <div class="md:flex space-y-2">
        <div
          class="flex text-xs text-grey-60 space-x-2 md:font-medium md:grow items-center "
        >
          <input type="checkbox" name="" id="" formControlName="tnc" />
          <p>
            I agree with the Terms of Use and Privacy Policy
            <span class="text-red-600 enabled:text-purple-60">*</span>
          </p>
        </div>
        <button
          type="submit"
          class="bg-purple-60 px-8 py-3 rounded-md w-full md:w-fit disabled:bg-opacity-30"
          [disabled]="contactForm.invalid"
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
export class ContactFormComponent implements OnInit {
  fb = inject(FormBuilder);
  contactForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: [''],
    email: ['', []],
    phoneNumber: [''],
    inquiryType: [''],
    referred: [''],
    message: [''],
    tnc: ['', [Validators.requiredTrue]],
  });

  submit() {
    // console.log(this.contactForm.getRawValue());
    // console.log(this.contactForm.invalid);
    this.contactForm.reset();
  }

  ngOnInit(): void {
    // this.contactForm.valueChanges.subscribe((e)=> console.log(e))
    // this.contactForm
    //   .get('firstName')
    //   ?.valueChanges.subscribe((e) => console.log(e));
  }
}
