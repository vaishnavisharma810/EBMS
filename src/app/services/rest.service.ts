import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bills } from '../Bills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  billsUrl : string = "http://localhost:9001/api/ebm/bills"
  transactionsUrl : string = "http://localhost:9001/api/ebm/transactions"
  constructor(private http : HttpClient) { }

  // get bills for consumer
  getBills(consumer_no : number) : Observable<any> {
    return this.http.get(this.billsUrl+"/get-bills/"+consumer_no);
  } 

  // generate bill 
  generateBill(obj : any) : Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    return this.http.post(this.billsUrl + '/generate-bills', body, { 'headers': headers, 'responseType': 'text' });
  }

  // send transaction data to server
  createTransaction(obj : any) :  Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    return this.http.post(this.transactionsUrl + '/create-transaction', body, { 'headers': headers, 'responseType': 'text' });
  }

  // retrieve transaction history
  getTransactionHistory(consumer_no : number) : Observable<any> {
    return this.http.get(this.transactionsUrl+"/get-transactions/"+consumer_no);
  }
}
