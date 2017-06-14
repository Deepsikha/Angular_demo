import {Component, Injectable, OnInit} from '@angular/core';
import {UserModel} from '../model/UserModel';
import {HttpServiceService} from '../service/http-service.service';
import { Router } from '@angular/router';
import { IMyDpOptions } from '../../../node_modules/mydatepicker/src/my-date-picker/interfaces/my-options.interface';
import { MapTypeStyle } from '@agm/core/services/google-maps-types';
import { AuthService } from 'angular2-social-login'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})

export class RegisterComponent implements OnInit {

  lat = 21.1702;
  long = 72.8311;

  public user;
  sub: any;

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

  public maptypestyle: MapTypeStyle = {
    stylers: [{
      color: 'black',
      gamma: 2,
      invert_lightness: true,
      lightness: 1 ,
      saturation: 2,
      weight: 10
    }],
    elementType: 'all',
    featureType: 'all'
  };

  constructor(
    private _auth: AuthService,
    private router: Router,
    private httpService: HttpServiceService,
  ) {
  }

  ngOnInit() {
  }

  public signIn(provider){
    this.sub = this._auth.login(provider).subscribe(
      (data) => {
        console.log(data);this.user=data;}
    )
  }

  public logout(){
    this._auth.logout().subscribe(
      (data)=>{console.log(data);this.user=null;}
    )
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

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
