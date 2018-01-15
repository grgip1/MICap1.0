import { Midata } from 'Midata';
import { Injectable } from '@angular/core';


@Injectable()
export class MidataConnection {

constructor (private midata: Midata) { }

login(username, password) {
  this.midata.login(username, password);
  console.log(this.midata.authToken);
}

}
