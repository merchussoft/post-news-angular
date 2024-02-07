import { Routes } from '@angular/router';
import {GamersoftnewsComponent} from "./layout/gamersoftnews/gamersoftnews.component";


export const routes: Routes = [
  {path: 'gamesoftnews', component: GamersoftnewsComponent},
  {path: '', redirectTo: '/gamesoftnews', pathMatch: 'full'},
];
