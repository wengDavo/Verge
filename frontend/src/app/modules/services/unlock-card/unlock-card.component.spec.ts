import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockCardComponent } from './unlock-card.component';

describe('UnlockCardComponent', () => {
  let component: UnlockCardComponent;
  let fixture: ComponentFixture<UnlockCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
