import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccidentCauseComponent } from './accident-cause.component';
import { AccidentCauseAddComponent } from './accident-cause-add/accident-cause-add.component';
//import { AccidentCauseAddComponent } from './accident-cause-add/accident-cause-add.component';
import { AccidentCauseEditComponent } from './accident-cause-edit/accident-cause-edit.component';
import { AccidentCauseDetailComponent } from './accident-cause-detail/accident-cause-detail.component';
import { AccidentCauseListComponent } from './accident-cause-list/accident-cause-list.component';

const routes: Routes = [

  { path: '', component: AccidentCauseComponent, data: { title: 'AccidentCause' } },
  { path: 'detail', component: AccidentCauseDetailComponent, data: { title: 'Accident Detail' } },
  { path: 'edit', component: AccidentCauseEditComponent, data: { title: 'Accident Edit' } },
  { path: 'add', component: AccidentCauseAddComponent, data: { title: 'Accident Add' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentCauseRoutingModule { }
