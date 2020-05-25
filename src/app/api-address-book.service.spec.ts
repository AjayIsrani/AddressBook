import { TestBed } from '@angular/core/testing';

import { APIAddressBookService } from './api-address-book.service';

describe('APIAddressBookService', () => {
  let service: APIAddressBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APIAddressBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
