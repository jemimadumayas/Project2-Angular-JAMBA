import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cart } from './objects/Cart';
import { Customer } from './objects/Customer';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  baseurl = "http://localhost:8080/jamba";

  constructor(private http:HttpClient) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

    getCustomersCart(customer:Customer):Observable<Cart>{
      return this.http.put<Cart>(this.baseurl+"/cart", customer)
    }

    checkoutCustomer(cart:Cart):Observable<Cart>{
      return this.http.put<Cart>(this.baseurl+"/checkout", cart)
    }
  
}
