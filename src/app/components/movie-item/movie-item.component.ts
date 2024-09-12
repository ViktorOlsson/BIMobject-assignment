import { Component, inject, Input, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/movie.service';
import { IMovie } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie!: IMovie;

  constructor() {}
  ngOnInit(): void {
    console.log(this.movie);
  }

}