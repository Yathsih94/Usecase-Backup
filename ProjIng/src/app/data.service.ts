import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/**
 * dataservice class to communicate with the API
 *  @author: yatheesh
 */
export class DataService {

  constructor(private _http: HttpClient) { }
  /**
   * creating login status variable and assigning initial value as flase
   * @param : loginStatus
   */
  loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  /**
   * updating the login status
   * @param:status
   */
  updateLoginStatus = (status: boolean) => {
    this.loginStatus.next(status)
  }

  /**
   * Method to make get request to the api and get observable as response
   * @param:baseApiUrl 
   */
  httpGetRequest = (baseApiUrl: string) => {
    return this._http.get<Array<object>>(baseApiUrl);
  }

  /**
   * Method to make post request to the api and get observable as response
   * @param:baseApiUrl ,requestObject
   */
  httpPostRequest = (baseApiUrl: string, requestObject: object) => {
    return this._http.post(baseApiUrl, requestObject);
  }

  /**
   * Method to make put request to the api and get observable as response
   * @param:baseApiUrl ,requestObject
   */
  httpPutRequest = (baseApiUrl: string, requestObject: object) => {
    return this._http.put(baseApiUrl, requestObject);
  }
}
