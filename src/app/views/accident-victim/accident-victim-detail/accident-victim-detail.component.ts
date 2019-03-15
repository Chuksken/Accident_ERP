import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, UtilsService } from '../../../_services';
import { AccidentVictim } from '../../../_models/accidentVictim';

@Component({
  selector: 'app-accident-victim-detail',
  templateUrl: './accident-victim-detail.component.html',
  styleUrls: ['./accident-victim-detail.component.scss']
})
export class AccidentVictimDetailComponent implements OnInit {

  
  accidentVictims: Array<AccidentVictim>;
  accidentVictim: AccidentVictim;


  
      id = '';	
      accident_id =	'';	
      fullname =	'';	
      gender =	'';		
      age_group =	'';	
      phone =	'';		
      type =	'';		
      situation ='';		
      compensation =	'';
      remark =	'';	

response: any;
success = false;
message = '';
constructor( private router: Router, private apiService: ApiService, private utilsService: UtilsService) { }

  ngOnInit() {

    const accidentVictimId = window.localStorage.getItem('accidentVictimDetailId');
    if (!accidentVictimId) {
      alert('Invalid action.');
      this.router.navigate(['accident']); // list-terminal
      return;
  }
  this.accidentVictim = this.utilsService.cleanObject(this.getRecord(accidentVictimId));
    
    this.id = this.accidentVictim.id || '';
    this.fullname = this.accidentVictim.fullname || '';
    this.gender = this.accidentVictim.gender || '';
    this.phone= this.accidentVictim.phone || '';
    this.remark = this.accidentVictim.remark || '';
    this.situation = this.accidentVictim.situation || '';
    this.type = this.accidentVictim.type || '';
    this.age_group = this.accidentVictim.age_group || '';
    // this.major_cause = this.accident.major_cause || '';
    // this.occurred_place = this.accident.occurred_place || '';
    // this.casualty = this.accident.casualty || '';

    if (this.utilsService.hasProp(this.accidentVictim, 'vehicle_id')) {
      this.accident_id = this.accidentVictim.accident_id.occurred_place.toString();
    }
    if (this.utilsService.hasProp(this.accidentVictim, 'compensation')) {
      this.compensation = this.accidentVictim.compensation.toString();
    }
    
    console.log('\nAccident Name', typeof this.accidentVictim, this.accidentVictim);

}
getRecord(accidentVictimId) {
  console.log('\nAccident Id ', accidentVictimId);
  const storedRecords = window.localStorage.getItem('accident');
  const updated = window.localStorage.getItem('accident_updated');
  if (storedRecords) {
      this.accidentVictims = JSON.parse(storedRecords);
      this.success = true;
      this.message = `Records retrieved since ${updated}`;

  }
  const accidentVictim = this.accidentVictims.filter(obj => obj.id === accidentVictimId)
  return accidentVictim[0];
}

accidentVictimEdit(accidentVictim: AccidentVictim): void {
  window.localStorage.removeItem('accidentVictimEditId');
  window.localStorage.setItem('accidentVictimEditId', accidentVictim.id);
  this.router.navigate(['accident-victim/edit']);
}

accidentVictimAdd(): void {
  this.router.navigate(['accident-victim/add']);
}

goBack() {
  this.router.navigate(['accident-victim']);
}

}