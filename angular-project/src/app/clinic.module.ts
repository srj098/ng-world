import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { CustomerComponent } from './customer-details/customer-details.component';
import { ReportheaderComponent } from './reportheader/reportheader.component';
import { ReportfooterComponent } from './reportfooter/reportfooter.component';
import { BloodReportComponent } from './blood-report/blood-report.component';
import {BloodReportService} from './blood-report-test-data/blood-report.service'
 // all the new comonents need to import

@NgModule({
  declarations: [    // all the new component need to declare
    CustomerComponent, ReportheaderComponent, ReportfooterComponent, BloodReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   //add the predefined module which you are importing
    FormsModule
  ],
  providers: [BloodReportService],
  bootstrap: [CustomerComponent,BloodReportComponent,ReportheaderComponent,ReportfooterComponent]
})
export class ClinicModule { }
