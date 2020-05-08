import { Component, OnInit } from '@angular/core';
import { StockService } from '../../core/services/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  readonly displayedColumns: string[] = ['position', 'name', 'buyPrice', 'recommendedBuy', 'order'];

  stocks$ = this.stockService.stocks$;
  topX$ = this.stockService.topX$;

  constructor(private stockService: StockService) { }

  ngOnInit(): void {
  }

}
