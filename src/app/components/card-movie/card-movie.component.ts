import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movies';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css'],
})
export class CardMovieComponent implements OnInit {
  @Input('movieInput') movie!: Movie;

  constructor() {}

  ngOnInit(): void {}

  getImagen() {
    if (this.movie.Poster === 'N/A') {
      return 'https://via.placeholder.com/600';
    } else {
      return this.movie.Poster;
    }
  }
}
