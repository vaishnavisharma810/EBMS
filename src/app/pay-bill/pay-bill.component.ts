import { Component, Input } from '@angular/core';
import { Bills } from '../Bills';

@Component({
  selector: 'app-pay-bill',
  templateUrl: './pay-bill.component.html',
  styleUrls: ['./pay-bill.component.scss']
})
export class PayBillComponent {

  @Input()
  bill!: Bills;

  @Input()
  consumer_name!: string;
  date: any = new Date().toLocaleString();
}
