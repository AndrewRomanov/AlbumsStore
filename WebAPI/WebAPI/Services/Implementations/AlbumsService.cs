using NLog;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebAPI.Common.Interfaces;
using WebAPI.DAL.Interfaces;
using WebAPI.DAL.Models;
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

		public async Task<List<Album>> GetAllAlbums()
		{
			try
			{
				return await _albumsDALService.GetAllAlbums();
			}
			catch (Exception ex)
			{
				_logService.Log(LogLevel.Error, ex, "Произошла ошибка в AlbumsService");
				return new List<Album>();
			}
		}
	}
}