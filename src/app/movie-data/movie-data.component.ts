import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit {

  @Input() imagePath: string;
  @Input() movieTitle: string;
  @Input() movieOverview: string;
  @Input() movieDate: string;
  @Input() movieRating: number;
  @Input() numberOfStars: string;
  constructor() { }

  ngOnInit() {
    this.numberOfStars = this.determineNumberOfStars(this.movieRating).toString();
  }

  determineNumberOfStars(rating: number) {
    return Math.round(rating / 2);
  }

}
