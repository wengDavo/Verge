import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PropertiesPageComponent } from './properties-page/properties-page.component';
import { PropertyDetailPageComponent } from './property-detail-page/property-detail-page.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent, title: 'Home' },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'about', component: AboutPageComponent, title: 'About' },
  {
    path: 'properties',
    component: PropertiesPageComponent,
    title: 'Properties',
  },

  { path: 'property/:id', component: PropertyDetailPageComponent, title: 'Property' },
  { path: 'services', component: ServicesPageComponent, title: 'Services' },
  { path: 'contact', component: ContactPageComponent, title: 'Contact' },
  { path: '**', component: PageNotFoundComponent },
];
