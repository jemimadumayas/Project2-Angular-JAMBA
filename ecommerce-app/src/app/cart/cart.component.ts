import { Component, OnInit } from '@angular/core';
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
cart:Cart | any;


  constructor(private _GetService:GetService, private _checkoutService:CheckoutService) { }

  ngOnInit(): void {
    // this.cart = this._checkoutService.getCustomersCart(customerPlaceholder);
  }

  increaseQuantity(customer:Customer, title:string): Observable<Cart>{
    return this._GetService.addItemToCart(customer, title);
  }

  decreaseQuantity(customer:Customer, title:string): Observable<Cart>{
    return this._GetService.removeItemFromCart(customer, title);
  }

}
