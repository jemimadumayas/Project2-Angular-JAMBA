import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from './objects/Movie';
import { Customer } from './objects/Customer';
import { Cart } from './objects/Cart';


@Injectable({
  providedIn: 'root'
})
export class GetService {
  baseurl = "http://localhost:8080/jamba";
  customer:Customer | any;
  
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

  addItemToCart(title:string):Observable<Cart>{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    return this.http.post<Cart>(this.baseurl+"/movie/"+title+"/addtocart", this.customer)
  }

  removeItemFromCart(title:string):Observable<Cart>{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    return this.http.post<Cart>(this.baseurl+"/movie/"+title+"/removefromcart", this.customer)
  }

  getCustomersCart(customer:Customer):Observable<Cart>{
    return this.http.put<Cart>(this.baseurl+"/cart", customer)
  }
  
 

  updateCart(cart:Cart):Observable<Cart>{
    return this.http.post<Cart>(this.baseurl+"/updateCart", cart)
  }
}
