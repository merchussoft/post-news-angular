import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GamersoftnewsService {

  protected url: string = '';
  protected headers_send: any;

  constructor(private http: HttpClient) {
    this.url = 'https://apigamerpostnewspruebas.vercel.app/api/news';
    this.headers_send = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })

  }

  traerDatos() {
    return this.http.get(this.url);
  }


  traerPost(cod_news: number): Observable<any> {
    return this.http.get(`${this.url}/detailspost/${cod_news}`);
  }

  subirPost(submitGamerPostNew: {}): Observable<any> {
    return this.http.post(`${this.url}/savenews`, submitGamerPostNew, {headers: this.headers_send});
  }
}
