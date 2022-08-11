import { Movie } from "./Movie";

export interface Transaction{
    cartNumber:number;
    movieId:number;
    movie:Movie;
    quanitity:number;
}