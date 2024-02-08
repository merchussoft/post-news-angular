import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MenuHeaderComponent } from './layout/menu-header/menu-header.component';
import { GamersoftnewsComponent } from './layout/gamersoftnews/gamersoftnews.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuHeaderComponent,
    GamersoftnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
