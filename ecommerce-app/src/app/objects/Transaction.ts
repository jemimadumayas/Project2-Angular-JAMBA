import { Movie } from "./Movie";
import { Cart } from "./Cart";

export interface Transaction{
    cart:Cart;
    movie:Movie;
    quanitity:number;
}