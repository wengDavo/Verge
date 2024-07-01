import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonkhhkhyComponent } from './testimonkhhkhy.component';

describe('TestimonkhhkhyComponent', () => {
  let component: TestimonkhhkhyComponent;
  let fixture: ComponentFixture<TestimonkhhkhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonkhhkhyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestimonkhhkhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
