using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Common.Models;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;

namespace WebAPI.DAL.Imlementations
{
	public class AlbumsDALService : IAlbumsDALService
	{
		private ApplicationDbContext _applicationDbContext;

		public AlbumsDALService(ApplicationDbContext applicationDbContext)
		{
			_applicationDbContext = applicationDbContext;
		}

		public async Task<AlbumsSelectionResult> GetAllAlbums(AlbumsSelectionParameters parameters)
		{
			var query = _applicationDbContext.Albums.Include(x => x.Genre)
												.Where(x => (string.IsNullOrEmpty(parameters.Name) || x.Name.ToUpper().Contains(parameters.Name.ToUpper()))
												&& (parameters.MinPrice == null || x.Price >= parameters.MinPrice)
												&& (parameters.MaxPrice == null || x.Price <= parameters.MaxPrice)
												&& ((parameters.GenreId == null || parameters.GenreId == 0) || x.Genre.Id == parameters.GenreId));
			var itemsCount = await query.CountAsync();
			var sortType = SortingType.NotSelected;
			if (parameters.SortingType != null)
			{
				sortType = (SortingType)parameters.SortingType;
			}
			switch (sortType)
			{
				case SortingType.ByName:
					query.OrderBy(x => x.Name);
					break;
				case SortingType.ByPrice:
					query.OrderBy(x => x.Price);
					break;
				default:
					query.OrderBy(x => x.Id);
					break;
			}
			var albums = await query.Skip(parameters.ItemsCount * (parameters.PageNumber - 1))
				 .Take(parameters.ItemsCount).ToListAsync();
			return new AlbumsSelectionResult(itemsCount, albums);
		}
	}
}