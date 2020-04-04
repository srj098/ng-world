import { TestBed } from '@angular/core/testing';

import { CustomerReportDetailService } from './customer-report-detail.service';

describe('CustomerReportDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomerReportDetailService = TestBed.get(CustomerReportDetailService);
    expect(service).toBeTruthy();
  });
});
