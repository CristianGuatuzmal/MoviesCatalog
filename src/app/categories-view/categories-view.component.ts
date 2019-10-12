import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.css']
})
export class CategoriesViewComponent implements OnInit {

  private categories: [{id: number, name: string}];
  private moviesList: any;
  private expectedQualification: number;
  private maximumLimit: boolean;
  private inclusive: boolean;
  private listCopy: [];

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    await this.moviesService.getCategoriesList().then(data => this.categories = data);
    this.maximumLimit = false;
    this.expectedQualification = 0;
    this.inclusive = false;
    this.moviesService.popularMoviesQuery().then(data => this.moviesList = data);
    this.moviesService.popularMoviesQuery().then(data => this.listCopy = data);
  }
  buildMoviesList(selectedCategories: string[]) {
    let usableCategories: number[] = [0];
    const filteredCategories = this.categories.filter(category => selectedCategories.includes(category.name));
    usableCategories =  this.generateNumberArray(filteredCategories);
    this.moviesService.getFilteredMovies(usableCategories).then((data: []) => this.moviesList = data);
    this.listCopy = this.moviesList;
  }

  private generateNumberArray(categories: {id: number, name: string}[]) {
    let result: number[] = [0];
    result = categories.map((item, index) => result[index] = item.id);
    return result;
  }

  private setExpectedQualification(expectedQualification: number) {
    this.expectedQualification = expectedQualification;
  }

  private filterByQualification(expectedQualification: number) {
    this.moviesList = this.listCopy;
    this.setExpectedQualification(expectedQualification);
    if (this.moviesList === undefined) {
      alert('Por favor seleccione una categoría primero');
    } else {
      if (this.maximumLimit === true) {
        this.inclusive === true ?
          this.moviesList = this.moviesList.filter( movie =>
            Math.round(movie.vote_average / 2) <= this.expectedQualification) :
          this.moviesList = this.moviesList.filter( movie =>
            Math.round(movie.vote_average / 2) < this.expectedQualification);
      } else {
        this.inclusive === true ?
          this.moviesList = this.moviesList.filter( movie =>
            Math.round(movie.vote_average / 2) >= this.expectedQualification) :
          this.moviesList = this.moviesList.filter( movie =>
            Math.round(movie.vote_average / 2) > this.expectedQualification);
      }
    }
  }

  toggleInclusive(inclusive: boolean) {
    this.inclusive = !this.inclusive;
  }

  toggleMaximumLimit(maximumLimit: boolean) {
    this.maximumLimit = !this.maximumLimit;
  }
}
