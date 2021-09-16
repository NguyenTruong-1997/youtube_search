import { TestBed } from '@angular/core/testing';

import { YtbServiceService } from './ytb-service.service';

describe('YtbServiceService', () => {
  let service: YtbServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YtbServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
