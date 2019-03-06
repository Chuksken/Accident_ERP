import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ApiService } from '../../../_services';
import { Terminal, ApiResponse, SelectOptionInterface } from '../../../_models';
import { NgSelectModule } from '@ng-select/ng-select';

@Component({
  selector: 'app-accident-cause-add',
  templateUrl: './accident-cause-add.component.html',
  styleUrls: ['./accident-cause-add.component.scss']
})
export class AccidentCauseAddComponent implements OnInit {

  addForm: FormGroup;

 
  private value = {};

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      
      
     
      name: [''],
      offender:	 [''],	
      description:	 [''],	
    	
    });

   
  }

  onSubmit() {
    const payload = this.addForm.value;
    console.log('Form input ', payload);
    
    this.apiService.createAccidentCause(payload).subscribe( data => {
      console.log(data);
      if (data.success) {
        window.localStorage.setItem('accidentCauseDetailId', data.payload.id);
        this.router.navigate(['accident-cause/detail']);
      } else {
        console.log(data.message);
      }
        this.router.navigate(['accident-cause']);
      });
  }

  goBack() {
    this.router.navigate(['accident-cause']);
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
