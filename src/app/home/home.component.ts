import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MidataConnection } from '../../services/MidataConnection';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private midata: MidataConnection, private http: Http) {
  }

  login(uname, pword) {
  this.midata.login(uname, pword);
  //this.http.get('http://localhost/dashboard/micap/micap.connection.php').subscribe((data) => console.log(data._body), );
  }

  ngOnInit() {
  }

}
