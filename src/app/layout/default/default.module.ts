import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
// import { DashboardService } from 'src/app/modules/services/dashboard.service';
// import { MoviesComponent } from 'src/app/modules/movies/movies.component';
// import { MoviesService } from 'src/app/modules/services/themoviedb/movies.service';
// import { MoviecardComponent } from 'src/app/modules/movies/moviecard/moviecard.component';
import { MatTabsModule } from '@angular/material/tabs';
// import { MoviedetailsComponent } from 'src/app/modules/movies/moviedetails/moviedetails.component';
import { ThemoviedbModule } from 'src/app/modules/themoviedb/themoviedb.module';
import { DashboardService } from 'src/app/modules/dashboard/services/dashboard.service';

const ngMaterial = [MatSidenavModule, MatDividerModule, MatCardModule, MatTabsModule];

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    // MoviesComponent,
    // MoviecardComponent,
    // MoviedetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ThemoviedbModule,
    FlexLayoutModule,
    ...ngMaterial
  ],
  providers: [
    DashboardService,
    // MoviesService
  ]
})
export class DefaultModule { }
