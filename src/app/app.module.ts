import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient, HttpClientJsonpModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import {ExcelUploadService} from './excel-upload.service';
import { UploadComponent } from './upload/upload.component';
import { DataviewComponent } from './dataview/dataview.component';
import {DataTableModule} from 'angular-6-datatable';
import { NgProgressModule } from 'ngx-progressbar';
import { MatDialog, MatDialogModule, MatCardModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { CardComponent } from './card/card.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import {HammertimeDirective} from './card/hammertime.directive';
import {FormsModule} from '@angular/forms';
import {CallDataServiceService} from './service/call-data-service.service';


export class MyHammerConfig extends HammerGestureConfig  {
  overrides = <any>{
    // override hammerjs default configuration
    'swipe': { direction: Hammer.DIRECTION_ALL  }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DataviewComponent,
    ModalComponent,
    CardComponent,
    HammertimeDirective
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    MatDialogModule,
    NgProgressModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    HttpModule,
    HttpClientJsonpModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [ExcelUploadService, CallDataServiceService, MatDialog,
      { provide: HAMMER_GESTURE_CONFIG, useClass: MyHammerConfig }],
  entryComponents: [UploadComponent, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
