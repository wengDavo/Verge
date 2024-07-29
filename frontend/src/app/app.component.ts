import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appName } from './app.config';
//
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { PropertiesPageComponent } from './properties-page/properties-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent, AboutPageComponent, PropertiesPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: appName, useValue:"Verge" },
  ],
})
export class AppComponent {}
