import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from "@angular/common/http";

import {GamersoftnewsService} from "./services/gamersoftnews.service";

import { FooterComponent } from './layout/footer/footer.component';
import { MenuHeaderComponent } from './layout/menu-header/menu-header.component';
import { GamersoftnewsComponent } from './layout/gamersoftnews/gamersoftnews.component';

import { NgxSpinnerModule} from 'ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuHeaderComponent,
    GamersoftnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [
    GamersoftnewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
