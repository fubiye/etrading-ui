import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';
import { StockService } from './stock.service';

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {
  
  stock: Stock = {
    symbol: 'sh600058',
    code: '600058',
    name: '五矿发展'
  };
  stocks: Stock[];

  constructor(private stockService: StockService) { }

  ngOnInit() {
    this.getStocks();
  }

  getStocks(): void{
    this.stockService.getStocks().subscribe(stocks => {
      this.stocks = stocks;  
    })
  }

}
