import { Component, OnInit, transition, trigger, style, state, animate } from '@angular/core';
import { HttpServiceService } from '../service/http-service.service';
import { Router } from '@angular/router';
import { UserModel } from '../model/UserModel';
import { PushNotificationsService } from 'angular2-notifications';
import { IMyDpOptions, IMyOptions } from '../../../node_modules/mydatepicker/src/my-date-picker/interfaces/my-options.interface';
import { ColorPickerDirective, ColorPickerService, Rgba} from 'angular2-color-picker';
import { DateTimePickerDirective } from 'ng2-date-time-picker';
import { FileUploader} from 'ng2-file-upload/ng2-file-upload';

export class Cmyk {
  constructor(public c: number, public m: number, public y: number, public k: number) { }
}

const URL = 'http://localhost:8001/api/upload';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ HttpServiceService ],
})
export class LoginComponent implements OnInit {
  userModel: UserModel = new UserModel('', '', '', '', '');

  public momentValue: any;

  private uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  public myDPPicker: IMyDpOptions = {
    dateFormat: 'dd.mm.yyyy',
    firstDayOfWeek: 'su',
    disableUntil: { year: 2017, month: 5, day: 1 },
    sunHighlight: true,
    satHighlight: true,
    showWeekNumbers: true,
    width: '80%'
  };

  public color = '#2889e9';
  public color2 = 'hsla(300,82%,52%)';
  public color3 = '#fff500';
  public color4 = 'rgb(236,64,64)';
  public color5 = 'rgba(45,208,45,1)';
  public color6 = '#1973c0';
  public color7 = '#f200bd';
  public color8 = '#a8ff00';
  public color9 = '#278ce2';
  public color10 = '#0a6211';
  public color11 = '#f2ff00';
  public color12 = '#f200bd';
  public color13 = '#1973c0';
  public color14 = '#a8ff00';
  public color15 = '#a51ad6a3';

  public arrayColors: any = {};
  public selectedColor = 'color';

  public toggle: boolean;
  public toggle2: boolean;
  public lastColor = '#ff0';
  public cmyk: Cmyk = new Cmyk(0, 0, 0, 0);

  constructor(
    private notify: PushNotificationsService,
    private router: Router,
    private httpService: HttpServiceService,
    private cpService: ColorPickerService
  ) {
    notify.requestPermission();
    this.arrayColors['color'] = '#2883e9';
    this.arrayColors['color2'] = '#e920e9';
    this.arrayColors['color3'] = 'rgb(255,245,0)';
    this.arrayColors['color4'] = 'rgb(236,64,64)';
    this.arrayColors['color5'] = 'rgba(45,208,45,1)';
  }


  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {file.withCredentials = false; };

    this.uploader.onCompleteItem = (item: any, response: any, headers: any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };
  }

  noti() {
    const options = {
      body: 'Demo app Login!',
      icon: 'assets/images/image.jpg'
    };
    const notify = this.notify.create('Login', options).subscribe();
  }

  public handleLogin() {
    console.log(`Press login`);
    this.httpService.login(this.userModel).subscribe(
      res => {
        console.log(res);
        if (res['message'] === 'success') {
          this.router.navigate(['register']);
        } else {
          this.noti();
        }
      },
      error => {
        alert(`Error in api `);
        this.noti();
      }
    );
  }

  public handleCancel() {
    this.router.navigate(['menu']);
  }

  gotoSignup() {
    this.router.navigate(['register']);
  }

  onChangeColor(color: string): Cmyk {
    return this.rgbaToCmyk(this.cpService.hsvaToRgba(this.cpService.stringToHsva(color)));
  }

  rgbaToCmyk(rgba: Rgba): Cmyk {
    const cmyk: Cmyk = new Cmyk(0, 0, 0, 0);
    let k: number;
    k = 1 - Math.max(rgba.r, rgba.g, rgba.b);
    if (k === 1) {
      return new Cmyk(0, 0, 0, 1);
    }
    cmyk.c = (1 - rgba.r - k) / (1 - k);
    cmyk.m = (1 - rgba.g - k) / (1 - k);
    cmyk.y = (1 - rgba.b - k) / (1 - k);
    cmyk.k = k;
    return cmyk;
  }

  onChangeColorHex8(color: string): string {
    return this.cpService.outputFormat(this.cpService.stringToHsva(color, true), 'rgba', true);
  }

  public setMoment(moment: any): any {
    this.momentValue = moment;
  }
}
