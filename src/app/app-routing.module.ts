import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layout/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: 'themoviedb',
        // use this syntax for non-ivy or Angular 7 and below
        // loadChildren: './modules/themoviedb/themoviedb.module#ThemoviedbModule',
        // new dynamic import method
        loadChildren: () =>
          import('./modules/themoviedb/themoviedb.module').then(
            (m) => m.ThemoviedbModule
          ),
      },
      {
        path: 'moviedetail/:id',
        loadChildren: () =>
          import('./modules/moviedetails/moviedetails.module').then(
            (m) => m.MoviedetailsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
