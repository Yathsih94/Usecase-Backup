import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  url:string="http://localhost:3000/movies";

  constructor(private _http:HttpClient) { }

  getMoviesFromAPI=()=>{
    return this._http.get(this.url)
  }
}
