import { Component, OnInit } from '@angular/core';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  bigData: { name: string; data: number[]; }[];
  // paiData: ({ name: string; y: number; sliced: boolean; selected: boolean; } | { name: string; y: number; sliced?: undefined; selected?: undefined; })[];
  // tableData: { position: number; name: string; weight: number; symbol: string; }[];
  cardData: { data: number[]; }[];
  tableData: { position: number; name: string; weight: number; symbol: string; }[];
  paiData: ({ name: string; y: number; sliced: boolean; selected: boolean; } | { name: string; y: number; sliced?: undefined; selected?: undefined; })[];

  constructor(private dashboardService: DashboardService) { }
  
  ngOnInit(): void {
    this.bigData = this.dashboardService.bigChart();
    this.cardData = this.dashboardService.getCardData();
    this.paiData = this.dashboardService.getPaiChartData();
    this.tableData = this.dashboardService.getTableData();
  }

}

// https://www.youtube.com/watch?v=FP7Hs8lTy1k&t=1494s