import { Component, OnInit } from '@angular/core';
import { RevService } from '../rev.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  movies = [];
  constructor() { }

  ngOnInit() {
  }

}

