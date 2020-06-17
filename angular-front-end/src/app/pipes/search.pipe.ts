import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  transform(albums, value) {
    if (albums) {
      return albums.filter(album => {
        return album.name.toLowerCase().includes(value.toLowerCase()) || album.groupName.toLowerCase().includes(value.toLowerCase());
      });
    }
  }
}
