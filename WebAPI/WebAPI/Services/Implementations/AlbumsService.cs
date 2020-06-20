using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.DAL;
using WebAPI.DAL.Models;
using WebAPI.Services.Interfaces;

namespace WebAPI.Services.Implementations
{
	public class AlbumsService : IAlbumsService
	{
		private ApplicationDbContext _applicationDbContext;

		public AlbumsService(ApplicationDbContext applicationDbContext)
		{
			_applicationDbContext = applicationDbContext;
		}

		public async Task<List<Album>> GetAllAlbums()
		{
			return await _applicationDbContext.Albums.Include(p => p.Genre).ToListAsync();
		}
	}
}