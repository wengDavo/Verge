import { Routes } from '@angular/router';
import { authenticationGuard } from './core/gaurds/authentication.guard';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';


export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    title: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    title: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'properties',
    title: 'properties',
    loadChildren: () =>
      import('./modules/properties/properties.module').then(
        (m) => m.PropertiesModule
      ),
  },
  {
    path: 'property/:id',
    title: 'property',
    loadChildren: () =>
      import('./modules/property/property.module').then(
        (m) => m.PropertyModule
      ),
      canActivate:[authenticationGuard]
  },
  {
    path: 'services',
    title: 'services',
    loadChildren: () =>
      import('./modules/services/services.module').then(
        (m) => m.ServicesModule
      ),
  },
  {
    path: 'contact',
    title: 'contact',
    loadChildren: () =>
      import('./modules/contact/contact.module').then(
        (m) => m.ContactModule
      ),
  },
  { path: '**', component: PageNotFoundComponent },
];
