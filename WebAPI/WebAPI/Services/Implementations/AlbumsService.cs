using NLog;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Common.Models;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;
using WebAPI.Intefaces;
using WebAPI.Services.Interfaces;

namespace WebAPI.Services.Implementations
{
	public class AlbumsService : IAlbumsService
	{
		private IAlbumsDALService _albumsDALService;
		private ILogService _logService;

		public AlbumsService(IAlbumsDALService albumsDALService,
							 ILogService logService)
		{
			_albumsDALService = albumsDALService;
			_logService = logService;
		}

		public async Task<AlbumsSelectionResult> GetAllAlbums(AlbumsSelectionParameters parameters)
		{
			try
			{
				return await _albumsDALService.GetAllAlbums(parameters);
			}
			catch (Exception ex)
			{
				_logService.Log(LogLevel.Error, ex, "Произошла ошибка в AlbumsService");
				return new AlbumsSelectionResult(0, new List<Album>());
			}
		}
	}
}