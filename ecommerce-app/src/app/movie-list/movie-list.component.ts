import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { regExpEscape } from '@ng-bootstrap/ng-bootstrap/util/util';
import { __read } from 'tslib';
import { GetService } from '../Get.service';
import { Customer } from '../objects/Customer';
import { Movie } from '../objects/Movie';
import { RegisterService } from '../register.service';
import { map } from 'rxjs';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  public movieList:any;
  custumer = new Customer();
  movies:Movie[] | any;
  name:string | any;

  constructor(private _GetService:GetService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this._GetService.getAllMovies().subscribe(data=>{ this.movies = data})
    // this._GetService.getAllMovies().subscribe(Response => { this.movieList = Response})
    // this.movieList.array.forEach((m:any) => {
    //   Object.assign(m,{quantity:1,total:m.price});
    // });
  }

  addMovieToCart(movie:any) {
    this._GetService.addMovieToCart(movie);
  }


  addToCart(title:string): void {
    this.name=title;
    this._GetService.addItemToCart(this.name)
  }

}
