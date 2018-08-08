import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {ExcelUploadService} from '../excel-upload.service';

@Injectable({
  providedIn: 'root'
})
export class CallDataServiceService {
  private uploadFile = new BehaviorSubject<any>([]);
  private sraUrl: string;
  private excelUpload: ExcelUploadService;
  todos: Observable<any[]>;
  private dataStore: {
    todos: any[]
  };

  constructor(private http: HttpClient, private excelService: ExcelUploadService) {
    this.todos = this.uploadFile.asObservable();
    this.excelUpload = excelService;
}

callEndPoint() {


return this.http.get
('/risk').
subscribe((data) => {
console.log(data);
  this.excelUpload.uploadFile.next(data);

  });

}

}
