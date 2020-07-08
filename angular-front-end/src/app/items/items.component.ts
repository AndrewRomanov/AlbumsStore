import {Component, Input, OnInit} from '@angular/core';
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

  private _searchStr: string = '';
  @Input('searchStr')
  get searchStr(): string {
    return  this._searchStr;
  }
  set searchStr(val) {
    this._searchStr = val;
    this.albumsSelectionParameters.name = val;
    this.getAlbums();
  }

  private _priceStart: any = 0;
  @Input(`priceStart`)
  get priceStart(): any {
    return this._priceStart;
  }
  set priceStart(val) {
    this._priceStart = val;
    this.albumsSelectionParameters.minPrice = val;
    this.getAlbums();
  }

  private _priceEnd: any = 0;
  @Input(`priceEnd`)
  get priceEnd(): any {
    return this._priceEnd;
  }
  set priceEnd(val) {
    this._priceEnd = val;
    this.albumsSelectionParameters.maxPrice = val;
    this.getAlbums();
  }

  private _selectedGenre: any;
  @Input(`selectedGenre`)
  get selectedGenre(): any {
    return this._selectedGenre;
  }
  set selectedGenre(val) {
    debugger;
    this._selectedGenre = val;
    this.albumsSelectionParameters.genreId = val;
    this.getAlbums();
  }

  private _selectedSortingType: any;
  @Input(`selectedSortingType`)
  get selectedSortingType(): any {
    return this._selectedSortingType;
  }
  set selectedSortingType(val) {
    this._selectedSortingType = val;
    this.albumsSelectionParameters.sortingType = val;
    this.getAlbums();
  }

  genres = [];

  currentPage: number;
  totalPagesCount: number;
  totalItemsCount: number;
  albumsSelectionParameters: AlbumsSelectionParameters;
  disablePrevPage: boolean = true;
  disableNextPage: boolean = false;

  startItemsCount: number;
  endItemsCount: number;

  sortingTypes = [
    {value: 0, description: 'Не выбрано'},
    {value: 1, description: 'По названию'},
    {value: 2, description: 'По цене'}
  ]

  itemsCountOptions = [3, 6, 9];
  selectedCountOption = 3;

  constructor(private albumsService: AlbumsService,
              private genresService: GenresService) {
  }

  ngOnInit(): void {
    this.initSelectionParameters();
    this.initPaging();
    this.initGenres();
  }

  initSelectionParameters() {
    this.albumsSelectionParameters = new AlbumsSelectionParameters();
    this.albumsSelectionParameters.pageNumber = 1;
    this.albumsSelectionParameters.itemsCount = this.selectedCountOption;
  }

  initPaging() {
    this.currentPage = 1;
    this.selectedCountOption = this.itemsCountOptions[0];
  }

  onPrevPage() {
    this.currentPage--;
    if (this.currentPage <= 1) {
      this.currentPage = 1;
    }
    this.disablePrevPage = this.currentPage !== 1;
    this.albumsSelectionParameters.pageNumber = this.currentPage;
    this.getAlbums();
  }

  onNextPage() {
    this.currentPage++;
    if (this.currentPage >= this.totalPagesCount) {
      this.currentPage = this.totalPagesCount;
    }
    this.disableNextPage = this.currentPage === this.totalPagesCount;
    this.albumsSelectionParameters.pageNumber = this.currentPage;
    this.getAlbums();
  }

  onChangeItemsCount(event) {
    debugger;
    this.selectedCountOption = event.value;
    this.getAlbums();
  }

  initGenres() {
    debugger;
    this.genresService.getGenres().subscribe(
      success => {
        debugger;
        this.genres.push({id: 0, name: 'Не выбрано'});
        this.genres = this.genres.concat(success);
        this.getAlbums();
      },
      error => {
        debugger;
        console.log(error);
      }
    )
  }

  getAlbums() {
    this.albumsService.getAllAlbums(this.albumsSelectionParameters).subscribe(
      (success: any) => {
        debugger;
        this.albums = success.albums;
        this.totalItemsCount = success.itemsCount;
        this.updatePaging();
      },
      error => {
        debugger;
        console.log(error);
      }
    );
  }

  updatePaging() {
    debugger;
    this.totalPagesCount = Math.ceil(this.totalItemsCount / this.selectedCountOption);
    this.startItemsCount = this.currentPage === 1 ? 1 : (this.currentPage - 1) * this.albums.length;
    this.endItemsCount = this.currentPage * this.albums.length;
  }
}
