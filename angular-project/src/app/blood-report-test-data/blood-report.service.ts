import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BloodReportService {

  public bloodTestReport ='COMPLETE BLOOD COUNT';
  public referenceNumber = '2475';

  getBloodTestNormalRange(){
    let normalRange = {
    wbc:{range:'4000-10000',unit:'/cu.mm.'},
    rbc:{range:'4.5 - 6.0',unit:'Millions/cu.mm'},
    hb:{range:'14 - 18',unit:'gm/dl'},
    hematocrit:{range:'40 - 50',unit:'%'},
    MCV:{range:'82 - 98',unit:'fL.'},
    MCH:{range:'27 - 31',unit:'Pg.'},
    MCHb:{range:'32 - 36',unit:'g/dl'},
    RCDW:{range:'11 - 16',unit:'%'},
    Platelets:{range:'140,000 - 450,000',unit:'/cu.mm.'},
    neutrophils:{range:'50 - 70',unit:'%'},
    lymphocytes:{range:'20 - 45',unit:'%'},
    monocytes:{range:'Up to 10',unit:'%'},
    eosinophils:{range:'Up to 6',unit:'%'},
    basophils:{range:'Up to 1',unit:'%'},
    }
    return normalRange
    ;
  }
  constructor() { }
}
