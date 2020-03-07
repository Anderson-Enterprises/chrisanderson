import { TestBed } from '@angular/core/testing';

import { AndersonService } from './anderson.service';

describe('AndersonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AndersonService = TestBed.get(AndersonService);
    expect(service).toBeTruthy();
  });
});
