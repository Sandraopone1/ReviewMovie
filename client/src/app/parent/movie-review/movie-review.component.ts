import { Component, OnInit } from '@angular/core';
import { RevService } from '../../rev.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-movie-review',
  templateUrl: './movie-review.component.html',
  styleUrls: ['./movie-review.component.css']
})
export class MovieReviewComponent implements OnInit {
  newRev: any;
  errors: any;
  movie: any;
  movieId: any;
  movies: any;

  constructor(
    private _RevService: RevService,
    private _Router: Router,
    private _MovieService: MovieService,
    private _route: ActivatedRoute,
  ) { }

  init(){
		this.newRev = {
			name:"",
      stars:Number,
      reviews: "",
      movie_id: this.movieId
    };
    

	}

  ngOnInit() {
    this._route.params.subscribe(params => this.movieId = params.id)
    this._MovieService.getMovieById(this.movieId).then( movies => this.movies = movies)
    this.init()
    this.getOne();
  }

  createNew(){
    this._RevService.createRev(this.newRev).then( movie => {
      if (movie.error){
        this.errors = movie.error
      }else{
        this._Router.navigateByUrl("/")
      }

    } ) 
    .catch(err => console.log(err));

  }

  getOne(){
    this._MovieService.getMovieById(this.movieId).then( movies => this.movies = movies) 
    .catch(err => console.log(err))
  }
} 
