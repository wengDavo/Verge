import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyDescriptionComponent } from '../property-description/property-description.component';
import { PropertyGalleryComponent } from '../property-gallery/property-gallery.component';
import { PropertyFeaturesComponent } from '../property-features/property-features.component';

import { PropertyRoutingModule } from './property-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PropertyRoutingModule,
    // 
    PropertyDescriptionComponent,
    PropertyGalleryComponent,
    PropertyFeaturesComponent,
  ],
  exports:[
    PropertyDescriptionComponent,
    PropertyGalleryComponent,
    PropertyFeaturesComponent,
  ]
})
export class PropertyModule {}
