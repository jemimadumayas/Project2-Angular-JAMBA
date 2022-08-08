import { Component, OnInit } from '@angular/core';
import { Checkout } from '../Checkout';
import { CheckoutService } from '../checkout.service';
import { getService } from '../movie-get.service';
import { Movie } from '../objects/Movie';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {
checkout:string='Checkout';
checkoutDate=new Date();


  constructor() {}
    
  ngOnInit(): void {
  }

}
