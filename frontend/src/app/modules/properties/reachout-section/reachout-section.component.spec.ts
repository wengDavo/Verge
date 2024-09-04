import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachoutSectionComponent } from './reachout-section.component';

describe('ReachoutSectionComponent', () => {
  let component: ReachoutSectionComponent;
  let fixture: ComponentFixture<ReachoutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachoutSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachoutSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
