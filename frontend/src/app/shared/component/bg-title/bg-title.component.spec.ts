import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTitleComponent } from './bg-title.component';

describe('BgTitleComponent', () => {
  let component: BgTitleComponent;
  let fixture: ComponentFixture<BgTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgTitleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
