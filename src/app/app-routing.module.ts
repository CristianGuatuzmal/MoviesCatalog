import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesViewComponent } from './categories-view/categories-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';

const routes: Routes = [
  {path: 'most-popular', component: LandingViewComponent},
  {path: '', pathMatch: 'full', redirectTo: 'most-popular'},
  {path: 'categories-search', component: CategoriesViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
