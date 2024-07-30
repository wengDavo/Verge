import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlockPanelComponent } from './unlock-panel.component';

describe('UnlockPanelComponent', () => {
  let component: UnlockPanelComponent;
  let fixture: ComponentFixture<UnlockPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnlockPanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlockPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
