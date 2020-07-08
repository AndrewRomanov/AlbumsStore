import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignUpComponent} from './sign-up/sign-up.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {ItemsComponent} from './items/items.component';
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {UserService} from "./services/user.service";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ToastrModule} from "ngx-toastr";
import {MatToolbarModule} from "@angular/material/toolbar";
import {AlbumsService} from "./services/albums.service";
import {MatCardModule} from "@angular/material/card";
import { AlbumComponent } from './album/album.component';
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatGridListModule} from "@angular/material/grid-list";
import {AuthGuard} from "./auth/auth.guard";
import {HttpClientModule} from "@angular/common/http";
import {NotificationService} from "./services/notification.service";
import {GenresService} from "./services/genres.service";


const routes = [
  {path: '', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'items', component: ItemsComponent, canActivate: [AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    ItemsComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    MatToolbarModule,
    MatCardModule,
    MatSelectModule,
    MatPaginatorModule,
    MatGridListModule
  ],
  providers:
    [
      UserService,
      AlbumsService,
      GenresService,
      NotificationService
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
