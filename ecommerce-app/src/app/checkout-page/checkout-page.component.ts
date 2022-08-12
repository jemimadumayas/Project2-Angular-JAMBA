import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { Cart } from '../objects/Cart';
import { Customer } from '../objects/Customer';
import { Movie } from '../objects/Movie';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  cart:Cart | any;

  
  constructor(private _checkoutService:CheckoutService) {}
    
  ngOnInit(): void {
    // this.cart = this._checkoutService.checkoutCustomer(this._checkoutService.getCustomersCart());
  }

}


