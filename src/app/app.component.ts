import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { Authent } from './authent';
//import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  CONNECTION_STATE: boolean;
  AUTO_LOGIN: boolean;
  authtoken: string;

  credentials = (
    {
      appname: 'MICap',
      device: 'debug',
      secret: 'livingcase2',
      username: '',
      password: '',
      role: 'RESEARCH'
    }
  );


constructor(private http: Http, /*private _router: Router*/) { }


  login() {
    return this.http.post('https://test.midata.coop/v1/auth', this.credentials).map(
      (response) => response.json()).subscribe(
      (data) => console.log(data),
      );

  }




}
