import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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

import { RouterModule } from '@angular/router';
import { HighchartareaComponent } from './widgets/highchartarea/highchartarea.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { TableComponent } from './components/table/table.component';

const ngMaterial = [MatDividerModule, MatToolbarModule, MatIconModule, MatButtonModule, 
  FlexLayoutModule, MatMenuModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule];

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HighchartareaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HighchartsChartModule,
    ...ngMaterial
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HighchartareaComponent,
    CardComponent,
    PieComponent,
    TableComponent,
  ]
})
export class SharedModule { }
