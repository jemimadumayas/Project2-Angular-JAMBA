import { Component, OnInit } from '@angular/core';
import { Movie } from '../objects/Movie';
import { getService } from '../get.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
movie:Movie | any;
name: string | any;

  constructor(private _getService:getService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.name=params['title'];
    });
    this._getService.getSingleMovie(this.name).subscribe(data=>{ this.movie = data})


  }

}
