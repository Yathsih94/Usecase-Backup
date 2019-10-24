import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, flatMap, filter } from 'rxjs/operators';
import { identifierModuleUrl } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { }

  getDataFromApi = (email) => {
    return this._http.get<any>("http://localhost:3000/register?" + "email=" + email);
  }

  getSlotsFromApi = () => {
    return this._http.get<any>("http://localhost:3000/slots");
  }

  getAvailSlots = () => {
    return this._http.get<any>("http://localhost:3000/slots?status=available");
  }

  updatetRequestSlot = (id, reqObj) => {
    return this._http.patch("http://localhost:3000/slots/" + id, reqObj);
  }

  updateSlotIdInUser = (id, slotId) => {
    return this._http.patch("http://localhost:3000/register/" + id, slotId)
  }

  // getHistoryRecord = (thisID) => {
  //   return this._http.get<any>("http://localhost:3000/slots?id=thisID");
  // }
}
