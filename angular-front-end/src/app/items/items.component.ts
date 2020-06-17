import {Component, OnInit} from '@angular/core';
import {AlbumsService} from "../services/albums.service";
import {AlbumModel} from "../models/album.model";
import {GenresEnum} from "../enums/genres.enum";
import {PageEvent} from "@angular/material/paginator";

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

  pagedAlbums: AlbumModel[]= [];
  breakpoint: number = 3;
  length: number = 0;
  pageSize: number = 3;
  pageSizeOptions: number[] = [3, 6, 9, 12];

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
    this.albumsService.getAllAlbums().subscribe(
      success => {
        this.albums = success;
        this.updatePriceBorders();
        this.breakpoint = (window.innerWidth <= 800) ? 1 : 3;
        this.pagedAlbums = this.albums.slice(0, 3);
        this.length = this.albums.length;
      },
      error => {
      }
    );
  }

  updatePriceBorders() {
    let albumsPrices = this.albums.map(x => x.price);
    this.priceStart = Math.min(...albumsPrices);
    this.priceEnd = Math.max(...albumsPrices);
  }

  OnPageChange(event: PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.length){
      endIndex = this.length;
    }
    this.pagedAlbums = this.albums.slice(startIndex, endIndex);
    let rows = (endIndex - startIndex) / 3;
    let containerHeight = (Math.ceil(rows) * 500 + 100) + 'px';
    (document.querySelector('.items-container') as HTMLElement).style.height = containerHeight;
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 3;
  }
}
