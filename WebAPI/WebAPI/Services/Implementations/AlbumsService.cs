using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;
using WebAPI.Services.Interfaces;

namespace WebAPI.Services.Implementations
{
	public class AlbumsService : IAlbumsService
	{
		private IAlbumsDALService _albumsDALService;

		public AlbumsService(IAlbumsDALService albumsDALService)
		{
			_albumsDALService = albumsDALService;
		}

		public async Task<List<Album>> GetAllAlbums()
		{
			return await _albumsDALService.GetAllAlbums();
		}
	}
}