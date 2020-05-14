import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Stock } from 'src/app/shared/models/stock.model';
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
  tableDataSource$: Observable<MatTableDataSource<Stock>>;
  tableDataSource: MatTableDataSource<Stock>;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private stockService: StockService) {
    this.tableDataSource$ = this.stocks$.pipe(map(stocks => new MatTableDataSource(stocks)));
  }

  ngOnInit(): void {
    this.tableDataSource$.pipe(tap(tableDataSource => tableDataSource.sort = this.sort))
      .subscribe(tableDataSource => this.tableDataSource = tableDataSource);
  }
}
