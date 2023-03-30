import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  signUpUsers: any[] = [
    { email: "admin", password: "admin" }
  ];

  loginObj: any = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signUpUsers = JSON.parse(localData);
    }
  }

  _email: string = "";
  _password: string = "";
  showErrorMsg: boolean = false;

  //Function to validate log in details
  checkSignIn() {

    if (this._email.length == 0 || this._password.length == 0) {
      this.showErrorMsg = true;
    }

    else {
      const isValidUser = this.signUpUsers.find(u => u.email == this._email && u.password == this._password);
      if (isValidUser != undefined) {
        this.router.navigate(['/Dashboard']);
      }
      else {
        alert("INVALID DETAILS! TRY AGAIN!");
      }
    }
  }
}
