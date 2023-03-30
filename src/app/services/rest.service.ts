import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bills } from '../Bills';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  url : string = "http://localhost:9001/api/ebm/bills"
  constructor(private http : HttpClient) { }

  // get bills for consumer
  getBills(consumer_no : number) : Observable<any> {
    return this.http.get(this.url+"/get-bills/"+consumer_no);
  } 

  // generate bill 
  generateBill(obj : any) : Observable<any> {
    const headers = { 'content-type': 'application/json' };
    const body = JSON.stringify(obj);
    return this.http.post(this.url + '/generate-bills', body, { 'headers': headers, 'responseType': 'text' });
  }
}