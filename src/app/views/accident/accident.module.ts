import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AccidentRoutingModule } from './accident-routing.module';
import { AccidentComponent } from './accident.component';
import { AccidentAddComponent } from './accident-add/accident-add.component';
import { AccidentDetailComponent } from './accident-detail/accident-detail.component';
import { AccidentEditComponent } from './accident-edit/accident-edit.component';
import { AccidentListComponent } from './accident-list/accident-list.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [AccidentComponent, AccidentAddComponent, AccidentDetailComponent, AccidentEditComponent, AccidentListComponent],
  imports: [
    CommonModule,
    AccidentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    DataTablesModule
  
  ]
})
export class AccidentModule { }
