import { TestBed } from '@angular/core/testing';

import { LocsService } from './locs.service';

describe('LocsService', () => {
  let service: LocsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
