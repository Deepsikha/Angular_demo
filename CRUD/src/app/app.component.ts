
import { Component } from '@angular/core';

import { EmitterService } from './services/emitter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {

  title = 'Angular 2, Nodejs & MongoDB CRUD';

  userInfo = 'CRUD_USER_INFO';
  reset = 'CRUD_RESET_FORM';
  userList = 'CRUD_USER_LIST';

  constructor(private _: EmitterService) {}
}
