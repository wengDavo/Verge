import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesContainerComponent } from './values-container.component';

describe('ValuesContainerComponent', () => {
  let component: ValuesContainerComponent;
  let fixture: ComponentFixture<ValuesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValuesContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ValuesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
