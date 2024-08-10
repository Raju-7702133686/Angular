import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DomManipulationComponent } from './components/dom-manipulation/dom-manipulation.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RealTimeTaskComponent } from './components/real-time-task/real-time-task.component';
import { PopupComponent } from './components/popup/popup.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'',component: LoginComponent},
  {path:'', pathMatch:'full',redirectTo:'login'},
  {path:'dashboard',component:DashboardComponent, children:[
    {path:'parent',component:ParentComponent},
    {path:'child',component:ChildComponent},
    {path:'dom-manipulation', component:DomManipulationComponent},
    {path:'loading', component:LoadingComponent},
    {path:'real-time-task',component:RealTimeTaskComponent},
    {path:'popup', component:PopupComponent},
    {path:'user-card/:id', component:UserCardComponent},
  ]},
  {path:'notfound', component: NotfoundComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
