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
        return this.httpClient.get<any>(`${MOVIE_URL}s=${searchString}&apiKey=${API_KEY}`);
    }
}