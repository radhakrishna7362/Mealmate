import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  feedback(data){
    return this.http.post<any>(`/contact/feedback`,data);
  }
}
