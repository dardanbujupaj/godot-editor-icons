import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'

import {MatListModule} from '@angular/material/list'
import {MatDividerModule} from '@angular/material/divider'
import {MatSliderModule} from '@angular/material/slider'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {MatMenuModule} from '@angular/material/menu'
import {ScrollingModule} from '@angular/cdk/scrolling'

import { AppComponent } from './app.component';
import { IconBrowserComponent } from './icon-browser/icon-browser.component';
import { IconListComponent } from './icon-list/icon-list.component';
import { IconImageComponent } from './icon-image/icon-image.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatListModule,
    MatDividerModule,
    MatSliderModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
