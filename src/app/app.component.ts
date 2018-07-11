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

  dataArr;

  constructor(public uploadService: ExcelUploadService) {

  }

  ngOnInit() {
    this.uploadService.uploadFile$.subscribe(
      (file: File) => {
        console.log(file);
        this.dataArr = file;
      }
    );
  }


}
