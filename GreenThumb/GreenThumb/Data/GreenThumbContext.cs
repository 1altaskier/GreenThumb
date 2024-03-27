using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using GreenThumb.Data.DTOs.Models.Users;
using GreenThumb.Data.DTOs.Models.Blogs;

namespace GreenThumb.Data
{
  public class GreenThumbContext : DbContext
    {
        public GreenThumbContext (DbContextOptions<GreenThumbContext> options)
            : base(options)
        {
        }

        public DbSet<Users> Users { get; set; } = default!;
        public DbSet<Blogs> Blogs { get; set; } = default!;
    }
}
