import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from './model/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocksUrl = '/assets/data/stock_hs_a._page_n_2.json';
  constructor(
    private http: HttpClient
  ) { }

  getStocks(): Observable<Stock[]>{
    return this.http.get<Stock[]>(this.stocksUrl);
  }
}
