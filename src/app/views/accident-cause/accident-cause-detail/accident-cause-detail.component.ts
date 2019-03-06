import { Component, OnInit } from '@angular/core';
import { AccidentCause } from '../../../_models/accidentCause';
import { Router } from '@angular/router';
import { ApiService, UtilsService } from '../../../_services';


@Component({
  selector: 'app-accident-cause-detail',
  templateUrl: './accident-cause-detail.component.html',
  styleUrls: ['./accident-cause-detail.component.scss']
})
export class AccidentCauseDetailComponent implements OnInit {

  accidentCauses: Array<AccidentCause>;
  accidentCause: AccidentCause;


  
name = '';	
offender = '';	
description = '';	


response: any;
success = false;
message = '';
constructor( private router: Router, private apiService: ApiService, private utilsService: UtilsService) { }

  ngOnInit() {

    const accidentCauseId = window.localStorage.getItem('accidentCauseDetailId');
    if (!accidentCauseId) {
      alert('Invalid action.');
      this.router.navigate(['accident-cause']); // list-terminal
      return;
  }
  this.accidentCause = this.utilsService.cleanObject(this.getRecord(accidentCauseId));
    
    
    this.name = this.accidentCause.name || '';
    this.offender = this.accidentCause.offender || '';
    this.description = this.accidentCause.description || '';
    
    console.log('\nAccident Name', typeof this.accidentCause, this.accidentCause);

}
getRecord(accidentCauseId) {
  console.log('\nAccident Id ', accidentCauseId);
  const storedRecords = window.localStorage.getItem('accidentCause');
  const updated = window.localStorage.getItem('accident_updated');
  if (storedRecords) {
      this.accidentCauses = JSON.parse(storedRecords);
      this.success = true;
      this.message = `Records retrieved since ${updated}`;

  }
  const accidentCause = this.accidentCauses.filter(obj => obj.id === accidentCauseId)
  return accidentCause[0];
}

accidentCauseEdit(accidentCause: AccidentCause): void {
  window.localStorage.removeItem('accidentCauseEditId');
  window.localStorage.setItem('accidentCauseEditId', accidentCause.id);
  this.router.navigate(['accident-cause/edit']);
}

accidentCauseAdd(): void {
  this.router.navigate(['accident-cause/add']);
}

goBack() {
  this.router.navigate(['accident-cause']);
}

}