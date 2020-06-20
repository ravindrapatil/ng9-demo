import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { filter, catchError, map } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable()

export class MoviedetailsService {
  constructor(private http: HttpClient) {}

  getMovieDetails(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', '5696692100a0d2aaeee00f4963a6d69e');
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}`, { params: params })
      .pipe(catchError((res: Response) => this.errorHandler(res)));
  }

  getImages(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', '5696692100a0d2aaeee00f4963a6d69e');
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}/images`, {
        params: params,
      })
      .pipe(catchError((res: Response) => this.errorHandler(res)));
  }

  getCredits(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', '5696692100a0d2aaeee00f4963a6d69e');
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
        params: params,
      })
      .pipe(catchError((res: Response) => this.errorHandler(res)));
  }

  getRecommendations(id: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('api_key', '5696692100a0d2aaeee00f4963a6d69e');
    return this.http
      .get(`https://api.themoviedb.org/3/movie/${id}/recommendations`, {
        params: params,
      })
      .pipe(catchError((res: Response) => this.errorHandler(res)));
  }

  errorHandler(err) {
    return throwError(err);
  }
}
