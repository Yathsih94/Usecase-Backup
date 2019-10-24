import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,flatMap, filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http:HttpClient) { 

  }

  postDataToApi=(user)=>{

    return this._http.post("http://localhost:3000/register",user)

  }

  getDataFromApi=(email)=>{
    return this._http.get<any>("http://localhost:3000/register?"+"email="+email)
                    //  .pipe(map( (data)=> data),
                    //  flatMap((data)=>(data)),
                    //  filter((data)=>data['email']==email))
  
}
}
