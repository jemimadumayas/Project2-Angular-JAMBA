import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';
import { GetService } from '../get.service';
import { Cart } from '../objects/Cart';
import { Transaction } from '../objects/Transaction';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart:Cart | any;
private routeSub:any; 

  constructor(private _GetService:GetService, private _checkoutService:CheckoutService, private router:Router) { }

  ngOnInit(): void {
    this._checkoutService.getCustomersCart().subscribe(data=>{ this.cart = data});
    this.routeSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this._GetService.updateCart(this.cart);
      }
    });
  }

  public ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  removeItem(title:string): void{
    this.cart.transactions.array.forEach((element: Transaction, index: any) => {
      if(element.movie.title==title) this.cart.transactions.array.splice(index,1);
    });
  }

}
