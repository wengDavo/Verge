import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InquiryFormComponent } from './inquiry-form.component';

describe('InquiryFormComponent', () => {
  let component: InquiryFormComponent;
  let fixture: ComponentFixture<InquiryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InquiryFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InquiryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
