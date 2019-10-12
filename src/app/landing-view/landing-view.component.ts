import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.css']
})
export class LandingViewComponent implements OnInit {

  private popularMovies: [{}];

  constructor(private moviesService: MoviesService) { }

  public ngOnInit() {
    this.moviesService.popularMoviesQuery().then(data => this.popularMovies = data);
  }

}
