import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

import { TheMoviesRoutingModule } from './route-themoviedb.module';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviecardComponent } from './components/moviecard/moviecard.component';
import { ThemoviedbService } from './services/themoviedb.service';

const ngMaterial = [
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  FlexLayoutModule,
  MatMenuModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatTabsModule,
  MatCardModule
];

@NgModule({
  declarations: [
    MoviesComponent,
    MoviecardComponent,
  ],
  imports: [
    CommonModule, 
    TheMoviesRoutingModule,
    ...ngMaterial
  ],
  exports: [
    MoviesComponent,
    MoviecardComponent,
  ],
  providers: [
    ThemoviedbService
  ]
})
export class ThemoviedbModule {}
