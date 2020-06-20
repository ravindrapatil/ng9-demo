import { Component, OnInit } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThemoviedbService } from '../../services/themoviedb.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  name: string;
  movies: any[] = [];
  topRatedMovies: any[] = [];
  upcomingMovies: any[] = [];

  constructor(private moviesService: ThemoviedbService) {}

  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe((res) => {
      this.movies = res.results;
    });
  }

  onChange(e) {
    if (e.index === 0) {
      console.log('Popular');
      this.moviesService.getPopularMovies().subscribe((res) => {
        this.movies = res.results;
      });
    } else if (e.index === 1) {
      console.log('Top Rated');
      this.moviesService.getTopRatedMovies().subscribe((res) => {
        this.topRatedMovies = res.results;
      });
    } else if (e.index === 2) {
      console.log('Upcoming');
      this.moviesService.getUpcomingMovies().subscribe((res) => {
        this.upcomingMovies = res.results;
      });
    }
  }
  
}
