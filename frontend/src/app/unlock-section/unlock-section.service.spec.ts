import { TestBed } from '@angular/core/testing';

import { UnlockSectionService } from './unlock-section.service';

describe('UnlockSectionService', () => {
  let service: UnlockSectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnlockSectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
