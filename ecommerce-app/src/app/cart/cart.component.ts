import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { CheckoutService } from '../checkout.service';
import { GetService } from '../get.service';
import { Cart } from '../objects/Cart';
import { Customer } from '../objects/Customer';
import { Transaction } from '../objects/Transaction';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';



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


  constructor(private _GetService:GetService, private _checkoutService:CheckoutService, private router:Router, private activatedRoute: ActivatedRoute) { }



  ngOnInit(): void {
    this._GetService.getMovies().subscribe(Response => { 
      this.movies = Response;
      this.subTotal = this._GetService.getSubTotal();

    this.cart=this.activatedRoute.snapshot.data['cart']

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        console.log(this.cart);
      this._GetService.updateCart(this.cart);
      }
    });
  }
  }
  

changeQuant(change:number, title:string):void{
  console.log(change + " title " + title)

    for(let tran of this.cart.transactions){
      if(tran.movie.title==title){
        tran.quantity+=change;
      }
    }

}

  totalPayment() {
    return this.subTotal + (this.subTotal * 0.095);
  }

  increaseQuantity(customer:Customer, title:string):void{
    return this._GetService.addItemToCart(title);
  }

  updateCart():void{
    console.log(this.cart);
    let otroCart=this.cart;
    this._GetService.updateCart(otroCart);
  }

  deleteMovieInCart(movie:any) {
    this._GetService.removeFromCart(movie);
  }
}
