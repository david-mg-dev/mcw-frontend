import { TestBed } from '@angular/core/testing';

import { CyptoService } from './cypto.service';

describe('CyptoService', () => {
  let service: CyptoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CyptoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
