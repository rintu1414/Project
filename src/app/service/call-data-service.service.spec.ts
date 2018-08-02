import { TestBed, inject } from '@angular/core/testing';

import { CallDataServiceService } from './call-data-service.service';

describe('CallDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CallDataServiceService]
    });
  });

  it('should be created', inject([CallDataServiceService], (service: CallDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
