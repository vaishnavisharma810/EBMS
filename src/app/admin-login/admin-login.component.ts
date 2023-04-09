import { Component,Input } from '@angular/core';
import { User } from '../User';
import { Router } from '@angular/router';
import {
  FieldValidatorsService,
  ValidatorResult,
} from '../services/field-validators.service';
import { RestService } from '../services/rest.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  constructor(
    private router: Router,
    private restService : RestService
  ) { }

  @Input()
  user! : User;

  adminEmail: string = "";
  adminPassword: string = "";

  consumerEmail: string = "";
  consumerPassword: string = "";

  showErrorMsg: boolean = false;
  errorMsg: string = '';

  checkSignInAdmin() {
    this.errorMsg = '';
    this.showErrorMsg = false;

    //Checking if email or password is not empty
    if (this.adminEmail.length == 0 || this.adminPassword.length == 0) {
      this.showErrorMsg = true;
    }

    const result: ValidatorResult = FieldValidatorsService.isSignInFormValid(
      this.adminEmail
    );

    if (result.isValid) {
      
      console.log(this.adminEmail);
      console.log(this.adminPassword);
      this.restService.consumerLogin(this.adminEmail, this.adminPassword).subscribe({
        next: (response : HttpResponse<Object>) => {

          //storing in local storage
          localStorage.setItem('userDetails', JSON.stringify(response.body));
          //navigating to admin dashboard
          this.router.navigate(['/AdminDashboard']);
        },

        //if there is an error

        error: (response : HttpResponse<String>) => {
          if(response.status === 401) {
            alert("WRONG PASSWORD!! TRY AGAIN");
          } 
          else if(response.status === 404) {
            alert("EMAIL NOT FOUND");
          } 
          else {
            alert("CAN'T RECOGNISE YOU!! ENTER YOUR DETAILS AGAIN!")
          }
        },
      });
    } else {
      alert("INVALID EMAIL!!");
    }
  }

  checkSignInConsumer() {
    this.errorMsg = '';
    this.showErrorMsg = false;

    //Checking for empty fields
    if (this.consumerEmail.length == 0 || this.consumerPassword.length == 0) {
      this.showErrorMsg = true;
    }

    const result: ValidatorResult = FieldValidatorsService.isSignInFormValid(
      this.consumerEmail
    );

    //If email is validated
    if (result.isValid) {
      
      console.log(this.consumerEmail);
      console.log(this.consumerPassword);
      this.restService.consumerLogin(this.consumerEmail, this.consumerPassword).subscribe({
        next: (response : HttpResponse<Object>) => {
          
          localStorage.setItem('userDetails', JSON.stringify(response.body));

          this.router.navigate(['/Dashboard']);
        },
        //If there  is an error
        error: (response : HttpResponse<String>) => {
          if(response.status === 401) {
            alert("WRONG PASSWORD!! TRY AGAIN");
          } 
          else if(response.status === 404) {
            alert("EMAIL NOT FOUND");
          } 
          else {
            alert("CAN'T RECOGNISE YOU!! ENTER YOUR DETAILS AGAIN!")
          }
        },
      });
    } else {
      alert("INVALID EMAIL!!");
    }
  }
}
