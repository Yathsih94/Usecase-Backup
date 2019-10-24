import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './loan/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userObj = [];
  display: boolean;
  constructor(private _http: HttpClient) { }

  getAllCategories = () => {
    return this._http.get<any>("http://10.117.189.210:9090/ing-mortgage/categories/");
  }

  getAllProducts = (catId) => {
    return this._http.get<any>("http://10.117.189.210:9090/ing-mortgage/categories/" + catId + "/products");
  }

  getSelectedProd = (pid) => {
    return this._http.get<any>("http://10.117.189.210:9090/ing-mortgage/products/" + pid);
  }

  postUserApplication = (user) => {

    return this._http.post<User>("http://10.117.189.210:9090/ing-mortgage/loans/", user);
  }

  getUser = (userName, password) => {
    let obj = {
      "userName": userName,
      "password": password
    }
    return this._http.post("http://10.117.189.210:9090/ing-mortgage/login", obj);
  }

  getLoans = (cif) => {
    return this._http.get("http://10.117.189.210:9090/ing-mortgage/customers/" + cif + "/loans")
  }

  getLoanDetails = (loanId) => {
    console.log("loan id", loanId)
    return this._http.get("http://10.117.189.210:9090/ing-mortgage/loans/" + loanId);
  }


}
