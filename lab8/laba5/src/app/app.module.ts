import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DialogDataExampleDialog, UserInfoDialog} from './popup/popup';
import {MatDialogModule} from "@angular/material/dialog";
import {ListComponent} from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoDialog,
    ListComponent,
    DialogDataExampleDialog
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,

  ],
  providers: [UserInfoDialog],
  bootstrap: [AppComponent]
})
export class AppModule {
}
