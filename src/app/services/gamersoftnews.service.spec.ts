import { TestBed } from '@angular/core/testing';

import { GamersoftnewsService } from './gamersoftnews.service';

describe('GamersoftnewsService', () => {
  let service: GamersoftnewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamersoftnewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
