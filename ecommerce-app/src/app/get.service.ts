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
  cart:Cart | any;
  

  constructor(private http:HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
        })
    
  }
  getSingleMovie(title:string):Observable<Movie>{
    return this.http.get<Movie>(this.baseurl+"/movie/"+title)
  }

  getAllMovies():Observable<Movie>{
    return this.http.get<Movie>(this.baseurl+"/movie/all-movies")
  }
  
  getCustomer(username:string):Observable<Customer>{
    return this.http.get<Customer>(this.baseurl+"/customer/username/"+username)
  }

  updateCustomer(customer:Customer):Observable<Customer>{
    return this.http.put<Customer>(this.baseurl+"/customer/"+customer.id, customer)
  }

  addItemToCart(title:string): void{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    this.http.post<Cart>(this.baseurl+"/movie/"+title+"/addtocart", this.customer).subscribe(data =>{ this.cart=data})
  }

  removeItemFromCart(title:string): void{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    this.http.post<Cart>(this.baseurl+"/movie/"+title+"/removefromcart", this.customer).subscribe(data =>{ this.cart=data})
  }

 

  getCustomersCart(customer:Customer):Observable<Cart>{
    return this.http.put<Cart>(this.baseurl+"/cart", customer)
  }
  updateCart(cart:Cart): void{
    console.log("service")
    console.log(cart);
    this.http.post<Cart>(this.baseurl+"/updateCart", cart).subscribe(data =>{ this.cart=data})
  }
}
