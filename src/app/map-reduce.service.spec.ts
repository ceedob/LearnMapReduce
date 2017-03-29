import { TestBed, inject } from '@angular/core/testing';

import { MapReduceServiceService } from './map-reduce-service.service';

describe('MapReduceServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MapReduceServiceService]
    });
  });

  it('should ...', inject([MapReduceServiceService], (service: MapReduceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
