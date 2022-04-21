import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class RssService {
  constructor( private http: HttpClient,) { }
  apiUrl='http://localhost:3000'

  getRssFlux(){
    return this.http.get(`${this.apiUrl}/rss`)
  }
}
