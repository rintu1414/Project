import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ExcelUploadService} from './excel-upload.service';
import { UploadComponent } from './upload/upload.component';
import { AngularDraggableModule } from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    AngularDraggableModule
  ],
  providers: [ExcelUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
