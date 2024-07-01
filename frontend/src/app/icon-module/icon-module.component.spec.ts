import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconModuleComponent } from './icon-module.component';

describe('IconModuleComponent', () => {
  let component: IconModuleComponent;
  let fixture: ComponentFixture<IconModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconModuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
