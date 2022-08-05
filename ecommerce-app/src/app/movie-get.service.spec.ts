import { TestBed } from '@angular/core/testing';

import { MovieGetService } from './movie-get.service';

describe('MovieGetService', () => {
  let service: MovieGetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieGetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
