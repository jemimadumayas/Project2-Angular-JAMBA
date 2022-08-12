import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpRequest } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Movie } from './objects/Movie';
import { Customer } from './objects/Customer';
import { Cart } from './objects/Cart';
import { CheckoutService } from './checkout.service';


@Injectable({
  providedIn: 'root'
})
export class GetService {


  baseurl = "http://localhost:8080/jamba";
  customer:Customer | any;
  cart:Cart | any;
  public cartItemList:any =[];
  public movieList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient, private _checkoutService: CheckoutService) { }

  httpOptions={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
    
  }

  getMovies(){
    return this.movieList.asObservable();
  }

  setMovie(movie:any){
    this.cartItemList.push(...movie);
    this.movieList.next(movie);
  }

  addMovieToCart(movie:any) {
    this.cartItemList.push(movie);
    this.movieList.next(this.cartItemList);
    this.getSubTotal();
    console.log(this.cartItemList)
  }

  getSubTotal() : number {
    let subTotal = 0;
    this.cartItemList.map((m:any)=>{
      subTotal += m.price;
    })
    return subTotal;
  }

  getSingleMovie(title:string):Observable<Movie>{
    return this.http.get<Movie>(this.baseurl+"/movie/"+title)
  }

  removeFromCart(movie:any) {
    this.cartItemList.map((m:any,index:any)=>{
      if(m.id === movie.id){
        this.cartItemList.splice(index,1);
      }
    })
  }

  clearCart() {
    this.cartItemList=[]
    this.movieList.next(this.cartItemList);
  }

  getAllMovies():Observable<Movie>{
    return this.http.get<Movie>(this.baseurl+"/movie/all-movies")
    .pipe(map((Response:any)=>{
      return Response;
    }))
  }
  
  getCustomer(username:string):Observable<Customer>{
    return this.http.get<Customer>(this.baseurl+"/username/"+username)
  }

  addItemToCart(title:string): void{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    this.http.post<Cart>(this.baseurl+"/movie/"+title+"/addtocart", this.customer).subscribe(data =>{ this.cart=data})
  }

  removeItemFromCart(title:string): void{
    let jsonObj=JSON.parse(sessionStorage.getItem("currentUser")!);
    this.customer=jsonObj as Customer;
    this.http.post<Cart>(this.baseurl+"/movie/"+title+"/removefromcart", this.customer).subscribe(data =>{ this.cart=data})
  }

  updateCart(cart:Cart): void{
    console.log("service")
    console.log(cart);
    this.http.post<Cart>(this.baseurl+"/updateCart", cart).subscribe(data =>{ this.cart=data})
  }

  resolve(): Observable<Cart> | Promise<Cart> {
    return this._checkoutService.getCustomersCart()
  }
}
