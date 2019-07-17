import { TestBed } from '@angular/core/testing';

import { Nav } from './nav.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Nav = TestBed.get(Nav);
    expect(service).toBeTruthy();
  });
});