using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Text;
using WebAPI.Common.Implementations;
using WebAPI.Common.Interfaces;
using WebAPI.DAL;
using WebAPI.DAL.Imlementations;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;
using WebAPI.Services.Implementations;
using WebAPI.Services.Interfaces;

namespace WebAPI
{
	public class Startup
	{
		public Startup(IConfiguration configuration)
		{
			Configuration = configuration;
		}

		public IConfiguration Configuration { get; }

		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices(IServiceCollection services)
		{
			services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

			services.AddDbContext<ApplicationDbContext>(options => options.UseNpgsql(Configuration.GetConnectionString("DefaultConnection")));

			services.AddIdentity<UserModel, IdentityRole>(o =>
			{
				o.Password.RequireUppercase = false;
				o.Password.RequireNonAlphanumeric = false;
				o.Password.RequireLowercase = false;
				o.Password.RequiredUniqueChars = 0;
				o.Password.RequireDigit = false;
			})
			.AddEntityFrameworkStores<ApplicationDbContext>().AddDefaultTokenProviders();

			services.AddCors();

			var key = Encoding.UTF8.GetBytes(Configuration["ApplicationSettings:JWTKey"].ToString());

			// JWT Authentication
			services.AddAuthentication(x =>
			{
				x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
				x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
				x.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
			}).AddJwtBearer(x =>
			{
				x.RequireHttpsMetadata = false;
				x.SaveToken = false;
				x.TokenValidationParameters = new TokenValidationParameters
				{
					ValidateIssuerSigningKey = true,
					IssuerSigningKey = new SymmetricSecurityKey(key),
					ValidateIssuer = false,
					ValidateAudience = false,
					ClockSkew = TimeSpan.Zero
				};
			});

			services.AddTransient<IUserService, UserService>();
			services.AddTransient<IAlbumsService, AlbumsService>();
			services.AddTransient<IGenresService, GenresService>();
			services.AddTransient<ILogService, LogService>();
			services.AddTransient<IAlbumsDALService, AlbumsDALService>();
			services.AddTransient<IGenresDALService, GenresDALService>();
		}

		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure(IApplicationBuilder app, IHostingEnvironment env)
		{
			if (env.IsDevelopment())
			{
				app.UseDeveloperExceptionPage();
			}

			app.UseDefaultFiles();
			app.UseStaticFiles();

			app.UseCors(builder => builder.WithOrigins(Configuration["ApplicationSettings:ClientURL"].ToString()).AllowAnyHeader().AllowAnyMethod());

			app.UseMvc();
			app.UseAuthentication();
		}
	}
}