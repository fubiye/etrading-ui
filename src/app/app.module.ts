import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MyMaterialModule} from '../material-module';

import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { loadSvgResources } from "./utils/svg.util";
import { StocksComponent } from './stocks/stocks.component';


@NgModule({
  declarations: [
    AppComponent,
    StocksComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MyMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
   constructor(ir: MatIconRegistry,
    ds: DomSanitizer
    ){
      loadSvgResources(ir,ds);
    }
 }
