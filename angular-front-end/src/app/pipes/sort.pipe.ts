import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(albums, sortType) {
    if (albums) {
      switch (sortType.value) {
        case 1:
          return albums.sort((a, b) => {
            if (a.name > b.name) {
              return 1;
            } else {
              if (a.name < b.name) {
                return -1;
              }
            }
            return 0;
          });
          break;
        case 2:
          return albums.sort((a, b) => {
            if (a.genre.id > b.genre.id) {
              return 1;
            } else {
              if (a.genre.id < b.genre.id) {
                return -1;
              }
            }
            return 0;
          });
          break;
      }
    }
  }
}
