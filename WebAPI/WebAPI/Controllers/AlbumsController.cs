using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
	[Route("api/Albums")]
	[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    [ApiController]
    public class AlbumsController : ControllerBase
    {
		private ApplicationDbContext _applicationDbContext;

		public AlbumsController(ApplicationDbContext applicationDbContext)
		{
			_applicationDbContext = applicationDbContext;
		}

		[HttpGet]
		[Route("GetAllAlbums")]
		public async Task<List<Album>> GetAllAlbums()
		{
			return await _applicationDbContext.Albums.Include(p => p.Genre).ToListAsync();
		}
    }
}