import {Component, OnInit} from '@angular/core';
import * as XLSX from 'xlsx';
import {read, write, utils} from 'xlsx';
import {ExcelUploadService} from './excel-upload.service';
import { Subscription } from 'rxjs/Subscription';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  arrayBuffer: any;

  dataArr =
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

  constructor(public uploadService: ExcelUploadService) {

  }

  ngOnInit() {
    this.uploadService.uploadFile.subscribe(
      (file: File) => {
        let fileReader = new FileReader();
        fileReader.onload = (e) => {
          this.arrayBuffer = fileReader.result;
          let data = new Uint8Array(this.arrayBuffer);
          let arr = new Array();
          for (let i = 0; i !== data.length; ++i) arr[i] = String.fromCharCode(data[i]);
          let bstr = arr.join('');
          let workbook = XLSX.read(bstr, {type: 'binary'});
          let first_sheet_name = workbook.SheetNames[0];
          let worksheet = workbook.Sheets[first_sheet_name];
          console.log(XLSX.utils.sheet_to_json(worksheet, {raw: true}));
          this.dataArr = XLSX.utils.sheet_to_json(worksheet, {raw: true});
          console.log(this.dataArr);
        }
        fileReader.readAsArrayBuffer(file);
      }
    );
  }


}
