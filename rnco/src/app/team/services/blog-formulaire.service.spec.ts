import { TestBed } from '@angular/core/testing';

import { BlogFormulaireService } from './blog-formulaire.service';

describe('BlogFormulaireService', () => {
  let service: BlogFormulaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogFormulaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
