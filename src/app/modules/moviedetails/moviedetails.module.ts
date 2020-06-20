import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviedetailsRoutingModule } from './moviedetails-routing.module';
import { MoviedetailsComponent } from './components/moviedetails/moviedetails.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MoviedetailsService } from './services/moviedetails.service';
import { MoviepostersComponent } from './components/movieposters/movieposters.component';
import { MoviecastComponent } from './components/moviecast/moviecast.component';

import { MatButtonModule } from '@angular/material/button';

const ngMaterial = [MatButtonModule,]


@NgModule({
  declarations: [
    MoviedetailsComponent,
    MoviepostersComponent,
    MoviecastComponent
  ],
  imports: [
    CommonModule,
    MoviedetailsRoutingModule,
    FlexLayoutModule,
    ...ngMaterial
  ],
  exports: [
    MoviedetailsComponent
  ],
  providers: [
    MoviedetailsService
  ]
})
export class MoviedetailsModule { }
