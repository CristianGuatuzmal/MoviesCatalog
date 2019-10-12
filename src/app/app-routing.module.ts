import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { CategoriesViewComponent } from './categories-view/categories-view.component';


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
