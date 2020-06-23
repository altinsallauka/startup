import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpertsComponent } from './dashboard/experts/experts.component';
import { KeywordsComponent } from './dashboard/keywords/keywords.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children:[
        {path:'', redirectTo:'dashboard',pathMatch:'full'},
        {path: 'dashboard', component:DashboardViewComponent},
        {path: 'experts', component:ExpertsComponent},
        {path: 'keywords', component:KeywordsComponent},
      ],
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }