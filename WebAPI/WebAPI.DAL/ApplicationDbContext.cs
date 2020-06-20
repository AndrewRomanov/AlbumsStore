using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebAPI.DAL.Models;

namespace WebAPI.DAL
{
	public class ApplicationDbContext: IdentityDbContext
	{
		public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
		{
		}

		public DbSet<UserModel> Users { get; set; }

		public DbSet<Album> Albums { get; set; }

		public DbSet<Genre> Genres { get; set; }
	}
}