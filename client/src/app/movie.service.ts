import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/observable";
import 'rxjs';
import "rxjs/add/operator/map"

@Injectable()
export class MovieService {

  constructor(
    private _http: Http
  ) { }

  getMovies(){
    return this._http.get("/movies")
    .map(data => data.json()).toPromise()
  }

  createMovie(movie){
    return this._http.post("/movies/new", movie)
    .map(data => data.json()).toPromise()
  }

  update(movie, id){
    console.log("eo",movie)
    return this._http.post("/movies/" + id, movie)
    .map(data => data.json()).toPromise() 
  }

  getMovieById(id){
    
    return this._http.get("/movie/"+ id)
    .map(data => data.json()).toPromise()

  }

  destroy(id){
    return this._http.delete("/movie/" +id+ "/destroy")
    .map(data => data.json()).toPromise()
  }

 

}
