using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using WebAPI.Models;

namespace WebAPI.Services.Interfaces
{
	public interface IUserService
	{
		Task<object> Register(UserViewModel model);

		Task<string> Login(UserViewModel model);

		Task<bool> Logout();
	}
}