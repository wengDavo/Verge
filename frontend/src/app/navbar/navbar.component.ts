import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Inject } from '@angular/core';
import { appName, themeConfig } from '../app.config';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule],
  providers: [
    { provide: themeConfig, useValue: localStorage.getItem('theme') },
  ],
  template: `
    <nav
      class="flex p-5 border-white-90 dark:border-grey-20 relative border-t border-b dark:bg-grey-10 items-center md:gap-8"
    >
      <figure class="flex gap-1">
        <img src="/assets/icons/logo.svg" alt="" class="h-7 w-7" />
        <figcaption class="self-center">{{ app_name }}</figcaption>
      </figure>
      <div class="self-center ml-auto md:order-3">
        <button (click)="changeTheme()">
          @if (globalTheme == "dark") {
          <mat-icon>light_mode</mat-icon>
          }@else {
          <mat-icon>dark_mode</mat-icon>
          }
        </button>
      </div>
      <div class="self-center ml-4 md:grow">
        <button (click)="toggleDropdown()" class="md:hidden">
          <mat-icon>menu</mat-icon>
        </button>
        <menu class="hidden md:flex md:justify-center md:gap-8">
          <li class="hover:bg-white-90 border-white-95 dark:hover:bg-grey-8 p-2 border dark:border-grey-15 cursor-pointer rounded-lg">Home</li>
          <li class="hover:bg-white-90 border-white-95 dark:hover:bg-grey-8 p-2 border dark:border-grey-15 cursor-pointer rounded-lg">About Us</li>
          <li class="hover:bg-white-90 border-white-95 dark:hover:bg-grey-8 p-2 border dark:border-grey-15 cursor-pointer rounded-lg">Properties</li>
          <li class="hover:bg-white-90 border-white-95 dark:hover:bg-grey-8 p-2 border dark:border-grey-15 cursor-pointer rounded-lg">Services</li>
          <li class="hover:bg-white-90 border-white-95 dark:hover:bg-grey-8 p-2 border dark:border-grey-15 cursor-pointer rounded-lg">Contact Us</li>
        </menu>
      </div>
      @if(dropdown){
      <div class="absolute bg-red-100 left-0 right-0 top-0 z-10">hey</div>
      }
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent {
  dropdown: boolean = false;
  toggleDropdown = () => (this.dropdown = !this.dropdown);

  constructor(
    @Inject(themeConfig) public globalTheme: string,
    @Inject(appName) public app_name: string
  ) {
    this.globalTheme = globalTheme;
    this.app_name = app_name;
  }
  changeTheme(): void {
    const theme: string =
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        this.globalTheme = 'dark';
        break;
      case 'light':
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        this.globalTheme = 'light';
        break;
      default:
        let prefTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light';
        document.documentElement.classList.add(prefTheme);
        localStorage.setItem('theme', prefTheme);
        this.globalTheme = prefTheme;
        break;
    }
  }
}
