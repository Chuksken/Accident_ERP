import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import { AccidentVictimRoutingModule } from './accident-victim-routing.module';
import { AccidentVictimComponent } from './accident-victim.component';
import { AccidentVictimAddComponent } from './accident-victim-add/accident-victim-add.component';
import { AccidentVictimDetailComponent } from './accident-victim-detail/accident-victim-detail.component';
import { AccidentVictimEditComponent } from './accident-victim-edit/accident-victim-edit.component';
import { AccidentVictimListComponent } from './accident-victim-list/accident-victim-list.component';

@NgModule({
  declarations: [AccidentVictimComponent, AccidentVictimAddComponent, AccidentVictimDetailComponent, AccidentVictimEditComponent, AccidentVictimListComponent],
  imports: [
    CommonModule,
    AccidentVictimRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class AccidentVictimModule { }
