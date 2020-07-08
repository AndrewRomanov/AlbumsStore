using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Common.Models;
using WebAPI.DAL.Models;

namespace WebAPI.DAL.Interfaces
{
	public interface IAlbumsDALService
	{
		//Task<List<Album>> GetAllAlbums();

		Task<AlbumsSelectionResult> GetAllAlbums(AlbumsSelectionParameters parameters);
	}
}