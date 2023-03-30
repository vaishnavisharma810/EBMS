import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isBills: boolean = false;
  isTransactionHistory: boolean = false;
  isUserProfile: boolean = false;
  isFaq: boolean = false;
  isEnergy: boolean = false

  dashboard() {
    this.isBills= false;
    this.isTransactionHistory = false;
    this.isUserProfile = false;
    this.isFaq = false;
    this.isEnergy = false
  }

  setBills() {
    this.isBills = true;
    this.isTransactionHistory = false;
    this.isUserProfile = false;
    this.isFaq = false;
    this.isEnergy = false;
  }

  transactionHistory() {
    this.isTransactionHistory = true;
    this.isBills = false;
    this.isUserProfile = false;
    this.isFaq = false;
    this.isEnergy = false;
  }

  displayUserProfile() {
    this.isUserProfile = true;
    this.isBills = false;
    this.isTransactionHistory = false;
    this.isFaq = false;
    this.isEnergy = false;
  }

  displayFaq() {
    this.isFaq = true;
    this.isUserProfile = false;
    this.isBills = false;
    this.isTransactionHistory = false;
    this.isEnergy = false;
  }

  displayEnergy() {
    this.isEnergy = true;
    this.isUserProfile = false;
    this.isBills = false;
    this.isTransactionHistory = false;
    this.isFaq = false;
  }
}
