import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { MovieListComponent } from './parent/movie-list/movie-list.component';
import { MovieNewComponent } from './parent/movie-new/movie-new.component';
import { MovieDisplayComponent } from './parent/movie-display/movie-display.component';
import { MovieReviewComponent } from './parent/movie-review/movie-review.component';


const routes: Routes = [
  {
    path: "", component: ParentComponent, children:[
    {path:"",component: MovieListComponent},
    {path:"new",component: MovieNewComponent},
    
    {path:"display/:id",component: MovieDisplayComponent},
    {path:"review/:id", component: MovieReviewComponent}
  ]
  },
  ]

  @NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }