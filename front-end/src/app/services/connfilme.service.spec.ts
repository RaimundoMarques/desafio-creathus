import { TestBed } from '@angular/core/testing';

import { ConnfilmeService } from './connfilme.service';

describe('ConnfilmeService', () => {
  let service: ConnfilmeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConnfilmeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
