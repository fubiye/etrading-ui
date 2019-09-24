import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyMaterialModule} from '../material-module';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { loadSvgResources } from "./utils/svg.util";
import { StocksComponent } from './stock/stocks.component';
import { BondComponent } from './bond/bond.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonComponent } from './common/common.component';
import { ActionComponent } from './action/action.component';
import { DialogOverviewExampleDialog } from './action/dialog-overview-example-dialog';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    StocksComponent,
    BondComponent,
    CommonComponent,
    ActionComponent,
    DialogOverviewExampleDialog
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    BrowserAnimationsModule,
    FormsModule,
    MyMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogOverviewExampleDialog]
})
export class AppModule {
   constructor(ir: MatIconRegistry,
    ds: DomSanitizer
    ){
      loadSvgResources(ir,ds);
    }
 }
