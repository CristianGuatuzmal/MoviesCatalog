import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-data',
  templateUrl: './movie-data.component.html',
  styleUrls: ['./movie-data.component.css']
})
export class MovieDataComponent implements OnInit {

  @Input() private imagePath: string;
  @Input() private movieTitle: string;
  @Input() private movieOverview: string;
  @Input() private movieDate: string;
  @Input() private movieRating: number;
  @Input() private numberOfStars: string;
  constructor() { }

  public ngOnInit() {
    this.numberOfStars = this.determineNumberOfStars(this.movieRating).toString();
  }

  public determineNumberOfStars(rating: number) {
    return Math.round(rating / 2);
  }

}
