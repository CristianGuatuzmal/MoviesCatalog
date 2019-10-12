import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { MatListOption } from '@angular/material/list';
import { filter } from 'minimatch';

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

  constructor(private moviesService: MoviesService) { }

  async ngOnInit() {
    await this.moviesService.getCategoriesList().then(data => this.categories = data);
    this.maximumLimit = false;
    this.expectedQualification = 0;
    this.inclusive = true;
  }
  buildMoviesList(selectedCategories: string[]) {
    let usableCategories: number[] = [0];
    const filteredCategories = this.categories.filter(category => selectedCategories.includes(category.name));
    usableCategories =  this.generateNumberArray(filteredCategories);
    this.moviesService.getFilteredMovies(usableCategories).then((data: []) => this.moviesList = data);
  }

  private generateNumberArray(categories: {id: number, name: string}[]) {
    let result: number[] = [0];
    result = categories.map((item, index) => result[index] = item.id);
    return result;
  }

  private filterByQualification() {
    if (this.maximumLimit) {
      this.inclusive ? this.moviesList.filter( movie => movie.vote_average <= this.expectedQualification) :
      this.moviesList.filter( movie => movie.vote_average < this.expectedQualification);
    } else {
      this.inclusive ? this.moviesList.filter( movie => movie.vote_average >= this.expectedQualification) :
      this.moviesList.filter( movie => movie.vote_average > this.expectedQualification);
    }
  }
}
