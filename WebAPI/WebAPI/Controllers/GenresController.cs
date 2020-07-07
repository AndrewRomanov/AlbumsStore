using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.DAL.Models;
using WebAPI.Services.Interfaces;

namespace WebAPI.Controllers
{
	[Route("api/Genres")]
    [ApiController]
	[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
	public class GenresController : ControllerBase
    {
		private IGenresService _genresService;

		public GenresController(IGenresService genresService)
		{
			_genresService = genresService;
		}

		[HttpGet]
		[Route("GetGenres")]
		public async Task<List<Genre>> GetGenres()
		{
			return await _genresService.GetGenres();
		}
	}
}