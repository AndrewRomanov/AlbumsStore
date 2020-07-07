using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;

namespace WebAPI.DAL.Imlementations
{
	public class GenresDALService : IGenresDALService
	{
		private ApplicationDbContext _applicationDbContext;

		public GenresDALService(ApplicationDbContext applicationDbContext)
		{
			_applicationDbContext = applicationDbContext;
		}

		public async Task<List<Genre>> GetGenres()
		{
			return await _applicationDbContext.Genres.ToListAsync();
		}
	}
}