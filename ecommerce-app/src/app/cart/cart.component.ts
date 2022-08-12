import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import { GetService } from '../Get.service';
import { Cart } from '../objects/Cart';
import { Customer } from '../objects/Customer';
import { Transaction } from '../objects/Transaction';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public movies : any= [];
  public subTotal : number = 0;
  cart:Cart | any;
  totalItemInCart:number = 0;

  constructor(private _GetService:GetService, private _checkoutService:CheckoutService) { }

  // only used to check the total quantity to cart
  // ngOnInit(): void {
  //   this._GetService.getMovies().subscribe(Response => {
  //     this.totalItemInCart = Response.length;
  //     console.log(this.totalItemInCart)
  //   })
  //  }

  ngOnInit(): void {
      // this.cart = this._checkoutService.getCustomersCart(customerPlaceholder);
      this._GetService.getMovies().subscribe(Response => { 
      this.movies = Response;
      this.subTotal = this._GetService.getSubTotal();
    })
  }

  totalPayment() {
    return this.subTotal + (this.subTotal * 0.095);
  }

  increaseQuantity(customer:Customer, title:string): Observable<Cart>{
    return this._GetService.addItemToCart(customer, title);
  }

  decreaseQuantity(customer:Customer, title:string): Observable<Cart>{
    return this._GetService.removeItemFromCart(customer, title);
  }

  deleteMovieInCart(movie:any) {
    this._GetService.removeFromCart(movie);
  }
}
