using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebAPI.Common.Models;
using WebAPI.DAL.Models;
using WebAPI.Services.Interfaces;

namespace WebAPI.Controllers
{
	[Route("api/Albums")]
	[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
	[ApiController]
	public class AlbumsController : ControllerBase
	{
		private IAlbumsService _albumsService;

		public AlbumsController(IAlbumsService albumsService)
		{
			_albumsService = albumsService;
		}

		//[HttpGet]
		//[Route("GetAllAlbums")]
		//public async Task<List<Album>> GetAllAlbums()
		//{
		//	return await _albumsService.GetAllAlbums();
		//}

		[HttpGet]
		[Route("GetAllAlbums")]
		public async Task<AlbumsSelectionResult> GetAllAlbums([FromQuery]AlbumsSelectionParameters parameters)
		{
			return await _albumsService.GetAllAlbums(parameters);
		}
	}
}