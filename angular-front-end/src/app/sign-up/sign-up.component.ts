import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {NotificationService} from "../services/notification.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(public userService: UserService,
              private router: Router,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') != null) {
      this.router.navigateByUrl('items');
    }
  }

  onSubmit() {
    this.userService.register().subscribe(
      (success: any) => {
        if (success.succeeded) {
          this.notificationService.showSuccess("Вы успешно зарегистрированы!");
          this.router.navigateByUrl('signIn');
        } else {
          this.notificationService.showError("Ошибка при регистрации");
        }
      },
      error => {
        this.notificationService.showError("Ошибка при регистрации");
      }
    );
  }
}
