namespace GreenThumb.Data.DTOs.Models.Blogs
{
  public class Blogs
  {
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Text { get; set; }
    public int UserId { get; set; }
    public int BlogRating { get; set; }
    public int BlogCategoryId { get; set; }
    public string? Image { get; set; }
    public DateTime? CreatedOn { get; set; }
    public DateTime? ModifiedOn { get; set; }
    public int CreatedBy { get; set; }
  }
}
