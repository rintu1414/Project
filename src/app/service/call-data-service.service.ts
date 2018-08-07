import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallDataServiceService {
  private uploadFile = new BehaviorSubject<any>([]);
  private sraUrl: string;
  todos: Observable<any[]>;
  private dataStore: {
    todos: any[]
  };

  constructor(private http: HttpClient) {
    this.todos = this.uploadFile.asObservable();
}

callEndPoint() {


return this.http.get
('http://Srapmapp-env.gxae5mhw6a.us-east-2.elasticbeanstalk.com/risk').
subscribe((data) => {
console.log(data);
  });

}
}
