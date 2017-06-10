import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserModel } from '../model/UserModel';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class HttpServiceService {

  BASE_URL = 'http://192.168.200.16:8081';

  constructor(
    private http: Http
  ) {}

  public login(body: UserModel) {
    const option = new RequestOptions({
      headers : new Headers({'Content-Type': 'application/json;charset=UTF-8'})
    })
    console.log(body);
    return this.http.post(`${this.BASE_URL}/login`, JSON.stringify(body), option)
      .map((res) => res.json());
  }

  public signUp(body: UserModel) {
    const option = new RequestOptions({
      headers : new Headers({'Content-Type': 'application/json;charset=UTF-8'})
    })
    console.log(body);
    return this.http.post(`${this.BASE_URL}/reg`, JSON.stringify(body), option)
      .map((res) => res.json());
  }
}
