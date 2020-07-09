import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {AlbumModel} from "../models/album.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private httpClient: HttpClient) {
  }

  getAllAlbums(albumsSelectionParameters : any): Observable<AlbumModel[]> {
    return this.httpClient.get<AlbumModel[]>(environment.baseUri + 'Albums/GetAllAlbums/', {params: albumsSelectionParameters});
  }
}
