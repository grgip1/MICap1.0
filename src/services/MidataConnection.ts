import { Midata } from 'Midata';

import { Injectable } from '@angular/core';


@Injectable()
export class MidataConnection {

private _midata: Midata;

constructor () {
  this._midata = new Midata('https://test.midata.coop', 'MICap', 'livingcase2');
}

login(username, password) {
  this._midata.login(username, password);
 // this._midata.fetchFHIRConformanceStatement();
  console.log(this._midata.authToken);

  }

}
