import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPropertyFormComponent } from './search-property-form.component';

describe('SearchPropertyFormComponent', () => {
  let component: SearchPropertyFormComponent;
  let fixture: ComponentFixture<SearchPropertyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchPropertyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchPropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
