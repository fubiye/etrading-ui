import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { StocksComponent } from './stock/stocks.component';
import { BondComponent } from './bond/bond.component';

const routes: Routes = [
  {path:'', component: StocksComponent},
  {path:'bond', component: BondComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
