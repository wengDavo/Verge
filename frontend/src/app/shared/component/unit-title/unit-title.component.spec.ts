import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTitleComponent } from './unit-title.component';

describe('UnitTitleComponent', () => {
  let component: UnitTitleComponent;
  let fixture: ComponentFixture<UnitTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnitTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnitTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
