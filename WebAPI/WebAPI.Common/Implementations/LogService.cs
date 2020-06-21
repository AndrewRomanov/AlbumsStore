using NLog;
using System;
using WebAPI.Common.Interfaces;

namespace WebAPI.Common.Implementations
{
	public class LogService: ILogService
	{
		private Logger _logger = LogManager.GetCurrentClassLogger();

		public void Log(LogLevel logLevel, Exception ex, string message)
		{
			_logger.Log(logLevel, ex, message);
		}
	}
}