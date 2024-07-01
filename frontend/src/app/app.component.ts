import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { appName } from './app.config';
//
import { HomePageComponent } from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    { provide: appName, useValue:"Verge" },
  ],
})
export class AppComponent {}
