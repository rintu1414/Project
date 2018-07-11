import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ExcelUploadService} from './excel-upload.service';
import { UploadComponent } from './upload/upload.component';
import { DataviewComponent } from './dataview/dataview.component';
import {DataTableModule} from 'angular-6-datatable';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DataviewComponent,
  ],
  imports: [
    BrowserModule,
    DataTableModule
  ],
  providers: [ExcelUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
