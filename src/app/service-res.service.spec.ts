import { TestBed } from '@angular/core/testing';

import { ServiceResService } from './service-res.service';

describe('ServiceResService', () => {
  let service: ServiceResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
