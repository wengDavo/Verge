import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [],
  template: `
    <form
      action=""
      class="border dark:border-grey-15 border-white-95 dark:bg-grey-10 bg-white-90 p-5 space-y-5 rounded-[6px] "
    >
      <fieldset class="grid md:grid-cols-3 gap-4">
        <div class="grid gap-2">
          <label for="" class="font-semibold">First Name</label>
          <input
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
          name=""
          id=""
          placeholder="Enter Your Message Here"
          class="rounded-md px-5 py-4 placeholder:text-grey-40 dark:bg-grey-15 bg-white-95 border dark:border-grey-20 border-white-97 text-grey-40 resize-none"
        ></textarea>
      </div>
      <div class="md:flex space-y-2">
        <div
          class="flex text-xs text-grey-60 space-x-2 md:font-medium md:grow items-center"
        >
          <input type="checkbox" name="" id="" />
          <p>I agree with the Terms of Use and Privacy Policy</p>
        </div>
        <button
          type="submit"
          class="bg-purple-60 px-8 py-3 rounded-md w-full md:w-fit"
        >
          Send Your Message
        </button>
      </div>
    </form>
  `,
  styles: ``,
})
export class ContactFormComponent {}
