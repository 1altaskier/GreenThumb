namespace GreenThumb.Data.DTOs.Models.Users
{
  public interface IUsersRepository
  {
    Users Get(int id);
    Users Add(Users item);
    void Remove(int id);
    bool Update(Users item);

    IEnumerable<Users> GetAll();
  }
}
