import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AlbumModel} from "../models/album.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  readonly baseURI = 'http://localhost:5000/api/';

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbums(): Observable<AlbumModel[]> {
    debugger;
    let tokenHandler = new HttpHeaders({'Authorization':'Bearer '+localStorage.getItem('token')});
    return this.httpClient.get<AlbumModel[]>(this.baseURI + 'Albums/GetAllAlbums/', {headers: tokenHandler});
  }
}
