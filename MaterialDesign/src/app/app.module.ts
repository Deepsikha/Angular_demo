import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

import { AppComponent } from './app.component';

import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
@NgModule({
  declarations: [
    AppComponent,
    DialogExampleComponent,
    SnackBarComponent
  ],
  entryComponents: [
    SnackBarComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
