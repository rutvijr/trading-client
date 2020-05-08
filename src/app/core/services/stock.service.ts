import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stocks$ = of([
    { position: 1, name: 'AAPL', buyPrice: 100.5, recommendedBuy: 1 },
    { position: 2, name: 'GOOG', buyPrice: 95.82, recommendedBuy: 1 }
  ]);
  topX$ = this.stocks$.pipe(map(stocks => stocks.length));

  constructor() { }
}
