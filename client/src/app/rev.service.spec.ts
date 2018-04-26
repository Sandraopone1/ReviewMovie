import { TestBed, inject } from '@angular/core/testing';

import { RevService } from './rev.service';

describe('RevService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RevService]
    });
  });

  it('should be created', inject([RevService], (service: RevService) => {
    expect(service).toBeTruthy();
  }));
});
