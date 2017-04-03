import { TestBed, inject } from '@angular/core/testing';

import { RegistrationFirebaseServiceService } from './registration-firebase.service';

describe('RegistrationFirebaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistrationFirebaseServiceService]
    });
  });

  it('should ...', inject([RegistrationFirebaseServiceService], (service: RegistrationFirebaseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
