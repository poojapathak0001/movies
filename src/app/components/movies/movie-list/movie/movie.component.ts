import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../../../../services/movie.service';
import { TMDB } from '../../../../configs/tmdb.config';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers:[MovieService]
})
export class MovieComponent implements OnInit {
	@Input() movie: any;

  baseUrl = TMDB.baseUrl;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  // Add favourite movie to database
  addMovie(movie) {
  	this.movieService.addMovie(movie).subscribe((res) =>{
  		
  	}, (error) =>{

  	})
  }
}
