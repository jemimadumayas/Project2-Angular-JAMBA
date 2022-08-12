import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
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

  public movies: any = [];
  public subTotal: number = 0;
  cart: Cart | any;
  totalItemInCart: number = 0;

  // constructor(private _GetService:GetService, private _checkoutService:CheckoutService) { }
  constructor(private _GetService: GetService, private _checkoutService: CheckoutService, private router: Router, private activatedRoute: ActivatedRoute) { }
  // only used to check the total quantity to cart
  // ngOnInit(): void {
  //   this._GetService.getMovies().subscribe(Response => {
  //     this.totalItemInCart = Response.length;
  //     console.log(this.totalItemInCart)
  //   })
  //  }

  // ngOnInit(): void {
  //     // this.cart = this._checkoutService.getCustomersCart(customerPlaceholder);
  //     this._GetService.getMovies().subscribe(Response => { 
  //     this.movies = Response;
  //     this.subTotal = this._GetService.getSubTotal();
  //   })
  // }

  ngOnInit(): void {
    this.cart = this.activatedRoute.snapshot.data['cart']
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        console.log(this.cart);
        this._GetService.updateCart(this.cart);
      }
    });
  }

  totalPayment() {
    return this.subTotal + (this.subTotal * 0.095);
  }

  deleteMovieInCart(movie: any) {
    this._GetService.removeFromCart(movie);
  }

  changeQuant(change: number, title: string): void {
    console.log(change + " title " + title)

    for (let tran of this.cart.transactions) {
      if (tran.movie.title == title) {
        tran.quantity += change;
      }
    }
  }

  removeItem(title: string): void {
    this.cart.transactions.array.forEach((element: Transaction, index: any) => {
      if (element.movie.title == title) this.cart.transactions.array.splice(index, 1);
    });
  }

  updateCart(): void {
    console.log(this.cart);
    let otroCart = this.cart;
    this._GetService.updateCart(otroCart);
  }
}

