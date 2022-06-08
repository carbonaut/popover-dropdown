import { TestBed } from '@angular/core/testing';

import { PopoverDropdownService } from './popover-dropdown.service';

describe('PopoverDropdownService', () => {
  let service: PopoverDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopoverDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
