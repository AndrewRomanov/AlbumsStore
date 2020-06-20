using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.DAL.Models;

namespace WebAPI.Services.Interfaces
{
	public interface IAlbumsService
	{
		Task<List<Album>> GetAllAlbums();
	}
}