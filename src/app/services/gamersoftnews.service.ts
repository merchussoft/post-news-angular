import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class GamersoftnewsService {

  protected url_api: string = '';
  protected headers_send: any;



  constructor(private http: HttpClient) {
    this.url_api = environment.URL_API;
    this.headers_send = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  }

  traerDatos() {
    return this.http.get(`${this.url_api}/post`);
  }


  traerPost(cod_news: number): Observable<any> {
    return this.http.get(`${this.url_api}/post/detailspost/${cod_news}`);
  }

  subirPost(submitGamerPostNew: {}): Observable<any> {
    return this.http.post(`${this.url_api}/post/savenews`, submitGamerPostNew, {headers: {'Access-Control-Allow-Origin': '*'}});
  }

  categories(): Observable<any> {
    return this.http.get(`${this.url_api}/categories`)
  }
}
