import { TestBed } from '@angular/core/testing';

import { AlertifyService } from '../_services/alertify.service';

describe('AlertifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertifyService = TestBed.get(AlertifyService);
    expect(service).toBeTruthy();
  });
});
