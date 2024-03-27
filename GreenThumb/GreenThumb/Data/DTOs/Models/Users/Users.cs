using System.ComponentModel.DataAnnotations;

namespace GreenThumb.Data.DTOs.Models.Users
{
  public class Users
  {
    [Key]
    public int Id { get; set; }
    [Required]
    [MaxLength(50)]
    public string FirstName { get; set; }
    [Required]
    [MaxLength(50)]
    public string LastName { get; set; }
    [MaxLength(250)]
    public string? NickName { get; set; }
    [Required]
    public DateTime LastLogin { get; set; }
    public DateTime? LastPostDate { get; set; }
    public int? NumberOfPosts { get; set; }
    public int? UserRating { get; set; }
    public bool UserStatus { get; set; }
    public string? LastIPAddress { get; set; }
    [Required]
    public DateTime CreatedOn { get; set; }
    [Required]
    public DateTime ModifiedOn { get; set; }
    [Required]
    public bool Active { get; set; }
  }
}
