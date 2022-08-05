import { Component, OnInit } from '@angular/core';
import { Movie } from '../objects/Movie';
import { getService } from '../movie-get.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss']
})
export class MoviePageComponent implements OnInit {
movie:Movie | any;
name: string | any;

  constructor(private _movieGetService:getService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.route.snapshot.paramMap.get('name');
    this._movieGetService.getSingleMovie(this.name).subscribe(data=>{ this.movie = data})
  }

}
