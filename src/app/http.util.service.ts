import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpUtil {

  constructor(
    private httpClient: HttpClient) {

  }

  getHttpClientVersion(url: string): Observable<any> {
    return this.httpClient.get(url, {
      headers: new HttpHeaders().set('Authorization', `.............`),
      withCredentials: true
    });
  }
  postHttpClientVersion(url: string, body: any): Observable<any> {
    return this.httpClient.post(url, body, {
      headers: new HttpHeaders().set('Authorization', `.............`),
      withCredentials: true
    });
  }
}
