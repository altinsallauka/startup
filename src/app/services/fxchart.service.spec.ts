import { TestBed } from '@angular/core/testing';

import { FxchartService } from './fxchart.service';

describe('FxchartService', () => {
  let service: FxchartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FxchartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
