import { Component, OnInit } from '@angular/core';
import { CheckoutService } from '../checkout.service';  
import { GetService } from '../get.service';
import { Cart } from '../objects/Cart';
import { Transaction } from '../objects/Transaction';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
cart:Cart | any;


  constructor(private _GetService:GetService, private _checkoutService:CheckoutService, private router:Router, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    this.cart=this.activatedRoute.snapshot.data['cart']

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(this.cart);
      this._GetService.updateCart(this.cart);
      }
    });
  }

  

changeQuant(change:number, title:string):void{
  console.log(change + " title " + title)

    for(let tran of this.cart.transactions){
      if(tran.movie.title==title){
        tran.quantity+=change;
      }
    }

}

  removeItem(title:string): void{
    this.cart.transactions.array.forEach((element: Transaction, index: any) => {
      if(element.movie.title==title) this.cart.transactions.array.splice(index,1);
    });
  }

  updateCart():void{
    console.log(this.cart);
    let otroCart=this.cart;
    this._GetService.updateCart(otroCart);
  }

}
