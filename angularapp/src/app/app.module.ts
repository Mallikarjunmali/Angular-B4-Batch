import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessfulAlertComponent } from './successful-alert/successful-alert.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { DemodirectivesComponent } from './demodirectives/demodirectives.component';
import { NgSwitchassignmentComponent } from './ng-switchassignment/ng-switchassignment.component';
import { AttriComponent } from './attri/attri.component';
import { CustdirDirective } from './custdir.directive';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessfulAlertComponent,
    WarningAlertComponent,
    DataBindingComponent,
    DemodirectivesComponent,
    NgSwitchassignmentComponent,
    AttriComponent,
    CustdirDirective,
    DemoComponent
    
  ],
  imports:[
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
