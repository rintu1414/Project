import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallDataServiceService {

  private printers: BehaviorSubject<String[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) {
}

public callEndPoint() {

const options = new HttpHeaders()
                .set('applicationName', 'pmapp');

return this.http.get<String>("Srapmapp-env.gxae5mhw6a.us-east-2.elasticbeanstalk.com/pm",{headers:options}).subscribe(printers: String) => {
      console.log(printers);
  }

}
}
