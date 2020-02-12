import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardOneComponent} from './dashboard/dashboard-one/dashboard-one.component';
import {DashboardTwoComponent} from './dashboard/dashboard-two/dashboard-two.component';
import {DashboardThreeComponent} from './dashboard/dashboard-three/dashboard-three.component';
import {DashboardFourComponent} from './dashboard/dashboard-four/dashboard-four.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'dashboard-one', pathMatch: 'full'
  },
  {
    path: 'dashboard-one',
    component: DashboardOneComponent
  },
  {
    path: 'dashboard-two',
    component: DashboardTwoComponent
  },
  {
    path: 'dashboard-three',
    component: DashboardThreeComponent
  },
  {
    path: 'dashboard-four',
    component: DashboardFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
