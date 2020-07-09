using NLog;
using System;

namespace WebAPI.Intefaces
{
	public interface ILogService
	{
		void Log(LogLevel logLevel, Exception ex, string message);
	}
}