import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquirySectionComponent } from './inquiry-section.component';

describe('InquirySectionComponent', () => {
  let component: InquirySectionComponent;
  let fixture: ComponentFixture<InquirySectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquirySectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquirySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
