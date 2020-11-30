import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http:HttpClient) { }

  getFallWineBundle(){
    return this.http.get(`/fallwinebundle/menu`);
  }

  getMainFallWineBundle(){
    return this.http.get(`/fallwinebundle/home`);
  }

  getAFallWineBundle(id){
    return this.http.get(`/fallwinebundle/particular/${id}`);
  }

  getEssentialWine(){
    return this.http.get(`/essentialwine/menu`);
  }

  getMainEssentialWine(){
    return this.http.get(`/essentialwine/home`);
  }

  getAEssentialWine(id){
    return this.http.get(`/essentialwine/particular/${id}`);
  }
}
