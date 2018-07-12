import {Component} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { UploadComponent } from './upload/upload.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


constructor(public dialog: MatDialog) {}

openUploadDialogue = () => {
let uploadRef = this.dialog.open(UploadComponent, {
                                                  height: '400px',
                                                  width: '600px',
                                                });
}
}
