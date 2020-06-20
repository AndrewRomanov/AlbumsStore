using System.ComponentModel.DataAnnotations;

namespace WebAPI.DAL.Models
{
	public class Album
	{
		[Key]
		[Required]
		public int Id { get; set; }

		[Required]
		public string Name { get; set; }

		[Required]
		public string GroupName { get; set; }

		[Required]
		public float Price { get; set; }

		[Required]
		public Genre Genre { get; set; }
	}
}