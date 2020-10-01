import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { IconBrowserComponent } from './icon-browser/icon-browser.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconImageComponent } from './icon-image/icon-image.component';

@NgModule({
  declarations: [
    AppComponent,
    IconBrowserComponent,
    IconListComponent,
    IconImageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
