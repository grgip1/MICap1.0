import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { MidataConnection } from '../../services/MidataConnection';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private midata: MidataConnection, private http: Http) {
  }

  login(uname, pword) {

    this.router.navigate(['/home']);
  // this.midata.login(uname, pword);
  // this.http.get('http://localhost/dashboard/micap/micap.connection.php').subscribe((data) => console.log(data._body), );
  }

  ngOnInit() {
  }

}
