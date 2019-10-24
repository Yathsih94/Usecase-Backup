import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getDataFromApi = (email) => {
    return this._http.get<any>("http://localhost:3000/register?" + "email=" + email);
  }

  getEmployees = () => {
    return this._http.get<[]>("http://localhost:3000/Employees")
  }

  addEmpData = (obj) => {

    return this._http.post("http://localhost:3000/Employees", obj)
  }

  updateEmpData = (id, obj) => {

    return this._http.patch("http://localhost:3000/Employees/" + id, obj)
  }

  deleteEmpData = (id) => {
    return this._http.delete("http://localhost:3000/Employees/" + id)
  }


}
