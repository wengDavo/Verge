import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievmentsContainerComponent } from './achievments-container.component';

describe('AchievmentsContainerComponent', () => {
  let component: AchievmentsContainerComponent;
  let fixture: ComponentFixture<AchievmentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievmentsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievmentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
