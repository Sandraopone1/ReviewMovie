import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";


import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ParentComponent } from './parent/parent.component';
import { MovieService } from './movie.service';
import { RevService } from './rev.service';
import { MovieListComponent } from './parent/movie-list/movie-list.component';
import { MovieNewComponent } from './parent/movie-new/movie-new.component';
import { MovieDisplayComponent } from './parent/movie-display/movie-display.component';
import { MovieReviewComponent } from './parent/movie-review/movie-review.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    MovieListComponent,
    MovieNewComponent,
    MovieDisplayComponent,
    MovieReviewComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    MovieService,
    RevService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }