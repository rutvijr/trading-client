import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, tap } from 'rxjs/operators';
import { Stock } from 'src/app/shared/models/stock.model';
import { StockService } from '../../core/services/stock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  readonly displayedColumns: string[] = [
    'position',
    'name',
    'buyPrice',
    'recommendedBuy',
    'order',
  ];

  readonly stocks$ = this.stockService.stocks$;
  readonly topX$ = this.stockService.topX$;

  tableDataSource: MatTableDataSource<Stock>;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private stockService: StockService) {}

  ngOnInit(): void {
    this.stocks$
      .pipe(
        map((stocks) => new MatTableDataSource(stocks)),
        tap((tableDataSource) => this.setTableDataSource(tableDataSource))
      )
      .subscribe();
  }

  private setTableDataSource(tableDataSource: MatTableDataSource<Stock>) {
    tableDataSource.sort = this.sort;
    this.tableDataSource = tableDataSource;
  }
}
