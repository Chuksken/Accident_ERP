import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, UtilsService } from '../../../_services';
import {Accident } from '../../../_models';

@Component({
  selector: 'app-accident-detail',
  templateUrl: './accident-detail.component.html',
  styleUrls: ['./accident-detail.component.scss']
})
export class AccidentDetailComponent implements OnInit {

  accidents: Array<Accident>;
  accident: Accident;


  id = '';
//accident_id: Number;	
vehicle_id =	'';	
driver_id = '';	
route_id = '';	
state_id = '';	
county_id = '';	
occurred_place = '';	
occurred_date = '';
gravity = '';	
nature = '';	
casualty = '';	
major_cause = '';	
minor_cause = '';	
collider = '';	
description = '';	
verdict = '';	
compensation = '';	
remark = '';	
record_status = '';	

response: any;
success = false;
message = '';
constructor( private router: Router, private apiService: ApiService, private utilsService: UtilsService) { }

  ngOnInit() {

    const accidentId = window.localStorage.getItem('accidentDetailId');
    if (!accidentId) {
      alert('Invalid action.');
      this.router.navigate(['accident']); // list-terminal
      return;
  }
  this.accident = this.utilsService.cleanObject(this.getRecord(accidentId));
    
    this.id = this.accident.id || '';
    this.description = this.accident.description || '';
    this.gravity = this.accident.gravity || '';
    this.nature= this.accident.nature || '';
    this.remark = this.accident.remark || '';
    this.minor_cause = this.accident.minor_cause || '';
    this.record_status = this.accident.record_status || '';
    this.verdict = this.accident.verdict || '';
    this.major_cause = this.accident.major_cause || '';
    this.occurred_place = this.accident.occurred_place || '';
    this.casualty = this.accident.casualty || '';

    if (this.utilsService.hasProp(this.accident, 'vehicle_id')) {
      this.vehicle_id = this.accident.vehicle_id.name.toString();
    }
    if (this.utilsService.hasProp(this.accident, 'driver_id')) {
      this.driver_id = this.accident.driver_id.surname.toString();
    }
    if (this.utilsService.hasProp(this.accident, 'state_id')) {
      this.state_id = this.accident.state_id.name.toString();
    }
    if (this.utilsService.hasProp(this.accident, 'county_id')) {
      this.county_id = this.accident.county_id.name.toString();
    }
    if (this.utilsService.hasProp(this.accident, 'route_id')) {
      this.route_id = this.accident.route_id.category.toString();
    }
    if (this.utilsService.hasProp(this.accident, 'compensation')) {
      this.compensation = this.accident.compensation.toString();
    }
    if (this.utilsService.hasProp(this.accident, 'occurred_date')) {
      this.occurred_date = this.accident.occurred_date.toString();
    }
    console.log('\nAccident Name', typeof this.accident, this.accident);

}
getRecord(accidentId) {
  console.log('\nAccident Id ', accidentId);
  const storedRecords = window.localStorage.getItem('accident');
  const updated = window.localStorage.getItem('accident_updated');
  if (storedRecords) {
      this.accidents = JSON.parse(storedRecords);
      this.success = true;
      this.message = `Records retrieved since ${updated}`;

  }
  const accident = this.accidents.filter(obj => obj.id === accidentId)
  return accident[0];
}

accidentEdit(accident: Accident): void {
  window.localStorage.removeItem('accidentEditId');
  window.localStorage.setItem('accidentEditId', accident.id);
  this.router.navigate(['accident/edit']);
}

accidentAdd(): void {
  this.router.navigate(['accident/add']);
}

goBack() {
  this.router.navigate(['terminal']);
}

}