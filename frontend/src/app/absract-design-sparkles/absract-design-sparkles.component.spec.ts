import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsractDesignSparklesComponent } from './absract-design-sparkles.component';

describe('AbsractDesignSparklesComponent', () => {
  let component: AbsractDesignSparklesComponent;
  let fixture: ComponentFixture<AbsractDesignSparklesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbsractDesignSparklesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbsractDesignSparklesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
