import {Component} from '@angular/core';
import * as XLSX from 'xlsx';
import {read, write, utils} from 'xlsx';
import {ExcelUploadService} from './excel-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrayBuffer: any;
  file: File;
  data =
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

  constructor(private excelUploadService: ExcelUploadService) {

  }

  incomingfile(event) {
    this.file = event.target.files[0];

  }
  uploadExcel() {
    this.excelUploadService.Upload();
  }

}
