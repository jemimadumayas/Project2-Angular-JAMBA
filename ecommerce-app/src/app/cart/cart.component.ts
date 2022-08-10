import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import { GetService } from '../get.service';
import { Cart } from '../objects/Cart';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart:Cart | any;


  constructor(private _GetService:GetService, private _checkoutService:CheckoutService) { }

  ngOnInit(): void {
    this._checkoutService.getCustomersCart().subscribe(data=>{ this.cart = data});
  }

  increaseQuantity(title:string): Observable<Cart>{
    return this._GetService.addItemToCart(title);
  }

  decreaseQuantity(title:string): Observable<Cart>{
    return this._GetService.removeItemFromCart(title);
  }

}
