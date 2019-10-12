import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private APIKey = '91623bdb3b49448c9cb899212b1b1d71';
  private APIUrl = 'https://api.themoviedb.org/3';
  private languageString = 'language=es';

  constructor() {
  }

  async popularMoviesQuery() {
    const url = `${this.APIUrl}/movie/popular?api_key=${this.APIKey}&${this.languageString}&page=1`;
    const response = await fetch(url);
    const json = await response.json();
    return json.results;
  }

  async getCategoriesList() {
    const url = `${this.APIUrl}/genre/movie/list?api_key=${this.APIKey}&${this.languageString}`;
    const response = await fetch(url);
    const json = await response.json();
    return json.genres;
  }

  async getFilteredMovies(genres: number[]) {
    const genresToString: string = genres.join();
    const url = `${this.APIUrl}/discover/movie?api_key=${this.APIKey}&${this.languageString}&sort_by=popularity.desc\
&include_adult=false&include_video=false&page=1&with_genres=${genresToString}`;
    const response = await fetch(url);
    const json = await response.json();
    return json.results;
  }

}
