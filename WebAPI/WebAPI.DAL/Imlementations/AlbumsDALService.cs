using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
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

		public async Task<List<Album>> GetAllAlbums()
		{
			return await _applicationDbContext.Albums.Include(p => p.Genre).ToListAsync();
		}
	}
}