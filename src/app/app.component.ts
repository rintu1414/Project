import {Component, OnInit} from '@angular/core';
import {ExcelUploadService} from './excel-upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  arrayBuffer: any;

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
          for (const x in file[0]) {
            header.push(x);
          }
        }
        this.dataArr = file;
        this.headerArr = header;
      }
    );
  }


}
