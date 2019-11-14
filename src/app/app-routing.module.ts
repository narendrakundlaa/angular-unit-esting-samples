import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccordianComponent } from './shared-components/accordian/accordian.component';
import { CreateFormComponent } from './form/create-form/create-form.component';
import { ListComponent } from './form/list/list.component';
import { DialogBoxComponent } from './shared-components/dialog-box/dialog-box.component';
import { PaginationComponent } from './shared-components/pagination/pagination.component';


const routes: Routes = [
  { path: 'accordian', component: AccordianComponent },
  { path: 'create', component: CreateFormComponent },
  { path: 'list', component: ListComponent },
  { path: 'confirm', component: DialogBoxComponent },
  { path: 'pagination', component: PaginationComponent } // DialogBoxComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
