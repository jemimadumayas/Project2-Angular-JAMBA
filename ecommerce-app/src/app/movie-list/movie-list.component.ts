import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetService } from '../get.service';
import { Customer } from '../objects/Customer';
import { Movie } from '../objects/Movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  constructor(private _GetService:GetService, private route:ActivatedRoute) { }
  movies:Movie[] | any;
  name:string | any;

  ngOnInit(): void {
    this._GetService.getAllMovies().subscribe(data=>{ this.movies = data})
  }

  addToCart(title:string): void {
      this.name=title;

    this._GetService.addItemToCart(this.name)
    console.log("added to cart "+this.name);
  }

}
