import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { Stock } from 'src/app/shared/models/stock.model';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stocks$: Observable<Stock[]> = of([
    { position: 1, name: 'AAPL', buyPrice: 100.5, recommendedBuy: 1 },
    { position: 2, name: 'GOOG', buyPrice: 95.82, recommendedBuy: 2 }
  ]);
  readonly topX$ = this.stocks$.pipe(map(stocks => stocks.length));

  private readonly STOCKS_URL = 'ws://localhost:80';
  private readonly stocksWebSocket$: WebSocketSubject<Stock[]> = webSocket(this.STOCKS_URL);

  constructor() { }

  streamTopStocks() {
    // this.stocks$ = this.stocksWebSocket.asObservable();
  }
}
