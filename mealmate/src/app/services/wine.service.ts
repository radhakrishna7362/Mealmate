import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WineService {

  constructor(private http:HttpClient) { }

  getFallWineBundle(){
    return this.http.get("http://localhost:3000/fallwinebundle/menu");
  }

  getMainFallWineBundle(){
    return this.http.get("http://localhost:3000/fallwinebundle/home");
  }

  getAFallWineBundle(id){
    return this.http.get(`http://localhost:3000/fallwinebundle/particular/${id}`);
  }
}
