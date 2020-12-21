import { TestBed } from '@angular/core/testing';

import { TeamFormulaireService } from './team-formulaire.service';

describe('TeamFormulaireService', () => {
  let service: TeamFormulaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeamFormulaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
