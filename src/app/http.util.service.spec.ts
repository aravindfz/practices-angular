import { TestBed, inject } from '@angular/core/testing';

import { Http.UtilService } from './http.util.service';

describe('Http.UtilService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Http.UtilService]
    });
  });

  it('should be created', inject([Http.UtilService], (service: Http.UtilService) => {
    expect(service).toBeTruthy();
  }));
});
