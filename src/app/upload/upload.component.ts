import { Component, OnInit } from '@angular/core';
import {ExcelUploadService} from '../excel-upload.service';
import {CallDataServiceService} from '../service/call-data-service.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  file: File;
  constructor(public uploadService: ExcelUploadService, public  callDataService: CallDataServiceService) { }

  ngOnInit() {
  }

  incomingfile(event) {
    console.log(event);
    this.file = event.target.files[0];
  }
  uploadExcel() {
    this.uploadService.uploadExcel(this.file);
  }
  hitService() {
    this.callDataService.callEndPoint();
  }
}
