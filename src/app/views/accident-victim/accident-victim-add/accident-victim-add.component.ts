import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from '../../../_services';
import { ApiResponse, SelectOptionInterface } from '../../../_models';
import { NgSelectModule } from '@ng-select/ng-select';
import { DatePipe } from '@angular/common';
import { isDate } from '@angular/common/src/i18n/format_date';


@Component({
  selector: 'app-accident-victim-add',
  templateUrl: './accident-victim-add.component.html',
  styleUrls: ['./accident-victim-add.component.scss']
})
export class AccidentVictimAddComponent implements OnInit {
  addForm: FormGroup;

  // cities: SelectOptionInterface[];
  // activeCity: SelectOptionInterface[];

  // counties: SelectOptionInterface[];
  // activeCounty: SelectOptionInterface[];

  accidents: SelectOptionInterface[];
  activeAccident: SelectOptionInterface[];


  private value = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
  
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

    this.getAccidents();
   
  }


  getAccidents() {
    const storedRecords = window.localStorage.getItem('accident');
    const updated = window.localStorage.getItem('accident_updated');
    if (storedRecords) {
        this.accidents = JSON.parse(storedRecords);
        console.log(`Records of vehicles retrieved since ${updated}`);
        console.log(this.accidents);
        return;
    }
    this.apiService.retrieveAccident('?fields=id, occurred_place').subscribe( data => {
      if (data.success) {
        this.accidents = data.payload.map(item => ({ id: item.id, text: item.occurred_place }));
        window.localStorage.setItem('accident', JSON.stringify(this.accidents));
        window.localStorage.setItem('accident_updated', JSON.stringify(new Date()));
      } else {
        // this.cities = [ { id: '1a', text: 'Nsukka' }];
        console.log(data.message);
      }
    });
  }


  onSubmit() {
    const payload = this.addForm.value;
    console.log('Form input ', payload);
    //alert(payload.accident.id);
    // alert(payload.accident_id);
    //payload.accident = payload.accident.id;
    // payload.accident = payload.accident;
    
    // delete payload.accident;
    this.apiService.createAccidentVictim(payload).subscribe( data => {
      console.log(data);
      if (data.success) {
        window.localStorage.setItem('accidentVictimDetailId', data.payload.id);
        this.router.navigate(['accident-victim/detail']);
      } else {
        console.log(data.message);
      }
        this.router.navigate(['accident-victim']);
      });
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

