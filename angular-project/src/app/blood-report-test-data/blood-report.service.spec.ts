import { TestBed } from '@angular/core/testing';

import { BloodReportService } from './blood-report.service';

describe('CustomerDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BloodReportService = TestBed.get(BloodReportService);
    expect(service).toBeTruthy();
  });
});
