import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SimpleFormComponent } from './app.simpleform';
import { ComplexFormComponent } from './app.complexform';
import { FormValidationComponent } from './app.formvalidations';

import { LoginComponent } from './app.login';
@NgModule({
  declarations: [
    AppComponent,
    FormValidationComponent,
    ComplexFormComponent,
    SimpleFormComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
