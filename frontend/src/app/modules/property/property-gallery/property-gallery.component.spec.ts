import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyGalleryComponent } from './property-gallery.component';

describe('PropertyGalleryComponent', () => {
  let component: PropertyGalleryComponent;
  let fixture: ComponentFixture<PropertyGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
