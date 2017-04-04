import { TestBed, inject } from '@angular/core/testing';

import { ProjectFirebaseService } from './project-firebase.service';

describe('RegistrationFirebaseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProjectFirebaseService]
    });
  });

  it('should ...', inject([ProjectFirebaseService], (service: ProjectFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
