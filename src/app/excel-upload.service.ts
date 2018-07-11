import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExcelUploadService {
  arrayBuffer: any;
  uploadData;
  fileReader: FileReader = new FileReader();
  fileData;

  dataArr: any =
    [
      {
        'ID': '001',
        'Name': 'Eurasian Collared-Dove',
        'Type': 'Dove',
        'Status': 'Streptopelia'
      },
      {
        'ID': '002',
        'Name': 'Bald Eagle',
        'Type': 'Hawk',
        'Status': 'Haliaeetus leucocephalus'
      },
      {
        'ID': '003',
        'Name': 'Cooper\'s Hawk',
        'Type': 'Hawk',
        'Status': 'Accipiter cooperii'
      }
    ];

  constructor() {
    this.fileReader.onload = (e) => {
      this.arrayBuffer = this.fileReader.result;
      console.log('E', e);
      const data: Uint8Array = new Uint8Array(this.arrayBuffer);
      const arr = new Array();
      for (let i = 0; i !== data.length; ++i) {
        arr[i] = String.fromCharCode(data[i]);
      }
      const bstr = arr.join('');
      const workbook = XLSX.read(bstr, {type: 'binary'});
      const first_sheet_name = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[first_sheet_name];
      this.fileData = XLSX.utils.sheet_to_json(worksheet, {raw: true});
      console.log(this.fileData);
      this.uploadFile.next(this.fileData);
    };

  }


  private uploadFile = new BehaviorSubject<any>(this.dataArr);
  public uploadFile$ = this.uploadFile.asObservable();

  uploadExcel(file: File) {
    this.fileReader.readAsArrayBuffer(file);
  }
}

