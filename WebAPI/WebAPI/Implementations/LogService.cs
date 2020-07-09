using NLog;
using NLog.Web;
using System;
using WebAPI.Intefaces;

namespace WebAPI.Implementations
{
	public class LogService : ILogService
	{
		private Logger _logger = NLogBuilder.ConfigureNLog(LogManager.Configuration).GetCurrentClassLogger();

		public void Log(LogLevel logLevel, Exception ex, string message)
		{
			_logger.Log(logLevel, ex, message);
		}
	}
}