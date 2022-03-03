/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrackService } from './crack.service';

describe('Service: Crack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CrackService]
    });
  });

  it('should ...', inject([CrackService], (service: CrackService) => {
    expect(service).toBeTruthy();
  }));
});
