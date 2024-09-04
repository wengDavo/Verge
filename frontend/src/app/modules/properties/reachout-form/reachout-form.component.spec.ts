import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReachoutFormComponent } from './reachout-form.component';

describe('ReachoutFormComponent', () => {
  let component: ReachoutFormComponent;
  let fixture: ComponentFixture<ReachoutFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReachoutFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReachoutFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
