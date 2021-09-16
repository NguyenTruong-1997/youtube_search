import { TestBed } from '@angular/core/testing';

import { YtbService } from './ytb-service.service';

describe('YtbServiceService', () => {
  let service: YtbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
