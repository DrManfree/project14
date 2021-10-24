import { TestBed } from '@angular/core/testing';

import { HttpCardService } from './http-card.service';

describe('HttpCardService', () => {
  let service: HttpCardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
