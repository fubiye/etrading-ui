import { Component, OnInit } from '@angular/core';
import { Stock } from '../model/stock';

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
  }

  constructor() { }

  ngOnInit() {
  }

}
