import { Component, OnInit } from '@angular/core';
import { Bond } from './bond';
import { BondService } from './bond.service';

@Component({
  selector: 'app-bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})
export class BondComponent implements OnInit {

  bonds: Bond[];

  constructor(private bondService: BondService) { }

  ngOnInit() {
    this.getBonds();
  }

  getBonds():void{
    this.bondService.getBonds().subscribe(bonds => this.bonds = bonds);
  }

}
