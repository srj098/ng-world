import { Component, OnInit, Input } from '@angular/core';
import {BloodReportService} from '../blood-report-test-data/blood-report.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerComponent implements OnInit {
  public nameTest = false;
  isBlood = false;
  isUrine = false;
  isEkg = false;
  isElectroCardio = false;

  showBtnHeaderShow = true;
  showBtnHeaderHide = false;

  showHeaderFooter = false;
  isDisabled = false;
  showReport = false;
  dispalybloodreport = false;

  @Input() public parentData;

  constructor(private _BloodReportService:BloodReportService) {
      
  }

  selectReport(value: string) {
    switch (value) {
      case "urine":
        this.isUrine = true;
        break;
      case "blood":
        this.dispalybloodreport=true;
        this.isBlood = true;
        break;
      case "ekg":
        this.isEkg = true;
        break;
      case "electroCardio":
        this.isElectroCardio = true;
        break;
    }
  }

  // hideReport($event){
  //   this.isBlood = $event;
  //   window.setTimeout(function(){
  //     this.isBlood = true;
  //   });
  // }

  printReport(){
    window.print();
  }

  displayHeaderFooter(){
    this.showBtnHeaderHide = true;
    this.showHeaderFooter = true;
    this.showBtnHeaderShow = false;
  }

  hideHeaderFooter(){
    this.showHeaderFooter = false;
    this.showBtnHeaderShow = true;
    this.showBtnHeaderHide = false;
  }

  hideReport(){
    this.isBlood = false;
    this.dispalybloodreport=false;
  }

  ngOnInit() {
	  var refNo = document.getElementById('refno') as HTMLInputElement;
    if(this._BloodReportService.referenceNumber){
      refNo.value = this._BloodReportService.referenceNumber;
      this.isDisabled = true;
    }else{
     refNo.value = '';
     refNo.placeholder = 'Ref. No.';
    }
  }
}
