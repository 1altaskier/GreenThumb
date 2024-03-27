namespace GreenThumb.Data.DTOs.Models.Blogs
{
  public interface IBlogsRepository
  {
    Blogs Get(int id);
    Blogs Add(Blogs item);
    void Remove(int id);
    bool Update(Blogs item);

    IEnumerable<Blogs> GetAll();
  }
}
