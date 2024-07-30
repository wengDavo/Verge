import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-property-features',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <section class="p-5 grid gap-5 rounded-lg border border-grey-15">
      <h3 class="font-semibold text-lg">Key Features and Amenities</h3>
      <div class="border-l-2 border-purple-60 bg-grey-10 p-2 flex gap-2 items-center bg-gradient-to-r from-grey-10 to-grey-8">
        <p class=""><mat-icon>electric_bolt</mat-icon></p>
        <p class="text-grey-60 text-sm">
          Expansive oceanfront terrace for outdoor entertaining
        </p>
      </div>
      <div class="border-l-2 border-purple-60 bg-grey-10 p-2 flex gap-2 items-center bg-gradient-to-r from-grey-10 to-grey-8">
        <p class=""><mat-icon>electric_bolt</mat-icon></p>
        <p class="text-grey-60 text-sm">
        Gourmet kitchen with top-of-the-line appliances
        </p>
      </div>
      <div class="border-l-2 border-purple-60 bg-grey-10 p-2 flex gap-2 items-center bg-gradient-to-r from-grey-10 to-grey-8">
        <p class=""><mat-icon>electric_bolt</mat-icon></p>
        <p class="text-grey-60 text-sm">
        Private beach access for morning strolls and sunset views
        </p>
      </div>
      <div class="border-l-2 border-purple-60 bg-grey-10 p-2 flex gap-2 items-center bg-gradient-to-r from-grey-10 to-grey-8">
        <p class=""><mat-icon>electric_bolt</mat-icon></p>
        <p class="text-grey-60 text-sm">
        Master suite with a spa-inspired bathroom and ocean-facing balcony
        </p>
      </div>
      <div class="border-l-2 border-purple-60 bg-grey-10 p-2 flex gap-2 items-center bg-gradient-to-r from-grey-10 to-grey-8">
        <p class=""><mat-icon>electric_bolt</mat-icon></p>
        <p class="text-grey-60 text-sm">
        Private garage and ample storage space
        </p>
      </div>
    </section>
  `,
  styles: ``,
})
export class PropertyFeaturesComponent {}
