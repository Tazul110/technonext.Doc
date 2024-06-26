import { TestBed } from '@angular/core/testing';

import { IupcService } from './iupc.service';

describe('IupcService', () => {
  let service: IupcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IupcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
