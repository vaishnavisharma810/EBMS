import { Component } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consumer-main-dashboard',
  templateUrl: './consumer-main-dashboard.component.html',
  styleUrls: ['./consumer-main-dashboard.component.scss']
})
export class ConsumerMainDashboardComponent {

  userDetails: User;

  //Function to show user details in consumer dashboard

  constructor(private router: Router) {
    let user = (localStorage.getItem('userDetails')!);
    this.userDetails = User.fromJSON(JSON.parse(localStorage.getItem('userDetails')!).consumer);
  }

}
