import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Customer } from './objects/Customer';
import { Movie } from './objects/Movie';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  baseurl = "http://localhost:8080/jamba";


  constructor(private _http:HttpClient) { }
  
  getAllMovies():Observable<Movie>{
    return this._http.get<Movie>(this.baseurl+"/movie/all-movies")
  }
  
  public authenticateUser(customer:Customer) : Observable<any>{
    return this._http.post<any>("http://localhost:8080/jamba/login",customer)
    .pipe(map(customer => {
      sessionStorage.setItem("currentUser", JSON.stringify(customer));
      sessionStorage.setItem("firstname", customer.firstName);
      sessionStorage.setItem("lastname", customer.lastName);
      sessionStorage.setItem("address", customer.address);
      sessionStorage.setItem("email", customer.email);
      sessionStorage.setItem("phone", customer.phoneNumber);
      sessionStorage.setItem("balance", customer.accountBalance);
      return customer;
    }))
  }
  
  public registerPage(customer:Customer) : Observable<any>{
    return this._http.post<any>("http://localhost:8080/jamba/register",customer)
  }
}
