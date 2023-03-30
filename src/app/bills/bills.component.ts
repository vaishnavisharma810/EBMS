import { Component, Input } from '@angular/core';
import { Bills } from '../Bills';
import { Consumers } from '../Consumers';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent {
  bills: Bills[] = [];
  bill! : Bills;
  @Input()
  consumer! : Consumers;
  constructor(private restService: RestService) { }

  ngOnInit() {
    this.getBills();
  }

  isBillPay : boolean = false;
  billPay(bill : Bills){
    this.isBillPay = true;
    this.bill = bill;
  }
  
  // bills
  getBills() {
    this.restService.getBills(this.consumer.consumer_no).subscribe({
      next: (data: Bills[]) => { this.bills = data },
      error: (err) => console.log(err)
    })
  }
}
