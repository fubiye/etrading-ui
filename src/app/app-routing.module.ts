import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { StocksComponent } from './stock/stocks.component';
import { BondComponent } from './bond/bond.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  {path:'', component: StocksComponent},
  {path:'bond', component: BondComponent},
  {path:'common', component: CommonComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
