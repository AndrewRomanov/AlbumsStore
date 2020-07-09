using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebAPI.Models;
using WebAPI.Services.Interfaces;

namespace WebAPI.Controllers
{
	[Route("api/User")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private IUserService _userService;

		public UserController(IUserService userService)
		{
			_userService = userService;
		}

		[HttpPost]
		[Route("Register")]
		public async Task<IActionResult> Register(UserViewModel model)
		{
			var result = await _userService.Register(model);
			if (result != null)
			{
				return Ok(result);
			}
			else
			{
				return StatusCode(500);
			}
		}

		[HttpPost]
		[Route("Login")]
		public async Task<IActionResult> Login(UserViewModel model)
		{
			var token = await _userService.Login(model);
			if (!string.IsNullOrEmpty(token))
			{
				return Ok(new { token });
			}
			else
			{
				return BadRequest(new { message = "Неверный логин и/или пароль" });
			}
		}

		[HttpGet]
		[Route("Logout")]
		public async Task<IActionResult> Logout()
		{
			var result = await _userService.Logout();
			if (result == true)
			{
				return Ok();
			}
			else
			{
				return StatusCode(500);
			}
		}
	}
}