import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccidentComponent } from './accident.component';
import { AccidentAddComponent } from './accident-add/accident-add.component';
import { AccidentDetailComponent } from './accident-detail/accident-detail.component';
import { AccidentEditComponent } from './accident-edit/accident-edit.component';
import { AccidentListComponent } from './accident-list/accident-list.component';

const routes: Routes = [
  { path: '', component: AccidentComponent, data: { title: 'Accident' } },
  //{ path: '', component: TerminalComponent, data: { title: 'Terminal' } },
  { path: 'detail', component: AccidentDetailComponent, data: { title: 'Accident Detail' } },
  { path: 'edit', component: AccidentEditComponent, data: { title: 'Accident Edit' } },
  { path: 'add', component: AccidentAddComponent, data: { title: 'Accident Add' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentRoutingModule { }
