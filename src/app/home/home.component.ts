import { MidataConnection } from './../../services/MidataConnection';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private midata: MidataConnection) { }

  login(uname, pword) {
    this.midata.login(uname, pword);
  }

  ngOnInit() {
  }

}
