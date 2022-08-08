import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor() { }
  getCart():object{
    return[
      {"id":1,"name":"The Little Mermaid"},
      {"id":2,"name":"Lion King"},
    ]
  }
}
