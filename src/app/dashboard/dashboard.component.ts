import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isBillPay : boolean = false;
  isBills : boolean = false;
  isTransactionHistory : boolean = false;
  isUserProfile : boolean = false;
  isFaq : boolean = false;
  isEnergy : boolean = false

  billPay(){
    this.isBillPay = true;
    this.isBills = false;
    this.isTransactionHistory = false;
    this.isUserProfile = false;
    this.isFaq = false;
    this.isEnergy = false;
  }

  setBills(){
    this.isBills = true;
    this.isBillPay = false;
    this.isTransactionHistory = false;
    this.isUserProfile = false;
    this.isFaq = false;
    this.isEnergy = false;
  }

  transactionHistory(){
    this.isTransactionHistory = true;
    this.isBillPay = false;
    this.isBills = false;
    this.isUserProfile = false;
    this.isFaq = false;
    this.isEnergy = false;
  }

  displayUserProfile(){
    this.isUserProfile = true;
    this.isBills = false;
    this.isBillPay = false;
    this.isTransactionHistory = false;
    this.isFaq = false;
    this.isEnergy = false;
  }

  displayFaq(){
    this.isFaq = true;
    this.isUserProfile = false;
    this.isBills = false;
    this.isBillPay = false;
    this.isTransactionHistory = false;
    this.isEnergy = false;
  }

  displayEnergy(){
    this.isEnergy = true;
    this.isUserProfile = false;
    this.isBills = false;
    this.isBillPay = false;
    this.isTransactionHistory = false;
    this.isFaq = false;
  }
}
