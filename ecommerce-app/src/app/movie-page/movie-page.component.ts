import { Component, OnInit } from '@angular/core';
import { Movie } from '../objects/Movie';
import { GetService } from '../Get.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../objects/Customer';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
  id:number |any;
  movie:Movie | any;
  name: string | any;
  thumbimages:any [] = []
  customer = new Customer();
  product = new Movie();

  constructor(private _GetService:GetService, private _service:RegisterService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.name=params['title'];
    });
    this._GetService.getSingleMovie(this.name).subscribe(data=>{ this.movie = data})
  }

  addToCart(title:string): void {
    this.name=title;
    this._GetService.addItemToCart(this.name)
}

  increaseItem() {

  }

  decreaseItem() {

  }

  addViewedMovieToCart(id:number) {

  }
}
