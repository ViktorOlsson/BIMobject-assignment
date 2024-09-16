import { IMovie } from './../movie-search/movie-search.component';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/data/movie.service';
import { Utils } from 'src/app/shared/utils';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

export interface IRatingItem {
    Source: string,
    Value: string
};

export interface IMovieDetails extends IMovie {
    Awards: string,
    Genre: string,
    Metascore: string,
    imdbRating: string,
    Director: string,
    Actors: string,
    Plot: string,
    Ratings: IRatingItem[],
};

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})


export class MovieDetailComponent implements OnInit {

  route = inject(ActivatedRoute);
  movieService = inject(MovieService);
  movie: IMovieDetails | undefined;
  public dialog = inject(MatDialog);
  constructor() {}
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        this.getMovieByIMDBId(params['id']);
    })
  }

  getMovieByIMDBId(id: string) {
    this.movieService.getMoiveByIMDBId(id).subscribe({
      next: (movie) => {
        if (Utils.isApiResponseFalse(movie)) {
          this.dialog.open(DialogComponent, {
            data: movie.Error
          });
        } else {
          this.movie = movie;
        }
      },
      error: (error) => {
        this.dialog.open(DialogComponent, {
          data: `Error with status code ${error.status}!`
        });
      }
    })
    }
}