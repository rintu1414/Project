import { Component, OnInit } from '@angular/core';
import {ExcelUploadService} from '../excel-upload.service';

@Component({
  selector: 'app-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {
 dataArr;
  headerArr;

  constructor(public uploadService: ExcelUploadService) {

  }

  ngOnInit() {
    this.uploadService.uploadFile$.subscribe(
      (file: File) => {
        const header: String[] = [];
        console.log('file');
        console.log(file);
        if (!!file && !!file[0]) {
          this.headerArr = Object.keys(file[0]);
      }
        this.dataArr = file;
      }
    );
  }

}
