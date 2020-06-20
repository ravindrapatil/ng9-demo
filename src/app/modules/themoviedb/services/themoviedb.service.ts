import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()

export class ThemoviedbService {
  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', '5696692100a0d2aaeee00f4963a6d69e');
    params = params.append('primary_release_year', '2019');
    params = params.append('sort_by', 'popularity.desc');
    params = params.append('language', 'en-US');

    return this.http
      .get('https://api.themoviedb.org/3/discover/movie', { params: params })
      .pipe(catchError((res: Response) => this.errorHandler(res)));
  }

  getTopRatedMovies(): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', '5696692100a0d2aaeee00f4963a6d69e');
    params = params.append('page', '1');
    params = params.append('language', 'en-US');

    return this.http
      .get('https://api.themoviedb.org/3/movie/top_rated', { params: params })
      .pipe(catchError((res: Response) => this.errorHandler(res)));
  }

  getUpcomingMovies(): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', '5696692100a0d2aaeee00f4963a6d69e');
    params = params.append('page', '1');
    params = params.append('language', 'en-US');

    return this.http
      .get('https://api.themoviedb.org/3/movie/upcoming', { params: params })
      .pipe(catchError((res: Response) => this.errorHandler(res)));
  }

  errorHandler(err) {
    return throwError(err);
  }
}
