import {AlbumModel} from "./album.model";

export class AlbumsSelectionResultModel {
  constructor(itemsCount: number, albums: AlbumModel[]) {
    this.itemsCount = itemsCount;
    this.albums = albums;
  }

  itemsCount: number;
  albums: AlbumModel[];
}
