using NLog;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;
using WebAPI.Intefaces;
using WebAPI.Services.Interfaces;

namespace WebAPI.Services.Implementations
{
	public class GenresService : IGenresService
	{
		private IGenresDALService _genresDALService;
		private ILogService _logService;

		public GenresService(IGenresDALService genresDALService,
							 ILogService logService)
		{
			_genresDALService = genresDALService;
			_logService = logService;
		}

		public async Task<List<Genre>> GetGenres()
		{
			try
			{
				return await _genresDALService.GetGenres();
			}
			catch (Exception ex)
			{
				_logService.Log(LogLevel.Error, ex, "Произошла ошибка в GenresService");
				return new List<Genre>();
			}
		}
	}
}