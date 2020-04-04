import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportfooterComponent } from './reportfooter.component';

describe('ReportfooterComponent', () => {
  let component: ReportfooterComponent;
  let fixture: ComponentFixture<ReportfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
