import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appName } from './app.config';
// Pages
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PropertiesPageComponent } from './properties-page/properties-page.component';
import { PropertyDetailPageComponent } from './property-detail-page/property-detail-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,

    HomePageComponent,
    AboutPageComponent,
    PropertiesPageComponent,
    PropertyDetailPageComponent,
    ServicesPageComponent,
    ContactPageComponent,
  ],
  templateUrl: './app.component.html',
  // template: ` <router-outlet></router-outlet> `,
  styleUrl: './app.component.css',
  providers: [{ provide: appName, useValue: 'Verge' }],
})
export class AppComponent {}
