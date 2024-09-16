import { MovieSearchComponent } from './movie-search.component';
import { Observable, of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieService } from 'src/app/data/movie.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


describe('MovieSearchComponent', () => {
  let component: MovieSearchComponent;
  let fixture: ComponentFixture<MovieSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieSearchComponent],
      imports: [
        MatDialogModule,
        MatCardModule,
        SharedModule,
        BrowserAnimationsModule,
        FormsModule
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting()
    ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create',
    inject(
      [HttpTestingController],
      (httpMock: HttpTestingController) => {
    expect(component).toBeTruthy();
  }));

  it('should fetch data from the OMDb API and get list of 10 movies', () => {
    component.getMovies();
    const movieServiceMock = TestBed.inject(MovieService);
    const data = [
        {
            Title: 'Dune',
            Year: '2021',
            imdbID: '242525',
            Poster: 'Img URL',
            Type: 'Movie',
          }
    ];
    spyOn(movieServiceMock, 'getMovies').and.returnValue(of(data));
    expect(component.movieList).toBeDefined();
  });
});