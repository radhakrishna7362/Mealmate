import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _url="http://localhost:3000/contact";

  constructor(private http:HttpClient) { }

  feedback(data){
    return this.http.post(`${this._url}/feedback`,data);
  }
}
