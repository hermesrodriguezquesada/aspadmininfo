import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MainadminComponent } from './layouts/mainadmin/mainadmin.component';

const routes: Routes = [
  { path: '', component:DashboardComponent},
  { path: 'site', component: MainadminComponent, children: [
    { path: 'dashboard', component: DashboardComponent, data: { pageTitle: 'Dashboard', menuActive: 'dashboard'} 
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
