import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectModule } from 'ng2-select';

import { AccidentRoutingModule } from './accident-routing.module';
import { AccidentComponent } from './accident.component';
import { AccidentAddComponent } from './accident-add/accident-add.component';
import { AccidentDetailComponent } from './accident-detail/accident-detail.component';
import { AccidentEditComponent } from './accident-edit/accident-edit.component';
import { AccidentListComponent } from './accident-list/accident-list.component';

@NgModule({
  declarations: [AccidentComponent, AccidentAddComponent, AccidentDetailComponent, AccidentEditComponent, AccidentListComponent],
  imports: [
    CommonModule,
    AccidentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule
  ]
})
export class AccidentModule { }
