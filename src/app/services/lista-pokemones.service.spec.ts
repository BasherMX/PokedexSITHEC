import { TestBed } from '@angular/core/testing';

import { ListaPokemonesService } from './lista-pokemones.service';

describe('ListaPokemonesService', () => {
  let service: ListaPokemonesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaPokemonesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
