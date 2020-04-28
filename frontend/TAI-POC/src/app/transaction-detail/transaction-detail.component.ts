import { Component, OnInit } from '@angular/core';


const transactionData: Transaction[] = [
  {class: '0026', sku: '80000', retail: '16.00', qun:'1', desc:'PAINT WAIST-SEAT',qtrtn:''},
  {class: '0026', sku: '80000', retail: '13.00', qun:'1', desc:'PAINT PLAIN BOTTOM',qtrtn:''}
]

@Component({
  selector: 'transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columnHeadings :string[] = ['class','sku','retail','qun','desc','qtrtn'];
  
  data = transactionData;

}

export interface Transaction{
  class: String,
  sku: String,
  retail: String,
  qun: String,
  desc: String,
  qtrtn: String
}
