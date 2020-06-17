import { Pipe, PipeTransform } from '@angular/core';
import {filter} from "rxjs/operators";

@Pipe({
  name: 'genreFilter'
})
export class GenreFilterPipe implements PipeTransform {

  transform(albums, filterValue: any): unknown {
    if (filterValue != undefined && filterValue !== 0) {
      if (albums) {
        return albums.filter(album => {
          return album.genre.id == filterValue;
        });
      }
    }
    if (albums) {
      return albums;
    }
  }
}
