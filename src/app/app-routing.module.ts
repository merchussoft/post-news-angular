import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GamersoftnewsComponent} from "./layout/gamersoftnews/gamersoftnews.component";
import {DetailpostComponent} from "./layout/detailpost/detailpost.component";
import {CreatePostComponent} from "./layout/create-post/create-post.component";

const routes: Routes = [
  {path: '', component: GamersoftnewsComponent},
  {path: 'detailpost/:cod_news', component: DetailpostComponent},
  {path: 'create_post', component: CreatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
