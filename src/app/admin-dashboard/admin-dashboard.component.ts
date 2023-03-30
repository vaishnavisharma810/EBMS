import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  isBillGen: boolean = false;
  isUserProfile: boolean = false;
  isAddNewConsumer: boolean = false;

  generateBill() {
    this.isBillGen = true;
    this.isUserProfile = false;
    this.isAddNewConsumer = false;
  }

  displayUserProfile() {
    this.isUserProfile = true;
    this.isBillGen = false;
    this.isAddNewConsumer = false;
  }

  addNewConsumer(){
    this.isAddNewConsumer = true;
    this.isBillGen = false;
    this.isUserProfile = false;
  }
}
