import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccidentVictimComponent } from './accident-victim.component';
import { AccidentVictimAddComponent } from './accident-victim-add/accident-victim-add.component';
import { AccidentVictimDetailComponent } from './accident-victim-detail/accident-victim-detail.component';
import { AccidentVictimEditComponent } from './accident-victim-edit/accident-victim-edit.component';
import { AccidentVictimListComponent } from './accident-victim-list/accident-victim-list.component';


const routes: Routes = [

  { path: '', component: AccidentVictimComponent, data: { title: 'AccidentVictim' } },
  { path: 'detail', component:  AccidentVictimDetailComponent, data: { title: 'AccidentVictim Detail' } },
  { path: 'edit', component: AccidentVictimEditComponent, data: { title: 'AccidentVictim Edit' } },
  { path: 'add', component: AccidentVictimAddComponent, data: { title: 'AccidentVictim Add' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccidentVictimRoutingModule { }
