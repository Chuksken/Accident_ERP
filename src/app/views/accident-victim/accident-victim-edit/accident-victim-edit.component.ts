import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService, UtilsService } from '../../../_services';
import { ApiResponse, SelectOptionInterface } from '../../../_models';
import { AccidentVictim } from '../../../_models/accidentVictim';


@Component({
  selector: 'app-accident-victim-edit',
  templateUrl: './accident-victim-edit.component.html',
  styleUrls: ['./accident-victim-edit.component.scss']
})
export class AccidentVictimEditComponent implements OnInit {

  accidentVictims: Array<AccidentVictim>;
  accidentVictim: AccidentVictim;

  editForm: FormGroup;

  response: ApiResponse;

  accidents: SelectOptionInterface[];
  activeAccident: SelectOptionInterface[];


  private value = {};

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private utilsService: UtilsService) { }

  ngOnInit() {
    const accidentVictimId = window.localStorage.getItem('accidentVictimEditId');
    if (!accidentVictimId) {
      alert('Invalid action.');
      this.router.navigate(['accident-victim']); // list-terminal
      return;
    }

    this.getAccidents();
    

    this.editForm = this.formBuilder.group({
      id: [''],	
      accident_id:	[''],	
      fullname:	[''],	
      gender:	[''],		
      age_group:	[''],	
      phone:	[''],		
      type:	[''],		
      situation:	[''],		
      compensation:	[''],	
      remark:	[''],	
    });
    // this.editForm.setValue(this.formData);
    this.accidentVictim = this.utilsService.cleanObject(this.getRecord(accidentVictimId));


    // console.log('\nTerminal Name', typeof this.terminal, this.terminal);
    this.editForm.get('accident_id').setValue(this.accidentVictim.accident_id);
    this.editForm.get('fullname').setValue(this.accidentVictim.fullname);
    this.editForm.get('gender').setValue(this.accidentVictim.gender);
    this.editForm.get('age_group').setValue(this.accidentVictim.age_group);
    this.editForm.get('phone').setValue(this.accidentVictim.phone);
    this.editForm.get('type').setValue(this.accidentVictim.type);
    this.editForm.get('situation').setValue(this.accidentVictim.situation);
    this.editForm.get('compensation').setValue(this.accidentVictim.compensation);
    this.editForm.get('remark').setValue(this.accidentVictim.remark);
    
     
   
   
    // if (this.utilsService.hasProp(this.accident, 'route_id')) {
    //   this.activeRoute = [{ id: this.accident.route_id.id, text: this.accident.route_id.category }];
    // }
  
    console.log('\nAccident Name', typeof this.accidentVictim, this.accidentVictim);
  }


  getAccidents() {
    const storedRecords = window.localStorage.getItem('vehicle');
    const updated = window.localStorage.getItem('vehicle_updated');
    if (storedRecords) {
        this.accidents = JSON.parse(storedRecords);
        console.log(`Records of vehicles retrieved since ${updated}`);
        console.log(this.accidents);
        return;
    }
    this.apiService.retrieveVehicle('?fields=id,name').subscribe( data => {
      if (data.success) {
        this.accidents = data.payload.map(item => ({ id: item.id, text: item.name }));
        window.localStorage.setItem('accident', JSON.stringify(this.accidents));
        window.localStorage.setItem('accident_updated', JSON.stringify(new Date()));
      } else {
        // this.cities = [ { id: '1a', text: 'Nsukka' }];
        console.log(data.message);
      }
    });
  }

  

  onSubmit() {
    const payload = this.editForm.value;
    payload.id = this.accidentVictim.id;
    console.log('editForm payload ', payload);
    payload.accident_id = payload.accident;
  
    delete payload.accident;
    this.apiService.updateAccidentVictim(payload).pipe(first()).subscribe(data => {
          this.response = data;
          this.accidentVictim = this.response.payload;
          if (this.response.success) {
            alert('User updated successfully.');
            this.router.navigate(['accident-victim']); // list-terminal
            // Update Local Content
            window.localStorage.setItem('accidentVictim', JSON.stringify(this.response.payload));
            window.localStorage.setItem('accidentVictim_updated', JSON.stringify(new Date()));
          } else {
            alert(this.response.message);
          }


        },
        error => {
          alert(error);
         });
  }

  getRecord(accidentVictimId) {
    console.log('\nTerminal Id ', accidentVictimId);
    const storedRecords = window.localStorage.getItem('accidentVictim');
    const updated = window.localStorage.getItem('accidentVictim_updated');
    if (storedRecords) {
        this.accidentVictims = JSON.parse(storedRecords);
        console.log(`Records retrieved since ${updated}`);
    }
    const t = this.apiService.getAccidentVictim(this.accidentVictims, accidentVictimId);
    return t[0];
  }

  accidentVictimAdd(): void {
    this.router.navigate(['accident-victim/add']);
  }

  goBack() {
    this.router.navigate(['accident-victim']);
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