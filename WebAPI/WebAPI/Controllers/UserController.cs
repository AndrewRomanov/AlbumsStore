using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Controllers
{
	[Route("api/User")]
	[ApiController]
	public class UserController : ControllerBase
	{
		private UserManager<UserModel> _userManager;
		private SignInManager<UserModel> _signInManager;
		private ApplicationDbContext _userContext;

		public UserController(UserManager<UserModel> userManager,
							  SignInManager<UserModel> signInManager,
							  ApplicationDbContext userContext)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_userContext = userContext;
		}

		[HttpPost]
		[Route("Register")]
		public async Task<object> Register(UserViewModel model)
		{
			try
			{
				var user = new UserModel
				{
					FullName = model.FullName,
					UserName = model.UserName,
					Email = model.Email
				};
				var result = await _userManager.CreateAsync(user, model.Password);
				return Ok(result);
			}
			catch
			{
				return StatusCode(500);
			}
		}

		[HttpPost]
		[Route("Login")]
		public async Task<IActionResult> Login(UserViewModel model)
		{
			var userModel = new UserModel
			{
				FullName = model.FullName,
				UserName = model.UserName,
				Email = model.Email,
			};
			var user = await _userManager.FindByNameAsync(userModel.UserName);
			if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
			{
				var tokenDescriptor = new SecurityTokenDescriptor
				{
					Subject = new ClaimsIdentity(new Claim[]
					{
						new Claim("UserID", user.Id.ToString())
					}),
					Expires = DateTime.Now.AddMinutes(10),
					SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1234567890123456")), SecurityAlgorithms.HmacSha256Signature)
				};
				var tokenHandler = new JwtSecurityTokenHandler();
				var securityToken = tokenHandler.CreateToken(tokenDescriptor);
				var token = tokenHandler.WriteToken(securityToken);
				return Ok(new { token });
			}
			else
			{
				return BadRequest(new { message = "Неверный логин и/или пароль" });
			}
		}

		[HttpGet]
		[Route("Logout")]
		public async Task<object> Logout()
		{
			try
			{
				var user = _userContext.Users.Where(x => x.UserName == "Andrew666");
				bool val1 = Request.HttpContext.User.Identity.IsAuthenticated;
				await _signInManager.SignOutAsync();
				return Ok();
			}
			catch
			{
				return StatusCode(500);
			}
		}
	}
}