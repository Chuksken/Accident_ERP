import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService, UtilsService } from '../../../_services';
import { ApiResponse, SelectOptionInterface } from '../../../_models';
import { AccidentCause } from '../../../_models/accidentCause';


@Component({
  selector: 'app-accident-cause-edit',
  templateUrl: './accident-cause-edit.component.html',
  styleUrls: ['./accident-cause-edit.component.scss']
})
export class AccidentCauseEditComponent implements OnInit {

  accidentCauses: Array<AccidentCause>;
  accidentCause: AccidentCause;

  editForm: FormGroup;

  response: ApiResponse;


  private value = {};

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService) { }

  ngOnInit() {
    const accidentCauseId = window.localStorage.getItem('accidentCauseEditId');
    if (!accidentCauseId) {
      alert('Invalid action.');
      this.router.navigate(['accident-cause']); // list-terminal
      return;
    }


    this.editForm = this.formBuilder.group({
     
      name:	 [''],	
      offender:	 [''],	
      description:	 [''],		
    });
    // this.editForm.setValue(this.formData);
    this.accidentCause = this.utilsService.cleanObject(this.getRecord(accidentCauseId));

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
    this.editForm.get('description').setValue(this.accidentCause.description);
    this.editForm.get('offender').setValue(this.accidentCause.offender);
    this.editForm.get('name').setValue(this.accidentCause.name);
   
     
   
   
    // if (this.utilsService.hasProp(this.accident, 'route_id')) {
    //   this.activeRoute = [{ id: this.accident.route_id.id, text: this.accident.route_id.category }];
    // }
  
    console.log('\nAccident Name', typeof this.accidentCause, this.accidentCause);
  }


  onSubmit() {
    const payload = this.editForm.value;
    payload.id = this.accidentCause.id;
    console.log('editForm payload ', payload);
    
    this.apiService.updateAccidentCause(payload).pipe(first()).subscribe(data => {
          this.response = data;
          this.accidentCause = this.response.payload;
          if (this.response.success) {
            alert('User updated successfully.');
            this.router.navigate(['accident-cause']); // list-terminal
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

  getRecord(accidentCauseId) {
    console.log('\nTerminal Id ', accidentCauseId);
    const storedRecords = window.localStorage.getItem('accidentCause');
    const updated = window.localStorage.getItem('accidentCause_updated');
    if (storedRecords) {
        this.accidentCauses = JSON.parse(storedRecords);
        console.log(`Records retrieved since ${updated}`);
    }
    const t = this.apiService.getAccidentCause(this.accidentCauses, accidentCauseId);
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