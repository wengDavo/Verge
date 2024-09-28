import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

import { PropertyGalleryComponent } from '../property-gallery/property-gallery.component';
import { PropertyDescriptionComponent } from '../property-description/property-description.component';
import { PropertyFeaturesComponent } from '../property-features/property-features.component';
import { InquirySectionComponent } from '../inquiry-section/inquiry-section.component';
import { PricingSectionComponent } from '../pricing-section/pricing-section.component';
// 
import { SharedModule } from '../../../shared/shared.module';
import { PropertyService } from '../../../shared/services/property/property.service';
import { propertyI } from '../../../shared/services/property/property.interface';

@Component({
  selector: 'app-page',
  standalone: true,
  imports: [
    PropertyGalleryComponent,
    PropertyFeaturesComponent,
    PropertyDescriptionComponent,
    InquirySectionComponent,
    PricingSectionComponent,
    SharedModule
  ],
  template: `
     <app-banner />
     <app-navbar />
    <section class="p-2 grid gap-6 md:px-8">
      <app-property-gallery [obj]="property$"/>
      <article class="grid md:grid-cols-2 gap-2">
        <app-property-description />
        <app-property-features />
      </article>
      <app-inquiry-section />
      <app-pricing-section />
      <app-faqs />
    </section>
    <app-footer />
  `,
  styles: ``,
})
export class PageComponent implements OnInit{
  private router = inject(ActivatedRoute);
  private propertyService = inject(PropertyService)

  // might bring bugs
  roomId = this.router.snapshot.paramMap.get("id")
  property$!:propertyI

  ngOnInit(): void {
    this.propertyService.getProperty(this.roomId).subscribe((event)=>{
      this.property$ = event
    })
    
  }

}
