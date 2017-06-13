import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { TableComponent } from './table/table.component';

import { HttpServiceService } from './service/http-service.service';
import { PushNotificationsModule } from 'angular2-notifications';

import { MyDatePickerModule } from '../../node_modules/mydatepicker/src/my-date-picker/my-date-picker.module';
import { ColorPickerModule } from 'angular2-color-picker';
import { DateTimePickerModule } from 'ng2-date-time-picker';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { FileSelectDirective } from 'ng2-file-upload';

import { GoogleAnalyticsEventsService } from "./google-analytics-events.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    FileSelectDirective,
    TableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PushNotificationsModule,
    AppRoutingModule,
    MyDatePickerModule,
    ColorPickerModule,
    DateTimePickerModule,
    Ng2SmartTableModule
  ],
  providers: [ HttpServiceService, GoogleAnalyticsEventsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
