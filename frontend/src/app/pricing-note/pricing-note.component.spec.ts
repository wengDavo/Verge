import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingNoteComponent } from './pricing-note.component';

describe('PricingNoteComponent', () => {
  let component: PricingNoteComponent;
  let fixture: ComponentFixture<PricingNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingNoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
