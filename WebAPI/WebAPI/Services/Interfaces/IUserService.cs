using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Services.Interfaces
{
	public interface IUserService
	{
		Task<IdentityResult> Register(UserViewModel model);

		Task<string> Login(UserViewModel model);

		Task<bool> Logout();
	}
}