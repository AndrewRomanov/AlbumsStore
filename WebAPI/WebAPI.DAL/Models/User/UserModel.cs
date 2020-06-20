using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;

namespace WebAPI.DAL.Models
{
	public class UserModel : IdentityUser
	{
		[Required]
		public string FullName { get; set; }
	}
}