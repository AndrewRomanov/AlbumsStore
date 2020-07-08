using System.Collections.Generic;

namespace WebAPI.DAL.Models
{
	public class AlbumsSelectionResult
	{
		public AlbumsSelectionResult(int itemsCount, List<Album> albums)
		{
			ItemsCount = itemsCount;
			Albums = albums;
		}

		public int ItemsCount { get; set; }

		public List<Album> Albums { get; set; }
	}
}