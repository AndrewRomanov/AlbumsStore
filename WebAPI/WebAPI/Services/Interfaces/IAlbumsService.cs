using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Common.Models;
using WebAPI.DAL.Models;

namespace WebAPI.Services.Interfaces
{
	public interface IAlbumsService
	{
		Task<AlbumsSelectionResult> GetAllAlbums(AlbumsSelectionParameters parameters);
	}
}