import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movieService = inject(MovieService);
  searchString: string = '';

  constructor() {}
  ngOnInit(): void {}

  getMovies() {
    this.movieService.getMovies(this.searchString).subscribe(movieResults => {
        console.log(movieResults);
    });
  }

  onClickSearch() {
    this.getMovies();
  }
}