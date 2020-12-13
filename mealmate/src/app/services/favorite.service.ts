import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  _url="http://localhost:3000/favourite";
  constructor(private http:HttpClient) { }

  addFav(fav){
    return this.http.post<any>(`${this._url}/add`,fav);
  }

  getFav(fav){
    return this.http.get<any>(`${this._url}/get/${fav}`);
  }

  deleteFav(id){
    return this.http.delete<any>(`${this._url}/remove/${id}`);
  }

  clearFav(fav){
    return this.http.delete<any>(`${this._url}/removeAll/${fav[0].userid}`);
  }

  deleteFavs(userid){
    return this.http.delete<any>(`${this._url}/removeAll/${userid}`);
  }
}
