import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCardComponent } from './results-card.component';

describe('ResultsCardComponent', () => {
  let component: ResultsCardComponent;
  let fixture: ComponentFixture<ResultsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
