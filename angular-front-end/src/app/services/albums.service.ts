import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AlbumModel} from "../models/album.model";
import {Observable} from "rxjs";
import * as globals from "../../globals";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbums(): Observable<AlbumModel[]> {
    let tokenHandler = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.httpClient.get<AlbumModel[]>(globals.BaseURI + 'Albums/GetAllAlbums/', {headers: tokenHandler});
  }
}
