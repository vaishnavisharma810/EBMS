import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.scss']
})
export class GenerateBillComponent {

  constructor(private restService: RestService) { }

  consumer_no!: number;
  current_reading!: number;

  delay(milliseconds: number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

  // for generating bills
  generateBill() {
    this.restService.generateBill({
      consumer_no: this.consumer_no,
      presentReading: this.current_reading
    }).subscribe({
      next: (data: string) => { alert(data) },
      error: (err) => {alert(err.error)}
    })
  }
}
