using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Common.Models;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;

namespace WebAPI.DAL.Imlementations
{
	public class AlbumsDALService: IAlbumsDALService
	{
		private ApplicationDbContext _applicationDbContext;

		public AlbumsDALService(ApplicationDbContext applicationDbContext)
		{
			_applicationDbContext = applicationDbContext;
		}

		//public async Task<List<Album>> GetAllAlbums()
		//{
		//	return await _applicationDbContext.Albums.Include(p => p.Genre).ToListAsync();
		//}

		public async Task<AlbumsSelectionResult> GetAllAlbums(AlbumsSelectionParameters parameters)
		{
			//IQueryable<Album> query = _applicationDbContext.Albums.Include(x => x.Genre);
			//if (parameters.MinPrice != null)
			//{
			//	query.Where(x => x.Price >= parameters.MinPrice);
			//}
			//if (parameters.MaxPrice != null)
			//{
			//	query.Where(x => x.Price <= parameters.MaxPrice);
			//}
			//if (!string.IsNullOrEmpty(parameters.Name))
			//{
			//	query.Where(x => x.Name.Contains(parameters.Name) || x.GroupName.Contains(parameters.Name));
			//}
			//if (parameters.GenreId != null && parameters.GenreId != 0)
			//{
			//	query.Where(x => x.Genre.Id == parameters.GenreId);
			//}
			//var result = await query.ToListAsync();
			//var albums = result.Skip(parameters.ItemsCount * (parameters.PageNumber - 1))
			//				  .Take(parameters.ItemsCount).ToList();
			var selectionResult = await _applicationDbContext.Albums.Include(x => x.Genre)
										.Where(x => (string.IsNullOrEmpty(parameters.Name) || x.Name.ToUpper().Contains(parameters.Name.ToUpper()))
												&& (parameters.MinPrice == null || x.Price >= parameters.MinPrice)
												&& (parameters.MaxPrice == null || x.Price <= parameters.MaxPrice)
												&& ((parameters.GenreId == null || parameters.GenreId == 0) || x.Genre.Id == parameters.GenreId))
												.ToListAsync();
			IOrderedEnumerable<Album> result;
			var sortType = SortingType.NotSelected;
			if (parameters.SortingType != null)
			{
				sortType = (SortingType)parameters.SortingType;
			}
			switch (sortType)
			{
				case SortingType.ByName:
					result = selectionResult.OrderBy(x => x.Name);
					break;
				case SortingType.ByPrice:
					result = selectionResult.OrderBy(x => x.Price);
					break;
				default:
					result = selectionResult.OrderBy(x => x.Id);
					break;
			}

			var albums = result
				.Skip(parameters.ItemsCount * (parameters.PageNumber - 1))
				.Take(parameters.ItemsCount).ToList();
			return new AlbumsSelectionResult(selectionResult.Count, albums);
		}
	}
}