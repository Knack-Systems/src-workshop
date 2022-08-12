/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AscAuthserviceService } from './asc-authservice.service';

describe('Service: AscAuthservice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AscAuthserviceService]
    });
  });

  it('should ...', inject([AscAuthserviceService], (service: AscAuthserviceService) => {
    expect(service).toBeTruthy();
  }));
});
