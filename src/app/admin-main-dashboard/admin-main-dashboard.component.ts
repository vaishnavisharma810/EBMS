import { Component } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main-dashboard',
  templateUrl: './admin-main-dashboard.component.html',
  styleUrls: ['./admin-main-dashboard.component.scss']
})
export class AdminMainDashboardComponent {

  userDetails: User;

  //to display admin details in admin dashboard

  constructor(private router: Router) {
    let user = (localStorage.getItem('userDetails')!);
    this.userDetails = User.fromJSON(JSON.parse(localStorage.getItem('userDetails')!).consumer);
  }
}
