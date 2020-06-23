import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpertsComponent } from './dashboard/experts/experts.component';
import { KeywordsComponent } from './dashboard/keywords/keywords.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardViewComponent } from './dashboard/dashboard-view/dashboard-view.component';
import { MainComponent } from './dashboard/main/main.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExpertsComponent,
    KeywordsComponent,
    DashboardViewComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
