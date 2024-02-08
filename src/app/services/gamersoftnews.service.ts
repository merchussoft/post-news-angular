import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

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
}
