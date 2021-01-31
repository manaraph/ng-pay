import { TestBed } from '@angular/core/testing';

import { SwalMixinService } from './swal-mixin.service';

describe('SwalMixinService', () => {
  let service: SwalMixinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwalMixinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
