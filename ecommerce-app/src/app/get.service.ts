import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './objects/Movie';
import { Customer } from './objects/Customer';
import { Cart } from './objects/Cart';


@Injectable({
  providedIn: 'root'
})
export class getService {
  baseurl = "http://localhost:8080/jamba";

  constructor(private http:HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  }
  getSingleMovie(title:string):Observable<Movie>{
    return this.http.get<Movie>(this.baseurl+"/movie/"+title)
  }

  getAllMovies():Observable<Movie>{
    return this.http.get<Movie>(this.baseurl+"/movie/all-movies")
  }
  getCustomer(username:string):Observable<Customer>{
    return this.http.get<Customer>(this.baseurl+"/username/"+username)
  }

  getCustomersCart(customer:Customer):Observable<Cart>{
    return this.http.put<Cart>(this.baseurl+"/cart", customer)
  }

  addItemToCart(customer:Customer,title:string):Observable<Cart>{
    return this.http.put<Cart>(this.baseurl+"/movie/"+title+"/addtocart", customer)
  }

}
