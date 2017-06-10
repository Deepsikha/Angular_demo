import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { HttpServiceService } from './service/http-service.service';
import { PushNotificationsModule } from 'angular2-notifications';

import { MyDatePickerModule } from '../../node_modules/mydatepicker/src/my-date-picker/my-date-picker.module';
import { ColorPickerModule } from 'angular2-color-picker';
import { DateTimePickerModule } from 'ng2-date-time-picker';

import { FileSelectDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    MenuComponent,
    FileSelectDirective
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
  ],
  providers: [ HttpServiceService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
