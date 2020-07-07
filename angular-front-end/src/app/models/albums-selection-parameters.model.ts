export class AlbumsSelectionParameters {
  constructor(minPrice: number, maxPrice: number, itemsCount: number, pageNumber: number) {
    this.minPrice = minPrice;
    this.maxPrice = maxPrice;
    this.itemsCount = itemsCount;
    this.pageNumber = pageNumber;
  }

  minPrice: number;
  maxPrice: number;
  itemsCount: number;
  pageNumber: number;
}
