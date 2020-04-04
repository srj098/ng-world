import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {BloodReportService} from '../blood-report-test-data/blood-report.service';

@Component({
  selector: 'app-blood-report',
  templateUrl: './blood-report.component.html',
  styleUrls: ['./blood-report.component.css']
})
export class BloodReportComponent implements OnInit {
  public bloodTest ;
  public bloodTestNormalRange;
  showReport:boolean = false;

  @Output() reportdisplay = new EventEmitter<boolean>();

  sendReportdisplay(){
    this.reportdisplay.emit(this.showReport);
  }

  constructor(private _BloodReportService:BloodReportService) {
      
   }

  ngOnInit() {
    this.bloodTestNormalRange = this._BloodReportService.getBloodTestNormalRange();
    this.bloodTest  = this._BloodReportService.bloodTestReport;
  }
}
