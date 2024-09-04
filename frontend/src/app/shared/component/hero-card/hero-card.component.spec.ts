import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCardsComponent } from '../hero-cards/hero-cards.component';

describe('HeroCardsComponent', () => {
  let component: HeroCardsComponent;
  let fixture: ComponentFixture<HeroCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroCardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
