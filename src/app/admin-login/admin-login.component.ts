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

  email: string = "";
  password: string = "";

  showErrorMsg: boolean = false;
  errorMsg: string = '';

  checkSignIn() {
    this.errorMsg = '';
    this.showErrorMsg = false;

    //Checking if email or password is not empty
    if (this.email.length == 0 || this.password.length == 0) {
      this.showErrorMsg = true;
    }

    const result: ValidatorResult = FieldValidatorsService.isSignInFormValid(
      this.email
    );

    if (result.isValid) {
      
      console.log(this.email);
      console.log(this.password);
      this.restService.consumerLogin(this.email, this.password).subscribe({
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
}