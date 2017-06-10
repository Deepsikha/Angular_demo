
import { Component, Input, OnChanges } from '@angular/core';

import { HttpService } from '../services/http.service';
import { EmitterService } from '../services/emitter.service';

import { UserModel } from '../userModel';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [ HttpService ]
})
export class AddUserComponent implements OnChanges {

  @Input() userInfo: string;
  @Input() reset: string;
  @Input() userList: string;

  isInsert: any = true;
  userModel: UserModel = new UserModel('', '', '', '');

  constructor(
    private httpService: HttpService
  ) {}

  public addUser() {
    this.httpService.addUser(this.userModel).subscribe(
      response =>  {
        if (response.error) {
          alert(`The user could not be added, server Error.`);
        } else {
          EmitterService.get(this.userList).emit(response.users);
        }
      },
      error => {
        alert(`The user could not be added, server Error = ${error}`);
      }
    );
  }

  public updateUser() {
    this.httpService.updateUser(this.userModel).subscribe(
      response => {
        if (response.error) {
          alert(`The user could not be updated, server Error.`);
        } else {
          EmitterService.get(this.userList).emit(response.users);
        }
      },
      error => {
        alert(`The user could not be updated, server Error = ${error}`);
      }
    );
  }

  public resetAddUser() {
    this.userModel = new UserModel('', '', '', '');
    EmitterService.get(this.reset).emit(true);
    this.isInsert = true;
  }

  ngOnChanges(changes: any) {

    EmitterService.get(this.userInfo).subscribe( (value: UserModel) => {
      this.userModel = new UserModel(value._id, value.name, value.gender, value.country);
      this.isInsert = false;
    });
  }
}
