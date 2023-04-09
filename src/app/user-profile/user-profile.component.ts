import { Component, OnInit, Input } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {

  //when clicked on update button

  userDetails: User;
  currentPwd: string = "";
  newPwd: string = "";
  confirmPwd: string = "";

  updateDetails(){
    if (this.newPwd !== this.confirmPwd) {
      alert("Passwords do not match")
      return;
    }
    this.restService.updatePassword(this.currentPwd, this.newPwd)
      .subscribe({
        next: (data: string) =>{
          alert("Password updated successfully")},
        error: (err) => {alert(err.error)}
        });
  }

  //to display user details
  constructor(private router: Router, private restService: RestService) {
    let user = (localStorage.getItem('userDetails')!);
    this.userDetails = User.fromJSON(JSON.parse(localStorage.getItem('userDetails')!).consumer);
  }

}
