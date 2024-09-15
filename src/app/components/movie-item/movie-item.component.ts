import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/data/movie.service';
import { IMovie } from '../movie-search/movie-search.component';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() movie!: IMovie;
  router = inject(Router);
  route = inject(ActivatedRoute);

  constructor() {}
  ngOnInit(): void {
    console.log(this.movie);
  }

  onClickMovie() {
    this.router.navigate(['movie-detail'], { queryParams: {id: this.movie.imdbID} });
  }

}