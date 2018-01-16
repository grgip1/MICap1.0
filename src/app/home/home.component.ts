import { MidataConnection } from './../../services/MidataConnection';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Authent2} from './authent2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  bundle: JSON;



  constructor(private midata: MidataConnection, private http: Http) {
  }

  login(uname, pword) {
    this.midata.login(uname, pword);
    // this.http.get('http://localhost/dashboard/micap/micap.connection.php').subscribe((data) => console.log(data._body), );
  }

  selectFile() {

    document.getElementById('files')

  }

  data = (
    {
      midatastudy_id: 'qwer',
      id1: '45',
      effectivedatetime1: '19.05.2028',
      trynb: '1',
      nbinvertedconnections: '1',
      nberrors: '25648',
      nbcorrections: '548',
      score: '6699',
      nbcorrecttries: '0',
      duration1: '45678'
    }
  );

  pushRedcap() {
    this.http.get('http://localhost/dashboard/micap/REDCap_Test.php');
  }





  ngOnInit() {

    var json;

    var bundle: JSON;

    document.getElementById('files').addEventListener('change', handleFileSelect, false);

    function handleFileSelect(evt) {
      var files = evt.target.files; // FileList object

      // files is a FileList of File objects. List some properties.
      var output = [];
      for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();

        // Closure to capture the file information.
        reader.onload = (function (theFile) {
          return function (e) {
            console.log('e readAsText = ', e);
            console.log('e readAsText target = ', e.target.result);
            bundle = e;
            try {

              json = JSON.parse(e.target.result);
              this.
                alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(json));
            } catch (ex) {
              alert('ex when trying to parse json = ' + ex);
            }
          }
        })(f);
        reader.readAsText(f);
      }

    }
    this.midata.createfhir(bundle);
    document.getElementById('files').addEventListener('change', handleFileSelect, false);

  }
}
