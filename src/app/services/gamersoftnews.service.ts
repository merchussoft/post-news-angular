import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamersoftnewsService {

  protected url_api: string = '';
  protected headers_send: any;

  constructor(private http: HttpClient) {
    this.url_api = 'https://apigamerpostnewspruebas.vercel.app/api/news';
    this.headers_send = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })

  }

  traerDatos() {
    return this.http.get(this.url_api);
  }


  traerPost(cod_news: number): Observable<any> {
    return this.http.get(`${this.url_api}/detailspost/${cod_news}`);
  }

  subirPost(submitGamerPostNew: {}): Observable<any> {
    return this.http.post(`${this.url_api}/savenews`, submitGamerPostNew, {headers: this.headers_send});
  }
}
