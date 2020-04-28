import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MainpageComponent } from './mainpage/mainpage.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionDetailComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
