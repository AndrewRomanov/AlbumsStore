using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Common.Models;
using WebAPI.DAL.Models;

namespace WebAPI.Services.Interfaces
{
	public interface IAlbumsService
	{
		//Task<List<Album>> GetAllAlbums();

		Task<List<Album>> GetAllAlbums(AlbumsSelectionParameters parameters);
	}
}