import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(public userService: UserService,
              private router: Router,
              private notificationService: NotificationService) {
    localStorage.removeItem('token');
  }

  login() {
    this.userService.login().subscribe(
      (success: any) => {
        localStorage.setItem('token', success.token);
        this.userService.isLoggedIn = true;
        this.router.navigateByUrl('items');
      },
      error => {
        this.notificationService.showError("Ошибка входа");
      }
    );
  }

  checkValidForm(contolName: string): boolean {
    console.log(this.userService.signInForm.get(contolName).errors);
    return true;
  }
}
