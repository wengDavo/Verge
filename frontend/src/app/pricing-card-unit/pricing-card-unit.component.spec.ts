import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingCardUnitComponent } from './pricing-card-unit.component';

describe('PricingCardUnitComponent', () => {
  let component: PricingCardUnitComponent;
  let fixture: ComponentFixture<PricingCardUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PricingCardUnitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PricingCardUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
