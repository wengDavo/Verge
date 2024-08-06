import { Component, inject} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { APP_NAME } from '../app.config';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [MatIconModule],
  template: `
    @if(display){
    <article class="relative background">
      <p class="text-center text-abs-dark dark:text-abs-white">
        ✨Discover your dream property with {{ APP_NAME }} Learn More
      </p>
      <div
        class="absolute top-4 right-2 -translate-y-1/2 cursor-pointer grid place-content-center rounded-full transparentGrey"
        (click)="toggleBanner()"
      >
        <mat-icon class="text-white "> close </mat-icon>
      </div>
    </article>

    }
  `,
  styles: `
  .background{
    background-image: url("/assets/images/abstractDesign.svg");
    color: white;
    text-transform: capitalize;
    font-size: 12px;
    line-height: 1.5;
    padding: 30px 0px;
    }
    .transparentGrey{
       background-color: rgba(60, 60, 60, 0.6); 
    }
    `,
})
export class BannerComponent {
  public APP_NAME = inject(APP_NAME);
  display: boolean = true;
  toggleBanner = () => this.display = !this.display;
}
