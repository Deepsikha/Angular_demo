import { Component, OnInit } from '@angular/core';
import {UserModel} from '../model/UserModel';
import {HttpServiceService} from '../service/http-service.service';
import { Router } from '@angular/router';
import { IMyDpOptions } from '../../../node_modules/mydatepicker/src/my-date-picker/interfaces/my-options.interface';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel: UserModel = new UserModel('', '', '', '', '');
  public myDPPicker: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    firstDayOfWeek: 'su',
    disableUntil: { year: 2010, month: 5, day: 1 },
    sunHighlight: true,
    satHighlight: true,
    showWeekNumbers: true,
    minYear: 2017,
    maxYear: 2010
  };
  constructor(
    private router: Router,
    private httpService: HttpServiceService
  ) { }
  ngOnInit() {

  }

  public handlesignUp() {
    this.httpService.signUp(this.userModel).subscribe(
      res => {
        console.log(res);
        if (res['resp'] === 'Success') {
          this.router.navigate(['login']);
        } else {
        }
      },
      error => {
        alert(`Error in api:${error}`);
      }
    );
  }

}
