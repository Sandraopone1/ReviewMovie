import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RevService } from '../../rev.service';

@Component({
  selector: 'app-movie-display',
  templateUrl: './movie-display.component.html',
  styleUrls: ['./movie-display.component.css']
})
export class MovieDisplayComponent implements OnInit {
  movies = [];
  movieId: any;
  movie: any;
  reviews: any;

  constructor(
    private _MovieService: MovieService,
    private _route: ActivatedRoute,
    private _Router: Router,
    private _RevService: RevService
  
  ) { } 
  ngOnInit() {
    this._route.params.subscribe(params => this.movieId = params.id)
    this._MovieService.getMovieById(this.movieId).then( movies => this.movies = movies)
    this.getOne();
    this.getReviews();
    
  }

  getReviews(){
    this._RevService.getRevs(this.movieId).then(review => {this.reviews = review; console.log(review)})
    .catch(err => console.log(err))
  }

  getOne(){
    this._MovieService.getMovieById(this.movieId).then( movies => this.movies = movies) 
    .catch(err => console.log(err))
    
  }

  deleteMovie(){
    this._MovieService.destroy(this.movieId).then( movie => this._Router.navigateByUrl("/")) 
    .catch(err => console.log(err));
  }

  deleteRev(id){
    console.log(id)
    this._RevService.destroy(id).then( review => this._Router.navigateByUrl("/")) 
    .catch(err => console.log(err)
  );
  this.getReviews() 
  }

}
