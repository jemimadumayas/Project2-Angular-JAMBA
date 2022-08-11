import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from './objects/Cart';
import { CheckoutService } from './checkout.service';

@Injectable({
  providedIn: 'root'
})
export class CartResolverService implements Resolve<Cart> {

  constructor(private _checkoutService:CheckoutService) { }
  
  resolve(): Observable<Cart> | Promise<Cart> {
    return this._checkoutService.getCustomersCart()
  }
}
