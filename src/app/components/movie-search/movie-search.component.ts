import { DialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { Component, inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MovieService } from 'src/app/data/movie.service';
import { Utils } from 'src/app/shared/utils';

export interface IMovie {
  Title: string,
  Year: string,
  imdbID: string,
  Poster: string,
  Type: string,
}

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent implements OnInit {

  movieService = inject(MovieService);
  searchString: string = '';
  movieList: IMovie[] = [];
  public dialog = inject(MatDialog);

  constructor() {}
  ngOnInit(): void {}

  getMovies() {
    this.movieService.getMovies(this.searchString).subscribe({
      next: (movieResults) => {
        if (Utils.isApiResponseFalse(movieResults)) {
          this.dialog.open(DialogComponent, {
            data: movieResults.Error
          });
        } else {
          this.movieList = movieResults.Search;
        }
      },
      error: (error) => {
        this.dialog.open(DialogComponent, {
          data: `Error with status code ${error.status}!`
        });
      }
    })
  }

  onClickSearch() {
    this.getMovies();
  }
}