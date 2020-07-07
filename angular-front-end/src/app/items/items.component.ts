import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../services/albums.service";
import {AlbumModel} from "../models/album.model";
import {GenresEnum} from "../enums/genres.enum";
import {PageEvent} from "@angular/material/paginator";
import {AlbumsSelectionParameters} from "../models/albums-selection-parameters.model";

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

  genres = [
    {value: 0, description: 'Не выбрано'},
    {value: GenresEnum.Rock, description: 'Рок'},
    {value: GenresEnum.Electronic, description: 'Электроника'},
    {value: GenresEnum.Blues, description: 'Блюз'},
    {value: GenresEnum.HipHop, description: 'Хип-Хоп'},
    {value: GenresEnum.Funk, description: 'Фанк'}
  ];

  sortingTypes = [
    {value: 0, description: 'Не выбрано'},
    {value: 1, description: 'По названию'},
    {value: 2, description: 'По цене'}
  ]

  constructor(private albumsService: AlbumsService) {
  }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums() {
    let itemsCount = 6;
    let pageNumber = 1;
    let albumsSelectionParameters = new AlbumsSelectionParameters(0, 20000, itemsCount, pageNumber);
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
