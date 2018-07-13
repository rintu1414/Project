import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import {UploadComponent} from '../upload/upload.component';
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  constructor(
   private dialogRef: MatDialogRef<UploadComponent>
  ) {}
  ngOnInit() {
  }
  /*close() {
    this.dialogRef.close();
  }*/
}
