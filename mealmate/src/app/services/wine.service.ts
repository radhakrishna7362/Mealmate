import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  _url="http://localhost:3000"
  constructor(private http:HttpClient) { }

  getFallWineBundle(){
    return this.http.get(`${this._url}/fallwinebundle/menu`);
  }

  getMainFallWineBundle(){
    return this.http.get(`${this._url}/fallwinebundle/home`);
  }

  getAFallWineBundle(id){
    return this.http.get(`${this._url}/fallwinebundle/particular/${id}`);
  }

  getEssentialWine(){
    return this.http.get(`${this._url}/essentialwine/menu`);
  }

  getMainEssentialWine(){
    return this.http.get(`${this._url}/essentialwine/home`);
  }

  getAEssentialWine(id){
    return this.http.get(`${this._url}/essentialwine/particular/${id}`);
  }
}
