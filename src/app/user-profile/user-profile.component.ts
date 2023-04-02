import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  //when clicked on update button
  updateDetails(){
    alert("Details Updated!!");
  }

  userDetails: User;

  //to display user details
  constructor(private router: Router) {
    let user = (localStorage.getItem('userDetails')!);
    this.userDetails = User.fromJSON(JSON.parse(localStorage.getItem('userDetails')!).consumer);
  }

}
