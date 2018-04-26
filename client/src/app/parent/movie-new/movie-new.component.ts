import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-new',
  templateUrl: './movie-new.component.html',
  styleUrls: ['./movie-new.component.css']
})
export class MovieNewComponent implements OnInit {
  newMovie: any;
  errors: any;

  constructor(
    private _MovieService: MovieService,
    private _Router: Router
  ) { }

  init(){
		this.newMovie = {
      movie_name: "",
			name: "",
      movie_stars:Number,
      description: "",
    };
    

	}

  ngOnInit() {
    this.init()
  }

  createNew(){
    this._MovieService.createMovie(this.newMovie).then( movie => {
      if (movie.error){
        this.errors = movie.error
      }else{
        this._Router.navigateByUrl("/")
      }

    } ) 
    .catch(err => console.log(err));

  }

}