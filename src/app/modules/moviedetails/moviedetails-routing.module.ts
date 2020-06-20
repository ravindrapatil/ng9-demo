import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';

// import { MoviedetailsComponent } from './moviedetails.component';

const routes: Routes = [
  {
    path: '',
    component: MoviedetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviedetailsRoutingModule {}
