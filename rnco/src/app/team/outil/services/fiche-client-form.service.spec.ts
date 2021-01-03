import { TestBed } from '@angular/core/testing';

import { FicheClientFormService } from './fiche-client-form.service';

describe('FicheClientFormService', () => {
  let service: FicheClientFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FicheClientFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
