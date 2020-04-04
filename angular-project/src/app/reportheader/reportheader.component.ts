import { Component, OnInit } from '@angular/core';
import {CustomerReportDetailService} from '../customer-report-service/customer-report-detail.service';

@Component({
  selector: 'app-reportheader',
  templateUrl: './reportheader.component.html',
  styleUrls: ['./reportheader.component.css']
})
export class ReportheaderComponent implements OnInit {
  public logoPathUrl1;
  public logoPathUrl2;
  public pathologyAddress;
  public pathologyLabName;

  constructor(private _CustomerReportDetailService:CustomerReportDetailService) {

   }

  ngOnInit() {
this.logoPathUrl1 = this._CustomerReportDetailService.logoUrl1;
this.logoPathUrl2 = this._CustomerReportDetailService.logoUrl2;
this.pathologyAddress = this._CustomerReportDetailService.labAddress;
this.pathologyLabName = this._CustomerReportDetailService.labName;
  }

}
