import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { API_KEY } from './../shared/constants';
import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { MOVIE_URL } from "../shared/constants";

@Injectable({
    providedIn: 'root'
})
export class MovieService {
    private httpClient = inject(HttpClient);

    constructor() {}

    getMovies (searchString: string) {
        try {
            return this.httpClient.get<any>(`${MOVIE_URL}s=${searchString}&apiKey=${API_KEY}`);
        } catch (e) {
            return _observableThrow(() => e) as any as Observable<any>;
        }
    }

    getMoiveByIMDBId(id: string) {
        try {
            return this.httpClient.get<any>(`${MOVIE_URL}i=${id}&apiKey=${API_KEY}`);
        } catch (e) {
            return _observableThrow(() => e) as any as Observable<any>;
        }
    }
}