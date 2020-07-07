namespace WebAPI.Common.Models
{
	public class AlbumsSelectionParameters
	{
		public int ItemsCount { get; set; }

		public int PageNumber { get; set; }

		public float MinPrice { get; set; }

		public float MaxPrice { get; set; }

		//public string Name { get; set; }

		//public int GenreId { get; set; }

		//public SortingType SortingType { get; set; }
	}
}