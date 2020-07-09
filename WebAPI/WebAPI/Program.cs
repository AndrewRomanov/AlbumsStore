using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using NLog;
using NLog.Extensions.Logging;

namespace WebAPI
{
	public class Program
	{
		public static void Main(string[] args)
		{
			InitializeNLog();
			CreateWebHostBuilder(args).Build().Run();
		}

		public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
			WebHost.CreateDefaultBuilder(args)
				.UseStartup<Startup>()
				.UseKestrel();

		private static void InitializeNLog()
		{
			var config = new ConfigurationBuilder()
							.SetBasePath(System.IO.Directory.GetCurrentDirectory())
							.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true).Build();
			LogManager.Configuration = new NLogLoggingConfiguration(config.GetSection("NLog"));
		}
	}
}
