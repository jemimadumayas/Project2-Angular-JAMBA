import { Component, OnInit } from '@angular/core';
import { Movie } from '../objects/Movie';
import { GetService } from '../get.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../objects/Customer';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
movie:Movie | any;
name: string | any;

  constructor(private _GetService:GetService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.name=params['title'];
    });
    this._GetService.getSingleMovie(this.name).subscribe(data=>{ this.movie = data})


  }

  addToCart(title:string/* ,customer:Customer */): void {
    this.name=title;
/*     this._getService.addItemToCart(customer, this.name) */
  console.log("added to cart "+this.name);
}

}
