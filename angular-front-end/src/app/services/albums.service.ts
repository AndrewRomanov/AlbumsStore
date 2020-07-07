import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AlbumModel} from "../models/album.model";
import {Observable} from "rxjs";
import * as globals from "../../globals";
import {AlbumsSelectionParameters} from "../models/albums-selection-parameters.model";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbums(albumsSelectionParameters : any): Observable<AlbumModel[]> {
    let headers = new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('token'), 'Content-Type': 'application/json', 'Accept': 'application/json'});
    return this.httpClient.get<AlbumModel[]>(globals.BaseURI + 'Albums/GetAllAlbums/', {headers: headers, params: albumsSelectionParameters});
  }
}
