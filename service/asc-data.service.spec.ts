/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AscDataService } from './asc-data.service';

describe('Service: AscData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AscDataService]
    });
  });

  it('should ...', inject([AscDataService], (service: AscDataService) => {
    expect(service).toBeTruthy();
  }));
});
