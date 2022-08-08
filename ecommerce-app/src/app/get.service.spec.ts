import { TestBed } from '@angular/core/testing';
import { getService } from './get.service';
describe('MovieGetService', () => {
  let service: getService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
