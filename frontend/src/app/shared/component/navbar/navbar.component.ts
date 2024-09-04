import { Component, inject, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { THEME_CONFIG_TOKEN } from '../../../core/services/theme.config';
import { APP_NAME_TOKEN } from '../../../core/services/app_name.config';
import { RouterLinkActive, RouterLink } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { navBarLinkI } from './navbarlink.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatIconModule, RouterLink, RouterLinkActive],
  animations: [
    trigger('OpenClosed', [
      state(
        'open',
        style({
          transform: 'translateX(0)',
        })
      ),
      state(
        'closed',
        style({
          transform: 'translateX(100%)',
        })
      ),
      transition('closed <=> open', animate('0.4s 0s ease-in-out')),
    ]),
  ],
  template: `
    <nav
      class="flex p-5 border-white-85 dark:border-grey-20 relative border-t border-b dark:bg-grey-10 items-center md:gap-8 "
    >
      <a routerLink="/home" class="flex gap-1">
        <img src="/assets/icons/logo.svg" alt="" class="h-7 w-7" />
        <figcaption class="self-center">{{ APP_NAME }}</figcaption>
      </a>
      <div class="self-center ml-auto md:order-3">
        <button (click)="changeTheme()">
          @if (THEME_CONFIG == "dark") {
          <mat-icon>light_mode</mat-icon>
          }@else {
          <mat-icon>dark_mode</mat-icon>
          }
        </button>
      </div>
      <div class="self-center ml-4 md:grow">
        <button (click)="toggleMenu()" class="md:hidden">
          <mat-icon>menu</mat-icon>
        </button>
        <menu class="hidden md:flex md:justify-center md:gap-8">
          @for (link of links; track $index) {
          <li
            class="hover:bg-white-90 border-white-90 dark:hover:bg-grey-8 p-2 border dark:border-grey-15 cursor-pointer rounded-lg capitalize"
          >
            <a [routerLink]="link.url">{{ link.name }}</a>
          </li>
          }
        </menu>
      </div>
      <!-- mobile -->
      <!-- remove the if (menu){} block for the transition to work -->
      <!-- but if you remove it a bug is introduced where the mobile menu is visible for a split second before it then become invisble before you toggle it -->
      <!-- @if(menu){ -->
      <div
        class="fixed bg-white-85 dark:bg-grey-15 z-30 right-0 bottom-0 top-0 w-1/2 p-3 md:hidden"
        [@OpenClosed]="menu ? 'open' : 'closed'"
      >
        <button (click)="toggleMenu()" class="md:hidden absolute right-2">
          <mat-icon>close</mat-icon>
        </button>
        <menu class="grid gap-6 mt-10">
          @for (link of links; track $index) {
          <li class="capitalize">
            <a [routerLink]="link.url">{{ link.name }}</a>
          </li>
          }
        </menu>
      </div>
      <!-- } -->
      <!-- mobile -->
    </nav>
  `,
  styles: ``,
})
export class NavbarComponent implements OnInit {
  public APP_NAME = inject(APP_NAME_TOKEN);
  public THEME_CONFIG = inject(THEME_CONFIG_TOKEN);

  menu: boolean = false;
  toggleMenu = () => (this.menu = !this.menu);

  links!: Array<navBarLinkI>;
  ngOnInit(): void {
    this.links = [
      { name: 'about', url: '/about' },
      { name: 'properties', url: '/properties' },
      { name: 'services', url: '/services' },
      { name: 'contact', url: '/contact' },
    ];
  }

  changeTheme(): void {
    const theme: string =
      localStorage.getItem('theme') === 'dark' ? 'light' : 'dark';
    switch (theme) {
      case 'dark':
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        this.THEME_CONFIG = 'dark';
        break;
      case 'light':
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        this.THEME_CONFIG = 'light';
        break;
      default:
        let prefTheme = window.matchMedia('(prefers-color-scheme: dark)')
          .matches
          ? 'dark'
          : 'light';
        document.documentElement.classList.add(prefTheme);
        localStorage.setItem('theme', prefTheme);
        this.THEME_CONFIG = prefTheme;
        break;
    }
  }
}
