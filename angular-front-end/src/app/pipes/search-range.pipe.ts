import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchRange'
})
export class SearchRangePipe implements PipeTransform {
  transform(albums, startValue, endValue) {
    if (albums) {
      return albums.filter(album => {
        return album.price >= startValue && album.price <= endValue;
      });
    }
  }

}
