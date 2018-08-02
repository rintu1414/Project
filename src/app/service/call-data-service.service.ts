import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallDataServiceService {


  constructor(private http: HttpClient) {
}

public callEndPoint() {

const options = new HttpHeaders()this.printers: String[]
                .set('applicationName', 'pmapp');

return this.http.get<String>('Srapmapp-env.gxae5mhw6a.us-east-2.elasticbeanstalk.com/pm', {headers: options}).subscribe() => {
      console.log(this.printers);
  }

}
}
