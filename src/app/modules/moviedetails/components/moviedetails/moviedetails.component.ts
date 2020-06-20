import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedetailsService } from '../../services/moviedetails.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  movieId: any;
  movieDetails: any;
  movieGenres: any = [];
  moviePosters: any = [];
  movieCast: any = [];
  recommendations: any = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviedetailsService: MoviedetailsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params['params']['id']);
      this.movieId = params['params']['id'];
    });

    this.moviedetailsService.getMovieDetails(this.movieId).subscribe((res) => {
      console.log('Movie details ', res);
      this.movieDetails = res;
      this.movieGenres = res.genres;
    });

    this.moviedetailsService.getImages(this.movieId).subscribe((res) => {
      console.log('Posters ', res);
      let posters = res.posters;
      posters.length = 10;
      this.moviePosters = posters;
    });

    this.moviedetailsService.getCredits(this.movieId).subscribe((res) => {
      console.log('cast ', res);
      let crew = res.cast;
      crew.length = 30;
      this.movieCast = crew;
    });

    this.moviedetailsService
      .getRecommendations(this.movieId).subscribe((res) => {
        console.log('Recommendations', res);
        this.recommendations = res.results;
      });
  }
}
