import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from '../../../_services';
import { Terminal, ApiResponse, SelectOptionInterface } from '../../../_models';
import { NgSelectModule } from '@ng-select/ng-select';


@Component({
  selector: 'app-accident-add',
  templateUrl: './accident-add.component.html',
  styleUrls: ['./accident-add.component.scss']
})
export class AccidentAddComponent implements OnInit {
  addForm: FormGroup;

  // cities: SelectOptionInterface[];
  // activeCity: SelectOptionInterface[];

  // counties: SelectOptionInterface[];
  // activeCounty: SelectOptionInterface[];

  vehicles: SelectOptionInterface[];
  activeVehicle: SelectOptionInterface[];

  counties: SelectOptionInterface[];
  activeCounty: SelectOptionInterface[];

  drivers: SelectOptionInterface[];
  activedriver: SelectOptionInterface[];

  states: SelectOptionInterface[];
  activeState: SelectOptionInterface[];

  routes: SelectOptionInterface[];
  activeRoute: SelectOptionInterface[];

  private value = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      // name: [''],
      // manager: [''],
      // phone: [''],
      // quarter: [''],
      // city: [''], // object;
      // county: [''], // object;
      // address: [''],
      // longitude: [''], // number;
      // latitude: [''], // number;
      // capacity: [''], // number;
      // is_pml_operational: [''], // boolean;
      // is_pmt_operational: [''], // boolean;
      // is_pmt_online: [''], // boolean;
      // photo: [''],
      // flw_subaccount_id: [''], // object;
	
      
      vehicle_id:	 [''],	
      driver_id:	 [''],	
      route_id:	 [''],	
      state_id:	[''],	
      county_id:	 [''],	
      occurred_place:	 [''],	
      occurred_date:	 [''],
      nature:	 [''],	
      casualty:	 [''],	
      major_cause:	 [''],	
      minor_cause:	 [''],	
      collider:	 [''],	
      description: [''],	
      verdict:	 [''],	
      compensation:	 [''],	
      remark:	 [''],	
      record_status: [''],	
    });

    this.getVehicles();
    this.getCounties();
    this.getDrivers();
    this.getStates();
    this.getRoutes();
  }


  getVehicles() {
    const storedRecords = window.localStorage.getItem('vehicle');
    const updated = window.localStorage.getItem('vehicle_updated');
    if (storedRecords) {
        this.vehicles = JSON.parse(storedRecords);
        console.log(`Records of vehicles retrieved since ${updated}`);
        console.log(this.vehicles);
        return;
    }
    this.apiService.retrieveVehicle('?fields=id,name').subscribe( data => {
      if (data.success) {
        this.vehicles = data.payload.map(item => ({ id: item.id, text: item.name }));
        window.localStorage.setItem('vehicle', JSON.stringify(this.counties));
        window.localStorage.setItem('vehicle_updated', JSON.stringify(new Date()));
      } else {
        // this.cities = [ { id: '1a', text: 'Nsukka' }];
        console.log(data.message);
      }
    });
  }

  getCounties() {
    const storedRecords = window.localStorage.getItem('county');
    const updated = window.localStorage.getItem('county_updated');
    if (storedRecords) {
        this.counties = JSON.parse(storedRecords);
        console.log(`Records of counties retrieved since ${updated}`);
        return;
    }
    this.apiService.retrieveCounty('?fields=id,name').subscribe( data => {
      if (data.success) {
        this.counties = data.payload.map(item => ({ id: item.id, text: item.name }));
        window.localStorage.setItem('county', JSON.stringify(this.counties));
        window.localStorage.setItem('county_updated', JSON.stringify(new Date()));
      } else {
        // this.counties = [{ id: 'fa', text: 'Anambra' }];
      console.log(data.message);
      }
    });
  }

  getDrivers() {
    const storedRecords = window.localStorage.getItem('driver');
    const updated = window.localStorage.getItem('driver_updated');
    if (storedRecords) {
        this.counties = JSON.parse(storedRecords);
        console.log(`Records of drivers retrieved since ${updated}`);
        return;
    }
    this.apiService.retrieveCounty('?fields=id,surname').subscribe( data => {
      if (data.success) {
        this.counties = data.payload.map(item => ({ id: item.id, text: item.name }));
        window.localStorage.setItem('driver', JSON.stringify(this.counties));
        window.localStorage.setItem('driver_updated', JSON.stringify(new Date()));
      } else {
        // this.counties = [{ id: 'fa', text: 'Anambra' }];
      console.log(data.message);
      }
    });
  }

  getRoutes() {
    const storedRecords = window.localStorage.getItem('route');
    const updated = window.localStorage.getItem('route_updated');
    if (storedRecords) {
        this.counties = JSON.parse(storedRecords);
        console.log(`Records of routes retrieved since ${updated}`);
        return;
    }
    this.apiService.retrieveCounty('?fields=id,category').subscribe( data => {
      if (data.success) {
        this.counties = data.payload.map(item => ({ id: item.id, text: item.name }));
        window.localStorage.setItem('route', JSON.stringify(this.counties));
        window.localStorage.setItem('route_updated', JSON.stringify(new Date()));
      } else {
        // this.counties = [{ id: 'fa', text: 'Anambra' }];
      console.log(data.message);
      }
    });
  }
  getStates() {
    const storedRecords = window.localStorage.getItem('state');
    const updated = window.localStorage.getItem('state_updated');
    if (storedRecords) {
        this.counties = JSON.parse(storedRecords);
        console.log(`Records of states retrieved since ${updated}`);
        return;
    }
    this.apiService.retrieveCounty('?fields=id,name').subscribe( data => {
      if (data.success) {
        this.counties = data.payload.map(item => ({ id: item.id, text: item.name }));
        window.localStorage.setItem('state', JSON.stringify(this.counties));
        window.localStorage.setItem('state_updated', JSON.stringify(new Date()));
      } else {
        // this.counties = [{ id: 'fa', text: 'Anambra' }];
      console.log(data.message);
      }
    });
  }



  onSubmit() {
    const payload = this.addForm.value;
    console.log('Form input ', payload);
    payload.city_id = payload.city.id;
    payload.county_id = payload.county.id;
    delete payload.city;
    delete payload.county;
    this.apiService.createTerminal(payload).subscribe( data => {
      console.log(data);
      if (data.success) {
        window.localStorage.setItem('terminalDetailId', data.payload.id);
        this.router.navigate(['terminal/detail']);
      } else {
        console.log(data.message);
      }
        this.router.navigate(['terminal']);
      });
  }

  goBack() {
    this.router.navigate(['accident']);
  }

  public selected(value: any): void {
    console.log('Selected value is: ', value);
  }

  public removed(value: any): void {
    console.log('Removed value is: ', value);
  }

  public typed(value: any): void {
    console.log('New search input: ', value);
  }

  public refreshValue(value: any): void {
    this.value = value;
  }
}
