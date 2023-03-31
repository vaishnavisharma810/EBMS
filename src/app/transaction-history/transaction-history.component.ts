import { Component, Input } from '@angular/core';
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
  @Input()
  consumer! : Consumers;
  transactionHistory : Transactions[] = [];

  ngOnInit() {
    this.getTransactions();
  }

  // show all previous transactions
  getTransactions(){
    this.restService.getTransactionHistory(this.consumer.consumer_no).subscribe({
      next: (data: Transactions[]) => { this.transactionHistory = data; console.log(data) },
      error: (err) => console.log(err)
    })
  }
}
