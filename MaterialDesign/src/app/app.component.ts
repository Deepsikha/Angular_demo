import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
import { MdSnackBar } from '@angular/material';
import {DialogExampleComponent} from './dialog-example/dialog-example.component';
import { SnackBarComponent } from './snack-bar/snack-bar.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    public dialog: MdDialog,
    public snack: MdSnackBar,
    public snackc: MdSnackBar
  ) {}

  openDialog() {
    this.dialog.open(DialogExampleComponent);
  }

  openSnackBar() {
    this.snack.open('hey HOE ARE YOU', 'close', {
      duration: 2000
    })
  }

  openSnackBarComponent() {
    this.snackc.openFromComponent( SnackBarComponent, {
      duration: 2000,
    });
  }
}
