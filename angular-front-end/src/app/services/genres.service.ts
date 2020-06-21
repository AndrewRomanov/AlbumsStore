import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import * as globals from "../../globals";
import {GenreModel} from "../models/genre.model";

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private httpClient: HttpClient) {
  }

  getGenres(): Observable<GenreModel[]> {
    let tokenHandler = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.httpClient.get<GenreModel[]>(globals.BaseURI + 'Genres/GetGenres/', {headers: tokenHandler});
  }
}
