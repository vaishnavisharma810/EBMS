import { Injectable } from '@angular/core';

export class ValidatorResult {
  isValid: boolean;
  error: string;

  constructor(isValid: boolean, error: string) {
    this.isValid = isValid;
    this.error = error;
  }
}

@Injectable({
  providedIn: 'root'
})

export class FieldValidatorsService {

  constructor() { }

  //to validate email while logging in

  static isSignInFormValid(email: string): ValidatorResult {
    return this.isValidEmail(email);
  }

  private static isValidEmail(email: string): ValidatorResult {
    const EMAIL_REGEX_PATTERN: string =
      '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';
    const isValid: boolean = RegExp(EMAIL_REGEX_PATTERN).test(email);
    const error: string = isValid ? '' : 'ERROR: Email address is invalid';
    return new ValidatorResult(isValid, error);
  }
  
}
