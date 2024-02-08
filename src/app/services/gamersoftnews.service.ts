import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamersoftnewsService {

  protected url: string = '';

  constructor(private http: HttpClient) {
    this.url = 'https://api-post-news-basic.vercel.app/api/news';
  }

  traerDatos() {
    return this.http.get(this.url);
  }


  traerPost(cod_news: number): Observable<any> {
    return this.http.get(`${this.url}/detailspost/${cod_news}`);
  }
}
