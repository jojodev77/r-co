import { TestBed } from '@angular/core/testing';

import { InformationFormulaireService } from './information-formulaire.service';

describe('InformationFormulaireService', () => {
  let service: InformationFormulaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationFormulaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
