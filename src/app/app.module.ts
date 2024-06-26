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
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { DetailpostComponent } from './layout/detailpost/detailpost.component';
import { CreatePostComponent } from './layout/create-post/create-post.component';
import {FormsModule} from "@angular/forms";

import {MesAbreviadoPipe} from "./pipes/mes-abreviado-pipe";
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './layout/login/login.component';
import { InvitameuncafebuttomComponent } from './layout/invitameuncafebuttom/invitameuncafebuttom.component';
import { MenuCategoriasComponent } from './layout/menu-categorias/menu-categorias.component';
import { ReplaceSpacesPipe } from './pipes/replace-spaces.pipe';
import { ReplaceCaracterSpecialPipe } from './pipes/replace-caracter-special.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MenuHeaderComponent,
    GamersoftnewsComponent,
    DetailpostComponent,
    CreatePostComponent,
    LoginComponent,
    InvitameuncafebuttomComponent,
    MenuCategoriasComponent,
    ReplaceSpacesPipe,
    ReplaceCaracterSpecialPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    CKEditorModule,
    FormsModule,
    MesAbreviadoPipe,
    NgxPaginationModule
  ],
  providers: [
    GamersoftnewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
