import {Component, Input, OnInit} from '@angular/core';
import {AlbumsService} from "../services/albums.service";
import {AlbumModel} from "../models/album.model";
import {GenresEnum} from "../enums/genres.enum";
import {PageEvent} from "@angular/material/paginator";
import {AlbumsSelectionParameters} from "../models/albums-selection-parameters.model";
import {GenresService} from "../services/genres.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  private _searchStr: string = '';
  @Input('searchStr')
  get searchStr(): string {
    return this._searchStr;
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
  albums: AlbumModel[];

  currentPage: number;
  totalPagesCount: number;
  totalItemsCount: number;
  startItemsCount: number;
  endItemsCount: number;

  albumsSelectionParameters: AlbumsSelectionParameters;

  disablePrevPage: boolean = true;
  disableNextPage: boolean = false;

  itemsCountOption: FormGroup;

  sortingTypes = [
    {value: 0, description: 'Не выбрано'},
    {value: 1, description: 'По названию'},
    {value: 2, description: 'По цене'}
  ]

  itemsCountOptions = [3, 6, 9];
  selectedCountOption = 3;

  constructor(private albumsService: AlbumsService,
              private genresService: GenresService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initSortingTypesForm();
    this.initSelectionParameters();
    this.initPaging();
    this.initGenres();
  }

  initSortingTypesForm() {
    this.itemsCountOption = this.formBuilder.group({
      itemsCountOption: [null]
    });
    this.itemsCountOption.get('itemsCountOption').setValue(this.itemsCountOptions[0]);
    this.itemsCountOption.get("itemsCountOption").valueChanges.subscribe(x => {
      this.selectedCountOption = x;
      this.albumsSelectionParameters.itemsCount = x;
      this.getAlbums();
    })
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

  initGenres() {
    this.genresService.getGenres().subscribe(
      success => {
        this.genres.push({id: 0, name: 'Не выбрано'});
        this.genres = this.genres.concat(success);
        this.getAlbums();
      },
      error => {
      }
    )
  }

  getAlbums() {
    this.albumsService.getAllAlbums(this.albumsSelectionParameters).subscribe(
      (success: any) => {
        this.albums = success.albums;
        this.totalItemsCount = success.itemsCount;
        this.updatePaging();
      },
      error => {
      }
    );
  }

  updatePaging() {
    this.totalPagesCount = Math.ceil(this.totalItemsCount / this.selectedCountOption);
    this.startItemsCount = this.currentPage === 1 ? 1 : (this.currentPage - 1) * this.selectedCountOption + 1;
    if (this.currentPage === this.totalPagesCount) {
      this.endItemsCount = this.totalItemsCount;
    } else {
      this.endItemsCount = this.currentPage * this.albums.length;
    }
    // if (this.albums.length < this.selectedCountOption) {
    //   this.endItemsCount = (this.currentPage * this.selectedCountOption - this.albums.length) + 1;
    // } else {
    //   this.endItemsCount = this.currentPage * this.albums.length;
    // }
  }
}
