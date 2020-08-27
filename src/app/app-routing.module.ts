import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StaffComponent } from './staff/staff.component';
import { StaffDetailsComponent } from './staff-details/staff-details.component';
import { StaffAddComponent } from './staff-add/staff-add.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'staff',
    pathMatch : 'full'
  },
  {
    path : 'staff',
    component : StaffComponent
  },
  {
    path : 'staff{id}',
    component : StaffDetailsComponent
  },
  {
    path : 'add',
    component : StaffAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
