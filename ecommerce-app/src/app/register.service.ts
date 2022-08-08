import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './objects/Customer';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http:HttpClient) { }
  
  public loginPage(customer:Customer) : Observable<any>{
    return this._http.post<any>("http://localhost:8080/jamba/login",customer)
  }
  
  public registerPage(customer:Customer) : Observable<any>{
    return this._http.post<any>("http://localhost:8080/jamba/register",customer)
  }
}
