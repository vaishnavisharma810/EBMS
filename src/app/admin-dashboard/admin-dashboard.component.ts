import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  //check variables
  isBillGen: boolean = false;
  isUserProfile: boolean = false;
  isAddNewConsumer: boolean = false;

  constructor(private router: Router) { }

  //basic check function
  dashboard() {
    this.isUserProfile = false;
    this.isBillGen = false;
    this.isAddNewConsumer = false;
  }

  logout(){
    this.router.navigate(['/BaseLogin']);
  }

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
