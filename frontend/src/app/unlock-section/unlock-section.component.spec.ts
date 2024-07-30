import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockSectionComponent } from './unlock-section.component';

describe('UnlockSectionComponent', () => {
  let component: UnlockSectionComponent;
  let fixture: ComponentFixture<UnlockSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
