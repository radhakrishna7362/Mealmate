import { TestBed } from '@angular/core/testing';

import { KitchentoolsService } from './kitchentools.service';

describe('KitchentoolsService', () => {
  let service: KitchentoolsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KitchentoolsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
