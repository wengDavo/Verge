import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AchievmentComponent } from './achievment.component';

describe('AchievmentComponent', () => {
  let component: AchievmentComponent;
  let fixture: ComponentFixture<AchievmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AchievmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AchievmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
