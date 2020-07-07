import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {UserService} from "./services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public userService: UserService,
              private toastr: ToastrService,
              private router: Router) {
  }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  onLogout() {
    this.userService.logout().subscribe(
      success => {
        localStorage.removeItem('token');
        this.userService.isLoggedIn = false;
        this.router.navigateByUrl('');
      },
      error => {
        localStorage.removeItem('token');
        this.userService.isLoggedIn = false;
        this.router.navigateByUrl('');}
    );
  }
}
