import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KitchentoolsService {

  constructor(private http:HttpClient) { }

  getKitchenTools(){
    return this.http.get<any>(`/kitchen/menu`)
  }

  getMainKitchenTools(){
    return this.http.get<any>(`/kitchen/home`);
  }

  getAKitchenTool(id){
    return this.http.get<any>(`/kitchen/particular/${id}`);
  }
  
}
