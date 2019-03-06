import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services';
import { Router } from '@angular/router';
import { ApiResponse } from '../../_models';
import { AccidentVictim } from '../../_models/accidentVictim';


@Component({
  selector: 'app-accident-victim',
  templateUrl: './accident-victim.component.html',
  styleUrls: ['./accident-victim.component.scss']
})
export class AccidentVictimComponent implements OnInit {
// @ViewChild('dataTable') table;
  // dataTable: any;
  //dtOptions: any;
  response: any;
  success = false;
  message = '';
  accidentVictims: Array<AccidentVictim>;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    const storedRecords = window.localStorage.getItem('accidentVictim');
    const updated = window.localStorage.getItem('accidentVictim_updated');
    if (storedRecords && updated) {
        this.accidentVictims = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    } else {
      this.accidentVictimRetrieve();
    }
     //$('#table_id').DataTable();
  }

  accidentVictimRetrieve(): void {
    this.apiService.retrieveAccidentVictim().subscribe(data => {
      this.response = data;
      this.accidentVictims = this.response.payload;
      this.success = this.response.success;
      this.message = this.response.message;
      if (this.response.success) {
        window.localStorage.setItem('accidentVictim', JSON.stringify(this.response.payload));
        window.localStorage.setItem('accidentVictim_updated', JSON.stringify(new Date()));
      }
    });
  }

  accidentDetail(accidentVictim: AccidentVictim): void {
    window.localStorage.removeItem('accidentVictimDetailId');
    window.localStorage.setItem('accidentVictimDetailId', accidentVictim.id);
    this.router.navigate(['accident/detail'])
      .then(nav => { console.log(nav); }, err => {console.log(err); });
    console.log('Navigating to accidentVictim detail');
    return;
  }

  accidentVictimDelete(accidentVictim: AccidentVictim): void {
    this.apiService.deleteAccident(accidentVictim.id).subscribe( data => {
        this.accidentVictims = this.accidentVictims.filter(i => i.id !== accidentVictim.id);
        window.localStorage.setItem('accidentVictim', JSON.stringify(this.accidentVictims));
      });
  }

  accidentVictimEdit(accidentVictim: AccidentVictim): void {
    window.localStorage.removeItem('accidentVictimEditId');
    window.localStorage.setItem('accidentVictimEditId', accidentVictim.id);
    this.router.navigate(['accident-victim/edit']);
  }

  accidentVictimAdd(): void {
    this.router.navigate(['accident-victim/add']);
  }
  
}

