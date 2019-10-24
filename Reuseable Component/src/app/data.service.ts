import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  postLeavesToApi = (fromDate, toDate) => {
    let obj = {
      "start": fromDate,
      "end": toDate
    }
    return this._http.post("http://localhost:3000/leaves", obj);
  }

  getDataFromApi = () => {
    return this._http.get<any>("http://localhost:3000/leaves")
  }






}
