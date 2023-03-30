import { Component } from '@angular/core';
import { Consumers } from '../Consumers';
import { RestService } from '../services/rest.service';
import { Transactions } from '../Transactions';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss']
})
export class TransactionHistoryComponent {

  constructor(private restService : RestService){}
  consumer! : Consumers;
  transactionHistory : Transactions[] = [];

  ngOnInit() {
    this.getTransactions();
  }

  // show all previous transactions
  getTransactions(){
    this.restService.getTransactionHistory(252).subscribe({
      next: (data: Transactions[]) => { this.transactionHistory = data; console.log(data) },
      error: (err) => console.log(err)
    })
  }
}
