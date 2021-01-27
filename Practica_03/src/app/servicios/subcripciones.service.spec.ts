import { TestBed } from '@angular/core/testing';

import { SubcripcionesService } from './subcripciones.service';

describe('SubcripcionesService', () => {
  let service: SubcripcionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubcripcionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
