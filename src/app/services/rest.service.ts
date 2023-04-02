import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Bills } from '../Bills';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

//Rest Service Class for all services

export class RestService {
  headers = { 'content-type': 'application/json' };
  billsUrl : string = `${environment.baseUrl}${environment.billsPath}/bills`;
  transactionsUrl : string = `${environment.baseUrl}${environment.billsPath}/transactions`;
  constructor(private http : HttpClient) { }


  createConsumer(consumer : any) : Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const url : string = `${environment.baseUrl}${environment.authPath}/consumer/register`;

    return this.http.post(
      url,
      JSON.stringify(consumer),
      {observe: 'response', headers: this.headers}
    );
  }

  // consumer login
  consumerLogin(email : string, password : string) : Observable<HttpResponse<Object>> {
    const url : string = `${environment.baseUrl}${environment.authPath}/consumer/login`;
    const body = {
      "email": email,
      "password": password
    }
    return this.http.post(
      url,
      JSON.stringify(body),
      {observe: 'response', headers: this.headers}
    );
  } 

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

  //get bill no of paid bills
  getPaidBillsList(consumer_no : number) : Observable<any> {
    return this.http.get(this.transactionsUrl+"/get-paid-bills/"+consumer_no);
  }
}
