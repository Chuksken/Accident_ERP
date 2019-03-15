import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services';
import { Router } from '@angular/router';
import { Accident, ApiResponse } from '../../_models';
import { PNotifyService } from '../../_services/pnotify.service';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.scss']
})
export class AccidentComponent implements OnInit {
  // @ViewChild('dataTable') table;
  // dataTable: any;
  //dtOptions: any;
  response: any;
  success = false;
  message = '';
  accidents: Array<Accident>;
  dtOptions: any = {};
  
  pnotify = undefined;
  constructor(private router: Router, private apiService: ApiService, private notify: PNotifyService) { }

  ngOnInit() {
    this.pnotify = this.notify.getPNotify();
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    this.dtOptions = {
      // ajax: 'data/data.json',
      dom: 'Bfrtip',
    buttons: [
      // 'columnsToggle',
      // 'colvis',
      'copy',
      'print',
      'excel',
      {
        // text: 'Some button',
        // key: '1',
        action: function (e, dt, node, config) {
          alert('Button activated');
        }
      }
    ]}
    const storedRecords = window.localStorage.getItem('accident');
    const updated = window.localStorage.getItem('accident_updated');
    if (storedRecords && updated) {
        this.accidents = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    } else {
      this.accidentRetrieve();
    }
     //$('#table_id').DataTable();
  }

  accidentRetrieve(): void {
    this.apiService.retrieveAccident().subscribe(data => {
      this.response = data;
      this.accidents = this.response.payload;
      this.success = this.response.success;
      this.message = this.response.message;
      if (this.response.success) {
        window.localStorage.setItem('accident', JSON.stringify(this.response.payload));
        window.localStorage.setItem('accident_updated', JSON.stringify(new Date()));
      }
    });
  }

  accidentDetail(accident: Accident): void {
    window.localStorage.removeItem('accidentDetailId');
    window.localStorage.setItem('accidentDetailId', accident.id);
    this.router.navigate(['accident/detail'])
      .then(nav => { console.log(nav); }, err => {console.log(err); });
    console.log('Navigating to accident detail');
    return;
  }

  accidentDelete(accident: Accident): void {
    this.apiService.deleteAccident(accident.id).subscribe( data => {
        this.accidents = this.accidents.filter(i => i.id !== accident.id);
        window.localStorage.setItem('accident', JSON.stringify(this.accidents));
      });
  }

  accidentEdit(accident: Accident): void {
    window.localStorage.removeItem('accidentEditId');
    window.localStorage.setItem('accidentEditId', accident.id);
    this.router.navigate(['accident/edit']);
  }

  accidentAdd(): void {
    this.router.navigate(['accident/add']);
  }
  
}
