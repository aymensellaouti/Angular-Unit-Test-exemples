import {inject, TestBed} from '@angular/core/testing';

import { FirstServiceService } from './first-service.service';

describe('FirstServiceService', () => {
  // let service;
  beforeEach(() => TestBed.configureTestingModule({
  }));
  // beforeEach(inject([FirstServiceService], serv => {
  //   service = serv;
  // }))

  it('should be created', inject([FirstServiceService], service => {
    // const service: FirstServiceService = TestBed.get(FirstServiceService);
    expect(service).toBeTruthy();
  }));
});
