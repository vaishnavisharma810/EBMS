import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent {

  userDetails: User;

//to display admin details

  constructor(private router: Router) {
    let user = (localStorage.getItem('userDetails')!);
    this.userDetails = User.fromJSON(JSON.parse(localStorage.getItem('userDetails')!).consumer);
  }

}
