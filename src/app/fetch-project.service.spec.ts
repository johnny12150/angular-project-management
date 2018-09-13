import {TestBed, inject} from '@angular/core/testing';

import {FetchProjectService} from './fetch-project.service';

describe('FetchProjectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FetchProjectService]
    });
  });

  it('should be created', inject([FetchProjectService], (service: FetchProjectService) => {
    expect(service).toBeTruthy();
  }));
});
