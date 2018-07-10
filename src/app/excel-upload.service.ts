import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import {Subject} from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ExcelUploadService {
  arrayBuffer: any;
  uploadData;

  constructor() { }

  /*Upload(file: File): Observable<String> {
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.arrayBuffer = fileReader.result;
      let data = new Uint8Array(this.arrayBuffer);
      let arr = new Array();
      for (let i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      let bstr = arr.join('');
      let workbook = XLSX.read(bstr, {type: 'binary'});
      let first_sheet_name = workbook.SheetNames[0];
      let worksheet = workbook.Sheets[first_sheet_name];
      console.log(XLSX.utils.sheet_to_json(worksheet, {raw: true}));

    };

    fileReader.readAsArrayBuffer(file);
    console.log(this.uploadData);
    return of(this.uploadData);
  }*/

  uploadFile = new Subject<File>();

  uploadExcel(file: File) {
     this.uploadFile.next(file);
  }
}
