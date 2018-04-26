import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RevService } from '../../rev.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies = [];
  movieId: any;
  movie: any;
  reviews: any;
  total: any;

  constructor(
    private _MovieService: MovieService,
    private _route: ActivatedRoute,
    private _Router: Router,
    private _RevService: RevService
  
  ) { } 
  ngOnInit() {
    this._route.params.subscribe(params => this.movieId = params.id)
    this._MovieService.getMovieById(this.movieId).then( movie => this.movie = movie)
    this.getAllRests();
    
  }

  getAllRests(){
    this._MovieService.getMovies().then( movies => this.movies = movies) 
    .catch(err => console.log(err))
   
  }

  getReviews(){
    this._RevService.getRevs(this.movieId).then(review => {this.reviews = review; console.log(review)})
    .catch(err => console.log(err))
  }




}