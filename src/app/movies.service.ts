import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private APIKey = '91623bdb3b49448c9cb899212b1b1d71';
  private APIUrl = 'https://api.themoviedb.org/3';

  constructor() {
  }

  async popularMoviesQuery() {
    const url = `${this.APIUrl}/movie/popular?api_key=${this.APIKey}`;
    const response = await fetch(url);
    const json = await response.json();
    return json.results;
  }

}
