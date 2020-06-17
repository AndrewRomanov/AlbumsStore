import {Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {register} from "ts-node";
import {HttpClient} from "@angular/common/http";
import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly baseURI = 'http://localhost:5000/api/';

  isLoggedIn = false;

  constructor(private formBuilder: FormBuilder,
              private httpClient: HttpClient) {
  }

  signUpForm = this.formBuilder.group({
    fullName: [null, [
      Validators.required,
      Validators.pattern(/[A-z]/)
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
    return this.httpClient.post(this.baseURI + 'User/Register/', body);
  }

  logout() {
    this.isLoggedIn = false;
    return this.httpClient.get(this.baseURI + 'User/Logout/');
  }

  login() {
    let body = {
      UserName: this.signInForm.value.userName,
      Password: this.signInForm.value.password
    };
    return this.httpClient.post(this.baseURI + 'User/Login', body);
  }
}
