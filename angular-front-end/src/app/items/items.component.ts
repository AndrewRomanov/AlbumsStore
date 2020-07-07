import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../services/albums.service";
import {AlbumModel} from "../models/album.model";
import {GenresEnum} from "../enums/genres.enum";
import {PageEvent} from "@angular/material/paginator";
import {AlbumsSelectionParameters} from "../models/albums-selection-parameters.model";
import {GenresService} from "../services/genres.service";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  albums: AlbumModel[];

  searchStr: string = '';
  priceStart: number = 0;
  priceEnd: number = 0;
  selectedGenre: any;
  selectedSortingType: any;

  genres = [];

  currentPage: number;
  albumsSelectionParameters: AlbumsSelectionParameters;
  disablePrevPage: boolean = true;
  disableNextPage: boolean = false;

  sortingTypes = [
    {value: 0, description: 'Не выбрано'},
    {value: 1, description: 'По названию'},
    {value: 2, description: 'По цене'}
  ]

  constructor(private albumsService: AlbumsService,
              private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.initPaging();
    this.initGenres();
  }

  initPaging() {
    this.currentPage = 1;
  }

  onPrevPage() {
    this.currentPage--;
    this.disablePrevPage = this.currentPage !== 1;
    this.getAlbums();
  }

  onNextPage() {
    this.currentPage++;
    this.disablePrevPage = this.currentPage === 20; // Поменять потом
    this.getAlbums();
  }

  initGenres() {
    debugger;
    this.genresService.getGenres().subscribe(
      success => {
        debugger;
        this.genres.push({id: 0, name: 'Не выбрано'});
        this.genres.push(success);
        this.getAlbums();
      },
      error => {
        debugger;
        console.log(error);
      }
    )
  }

  getAlbums() {
    let itemsCount = 6;
    let albumsSelectionParameters = new AlbumsSelectionParameters(0, 20000, itemsCount, this.currentPage);
    this.albumsService.getAllAlbums(albumsSelectionParameters).subscribe(
      success => {
        this.albums = success;
        this.updatePriceBorders();
      },
      error => {
        debugger;
        console.log(error);
      }
    );
  }

  updatePriceBorders() {
    let albumsPrices = this.albums.map(x => x.price);
    this.priceStart = Math.min(...albumsPrices);
    this.priceEnd = Math.max(...albumsPrices);
  }
}
