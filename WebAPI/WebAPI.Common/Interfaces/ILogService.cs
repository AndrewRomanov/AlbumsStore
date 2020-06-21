using NLog;
using System;

namespace WebAPI.Common.Interfaces
{
	public interface ILogService
	{
		void Log(LogLevel logLevel, Exception ex, string message);
	}
}