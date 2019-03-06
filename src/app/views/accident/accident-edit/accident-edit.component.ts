import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService, UtilsService } from '../../../_services';
import { ApiResponse, SelectOptionInterface, Accident } from '../../../_models';

@Component({
  selector: 'app-accident-edit',
  templateUrl: './accident-edit.component.html',
  styleUrls: ['./accident-edit.component.scss']
})
export class AccidentEditComponent implements OnInit {

  accidents: Array<Accident>;
  accident: Accident;

  editForm: FormGroup;

  response: ApiResponse;

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

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService) { }

  ngOnInit() {
    const accidentId = window.localStorage.getItem('accidentEditId');
    if (!accidentId) {
      alert('Invalid action.');
      this.router.navigate(['accident']); // list-terminal
      return;
    }

    this.getVehicles();
    this.getCounties();
    this.getDrivers();
    this.getStates();
    this.getRoutes();

    this.editForm = this.formBuilder.group({
      vehicle_id:	 [''],	
      driver_id:	 [''],	
      route_id:	 [''],	
      state_id:	[''],	
      county_id:	 [''],	
      occurred_place:	 [''],	
      occurred_date:	 [''],
      gravity: [''],
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
    // this.editForm.setValue(this.formData);
    this.accident = this.utilsService.cleanObject(this.getRecord(accidentId));

    // this.formData.name = this.terminal.name || '';
    // this.formData.manager = this.terminal.manager || 'Manager';
    // this.formData.phone = this.terminal.phone || '';
    // this.formData.quarter = this.terminal.quarter || '';
    // if (this.utilsService.hasProp(this.terminal, 'city_id')) {
    //   this.activeCity = [{ id: this.terminal.city_id.id, text: this.terminal.city_id.name }];
    //   // this.formData.city = this.activeCity;
    // }
    // if (this.utilsService.hasProp(this.terminal, 'county_id')) {
    //   this.activeCounty = [{ id: this.terminal.county_id.id, text: this.terminal.county_id.name }];
    //   // this.formData.county = this.activeCounty;
    // }
    // this.formData.address = this.terminal.address || '';
    // if (this.utilsService.hasProp(this.terminal, 'longitude')) {
    //   this.formData.longitude = this.terminal.longitude.toString();
    // }
    // if (this.utilsService.hasProp(this.terminal, 'latitude')) {
    //   this.formData.latitude = this.terminal.latitude.toString();
    // }
    // this.formData.capacity = this.terminal.capacity.toString() || '';
    // if (this.utilsService.hasProp(this.terminal, 'capacity')) {
    //   this.formData.capacity = this.terminal.capacity.toString();
    // }
    // if (this.utilsService.hasProp(this.terminal, 'is_pml_operational')) {
    //   this.formData.is_pml_operational = this.terminal.is_pml_operational.toString();
    // }
    // if (this.utilsService.hasProp(this.terminal, 'is_pmt_operational')) {
    //   this.formData.is_pmt_operational = this.terminal.is_pmt_operational.toString();
    // }
    // if (this.utilsService.hasProp(this.terminal, 'is_pmt_online')) {
    //   this.formData.is_pmt_online = this.terminal.is_pmt_online.toString();
    // }
    // this.formData.photo = this.terminal.photo || '';
    // if (this.utilsService.hasProp(this.terminal, 'flw_subaccount_id')) {
    //   this.formData.flw_subaccount_id = this.terminal.flw_subaccount_id.subaccount_id;
    // }

    // console.log('\nTerminal Name', typeof this.terminal, this.terminal);
    this.editForm.get('description').setValue(this.accident.description);
    this.editForm.get('gravity').setValue(this.accident.gravity);
    this.editForm.get('nature').setValue(this.accident.nature);
    this.editForm.get('remark').setValue(this.accident.remark);
    this.editForm.get('minor_cause').setValue(this.accident.minor_cause);
    this.editForm.get('record_status').setValue(this.accident.record_status);
    this.editForm.get('verdict').setValue(this.accident.verdict);
    this.editForm.get('major_cause').setValue(this.accident.major_cause);
    this.editForm.get('occurred_place').setValue(this.accident.occurred_place);
    this.editForm.get('casualty').setValue(this.accident.casualty);
    this.editForm.get('vehicle_id').setValue(this.accident.vehicle_id);
    this.editForm.get('driver_id').setValue(this.accident.driver_id);
    this.editForm.get('state_id').setValue(this.accident.state_id);
    this.editForm.get('county_id').setValue(this.accident.county_id);
    this.editForm.get('compensation').setValue(this.accident.compensation);
    this.editForm.get('occurred_date').setValue(this.accident.occurred_date);
     
   
   
    // if (this.utilsService.hasProp(this.accident, 'route_id')) {
    //   this.activeRoute = [{ id: this.accident.route_id.id, text: this.accident.route_id.category }];
    // }
  
    console.log('\nAccident Name', typeof this.accident, this.accident);
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
        window.localStorage.setItem('vehicle', JSON.stringify(this.vehicles));
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
        console.log(this.counties);
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
  getStates() {
    const storedRecords = window.localStorage.getItem('state');
    const updated = window.localStorage.getItem('state_updated');
    if (storedRecords) {
        this.states = JSON.parse(storedRecords);
        console.log(`Records of states retrieved since ${updated}`);
        console.log(this.states);
        return;
    }
    this.apiService.retrieveState('?fields=id,name').subscribe( data => {
      if (data.success) {
        this.states = data.payload.map(item => ({ id: item.id, text: item.name }));
        window.localStorage.setItem('state', JSON.stringify(this.states));
        window.localStorage.setItem('state_updated', JSON.stringify(new Date()));
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
        this.drivers = JSON.parse(storedRecords);
        console.log(`Records of drivers retrieved since ${updated}`);
        console.log(this.drivers);
        return;
    }
    this.apiService.retrieveDriver('?fields=id,surname').subscribe( data => {
      if (data.success) {
        this.drivers = data.payload.map(item => ({ id: item.id, text: item.surname }));
        window.localStorage.setItem('driver', JSON.stringify(this.drivers));
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
        this.routes = JSON.parse(storedRecords);
        console.log(`Records of routes retrieved since ${updated}`);
        console.log(this.routes);
        return;
    }
    this.apiService.retrieveRoute('?fields=id,category').subscribe( data => {
      if (data.success) {
        this.routes = data.payload.map(item => ({ id: item.id, text: item.category }));
        window.localStorage.setItem('route', JSON.stringify(this.routes));
        window.localStorage.setItem('route_updated', JSON.stringify(new Date()));
      } else {
        // this.counties = [{ id: 'fa', text: 'Anambra' }];
      console.log(data.message);
      }
    });
  }

  onSubmit() {
    const payload = this.editForm.value;
    payload.id = this.accident.id;
    console.log('editForm payload ', payload);
    payload.vehicle_id = payload.vehicle;
    payload.county_id = payload.county;
    payload.state_id = payload.state;
    payload.driver_id = payload.driver;
    payload.route_id = payload.route;
    delete payload.vehicle;
    delete payload.county;
    delete payload.driver;
    delete payload.state;
    delete payload.route;
    this.apiService.updateAccident(payload).pipe(first()).subscribe(data => {
          this.response = data;
          this.accident = this.response.payload;
          if (this.response.success) {
            alert('User updated successfully.');
            this.router.navigate(['accident']); // list-terminal
            // Update Local Content
            window.localStorage.setItem('accident', JSON.stringify(this.response.payload));
            window.localStorage.setItem('accident_updated', JSON.stringify(new Date()));
          } else {
            alert(this.response.message);
          }


        },
        error => {
          alert(error);
         });
  }

  getRecord(accidentId) {
    console.log('\nTerminal Id ', accidentId);
    const storedRecords = window.localStorage.getItem('accident');
    const updated = window.localStorage.getItem('accident_updated');
    if (storedRecords) {
        this.accidents = JSON.parse(storedRecords);
        console.log(`Records retrieved since ${updated}`);
    }
    const t = this.apiService.getAccident(this.accidents, accidentId);
    return t[0];
  }

  accidentAdd(): void {
    this.router.navigate(['accident/add']);
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