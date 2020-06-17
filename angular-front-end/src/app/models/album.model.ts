import {GenreModel} from "./genre.model";

export class AlbumModel {
  id: number;
  name: string;
  price: number;
  groupName: string;
  genre: GenreModel;
}
