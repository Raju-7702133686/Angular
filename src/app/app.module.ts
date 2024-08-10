import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DomManipulationComponent } from './components/dom-manipulation/dom-manipulation.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { LoadingComponent } from './components/loading/loading.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { RealTimeTaskComponent } from './components/real-time-task/real-time-task.component';
import { PopupComponent } from './components/popup/popup.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ParentComponent,
    ChildComponent,
    DomManipulationComponent,
    NotfoundComponent,
    LoadingComponent,
    UserCardComponent,
    RealTimeTaskComponent,
    PopupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
