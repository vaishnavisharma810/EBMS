import { Component, Input } from '@angular/core';
import { Bills } from '../Bills';
import { Consumers } from '../Consumers';
import { RestService } from '../services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss']
})
export class PayBillComponent {

  constructor(private restService : RestService, private router : Router) {}
  
  @Input()
  bill!: Bills;

  @Input()
  consumer!: Consumers;
  date: any = new Date().toLocaleString();

  showTransaction : boolean = false;
  
  createTransaction(){
    this.restService.createTransaction({
      billNo : this.bill.bill_no,
      consumerNo : this.bill.consumer_no,
      meterReading : this.bill.presentReading - this.bill.previousReading,
      amountPaid : this.bill.amountToPay
    }).subscribe({
      next: (data: string) => { 
        alert(data + " You can view your Transaction History!!")
      },
      error: (err) => {alert(err.error)}
    })
  }
}
