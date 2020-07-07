using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using NLog;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using WebAPI.Common.Interfaces;
using WebAPI.DAL.Models;
using WebAPI.Models;
using WebAPI.Services.Interfaces;

namespace WebAPI.Services.Implementations
{
	public class UserService : IUserService
	{
		private UserManager<UserModel> _userManager;
		private SignInManager<UserModel> _signInManager;
		private ILogService _logService;

		public UserService(UserManager<UserModel> userManager,
						   SignInManager<UserModel> signInManager,
						   ILogService logService)
		{
			_userManager = userManager;
			_signInManager = signInManager;
			_logService = logService;
		}

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
				return result;
			}
			catch (Exception ex)
			{
				_logService.Log(LogLevel.Error, ex, "Произошла ошибка в UserService");
				return null;
			}
		}

		public async Task<string> Login(UserViewModel model)
		{
			try
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
						Expires = DateTime.Now.AddDays(7),
						SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes("1234567890123456")), SecurityAlgorithms.HmacSha256Signature)
					};
					var tokenHandler = new JwtSecurityTokenHandler();
					var securityToken = tokenHandler.CreateToken(tokenDescriptor);
					var token = tokenHandler.WriteToken(securityToken);
					return token;
				}
				else
				{
					return string.Empty;
				}
			}
			catch (Exception ex)
			{
				_logService.Log(LogLevel.Error, ex, "Произошла ошибка в UserService");
				return string.Empty;
			}
		}

		public async Task<bool> Logout()
		{
			try
			{
				await _signInManager.SignOutAsync();
				return true;
			}
			catch (Exception ex)
			{
				_logService.Log(LogLevel.Error, ex, "Произошла ошибка в UserService");
				return false;
			}
		}
	}
}