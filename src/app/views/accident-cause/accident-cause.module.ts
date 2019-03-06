import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccidentCauseRoutingModule } from './accident-cause-routing.module';
import { AccidentCauseComponent } from './accident-cause.component';
import { AccidentCauseAddComponent } from './accident-cause-add/accident-cause-add.component';
import { AccidentCauseEditComponent } from './accident-cause-edit/accident-cause-edit.component';
import { AccidentCauseDetailComponent } from './accident-cause-detail/accident-cause-detail.component';
import { AccidentCauseListComponent } from './accident-cause-list/accident-cause-list.component';

@NgModule({
  declarations: [AccidentCauseComponent, AccidentCauseAddComponent, AccidentCauseEditComponent, AccidentCauseDetailComponent, AccidentCauseListComponent],
  imports: [
    CommonModule,
    AccidentCauseRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccidentCauseModule { }
