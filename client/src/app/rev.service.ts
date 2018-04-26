import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
//import {Observable} from "rxjs/observable";
//import 'rxjs';
import "rxjs/add/operator/map"

@Injectable()
export class RevService {

  constructor(
    private _http: Http
  ) { }

  createRev(reviewNew){
    return this._http.post("/reviews/new/" , reviewNew)
    .map(data => data.json()).toPromise()
  }

  getRevs(restId){
    console.log(restId)
    return this._http.get("/reviews/all/" +restId)
    .map(data => data.json()).toPromise()
  }

  destroy(id){
    return this._http.delete("/review/" +id+ "/destroy")
    .map(data => data.json()).toPromise()
  }

}
