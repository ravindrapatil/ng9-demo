import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
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
  mySubscription: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private moviedetailsService: MoviedetailsService
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

    this.mySubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.movieId = params['params']['id'];
    });

    this.doMultipleTask();
  }

  doMultipleTask() {
    console.log('yes');
    this.moviedetailsService.getMovieDetails(this.movieId).subscribe((res) => {
      this.movieDetails = res;
      this.movieGenres = res.genres;
    });

    this.moviedetailsService.getImages(this.movieId).subscribe((res) => {
      let posters = res.posters;
      posters.length = 10;
      let newPostersArray = posters.map(item => {
        return {
           img: `https://image.tmdb.org/t/p/original///${item.file_path}`,
           thumbnail: `https://image.tmdb.org/t/p/original///${item.file_path}`
        }
       })
      this.moviePosters = newPostersArray;
    });

    this.moviedetailsService.getCredits(this.movieId).subscribe((res) => {
      let crew = res.cast;
      crew.length = 30;
      this.movieCast = crew;
    });

    this.moviedetailsService
      .getRecommendations(this.movieId)
      .subscribe((res) => {
        this.recommendations = res.results;
      });
  }
}
