import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_services';
import { Router } from '@angular/router';
import { AccidentCause } from '../../_models/accidentCause';


@Component({
  selector: 'app-accident-cause',
  templateUrl: './accident-cause.component.html',
  styleUrls: ['./accident-cause.component.scss']
})
export class AccidentCauseComponent implements OnInit {

  response: any;
  success = false;
  message = '';
  accidentCauses: Array<AccidentCause>;
  dtOptions: any = {};
  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    if (!window.localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return;
    }
    const storedRecords = window.localStorage.getItem('accidentCause');
    const updated = window.localStorage.getItem('accidentCause_updated');
    if (storedRecords && updated) {
        this.accidentCauses = JSON.parse(storedRecords);
        this.success = true;
        this.message = `Records retrieved since ${updated}`;
    } else {
      this.accidentCauseRetrieve();
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
      ]
    }
     //$('#table_id').DataTable();
  }

  accidentCauseRetrieve(): void {
    this.apiService.retrieveAccidentCause().subscribe(data => {
      this.response = data;
      this.accidentCauses = this.response.payload;
      this.success = this.response.success;
      this.message = this.response.message;
      if (this.response.success) {
        window.localStorage.setItem('accidentCause', JSON.stringify(this.response.payload));
        window.localStorage.setItem('accidentCause_updated', JSON.stringify(new Date()));
      }
    });
  }

  accidentCauseDetail(accidentCause: AccidentCause): void {
    window.localStorage.removeItem('accidentCauseDetailId');
    window.localStorage.setItem('accidentCauseDetailId', accidentCause.id);
    this.router.navigate(['accident-cause/detail'])
      .then(nav => { console.log(nav); }, err => {console.log(err); });
    console.log('Navigating to accident detail');
    return;
  }

  accidentCauseDelete(accidentCause: AccidentCause): void {
    this.apiService.deleteAccident(accidentCause.id).subscribe( data => {
        this.accidentCauses = this.accidentCauses.filter(i => i.id !== accidentCause.id);
        window.localStorage.setItem('accident', JSON.stringify(this.accidentCauses));
      });
  }

  accidentCauseEdit(accidentCause: AccidentCause): void {
    window.localStorage.removeItem('accidentCauseEditId');
    window.localStorage.setItem('accidentCauseEditId', accidentCause.id);
    this.router.navigate(['accident-cause/edit']);
  }

  accidentCauseAdd(): void {
    this.router.navigate(['accident-cause/add']);
  }
  
}
