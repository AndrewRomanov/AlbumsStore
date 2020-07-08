import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  isLoggedIn = false;

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient) {
  }

  signUpForm = this.formBuilder.group({
    fullName: [null, [
      Validators.required,
      Validators.pattern(/[A-zА-я]/)
    ]],
    userName: [null, [
      Validators.required,
      Validators.pattern(/[A-z0-9]/)
    ]],
    email: [null, [
      Validators.required,
      Validators.email
    ]],
    password: [null, [
      Validators.required,
      Validators.minLength(6)
    ]]
  });

  signInForm = this.formBuilder.group(
    {
      userName: [null, [
        Validators.required,
        Validators.pattern(/[A-z0-9]/)
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(6)
      ]]
    });

  register() {
    let body = {
      FullName: this.signUpForm.value.fullName,
      UserName: this.signUpForm.value.userName,
      Email: this.signUpForm.value.email,
      Password: this.signUpForm.value.password
    };
    return this.httpClient.post(globals.BaseURI + 'User/Register/', body);
  }

  logout() {
    this.isLoggedIn = false;
    return this.httpClient.get(globals.BaseURI + 'User/Logout/');
  }

  login() {
    let body = {
      UserName: this.signInForm.value.userName,
      Password: this.signInForm.value.password
    };
    return this.httpClient.post(globals.BaseURI + 'User/Login', body);
  }
}
