using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GreenThumb.Data;
using GreenThumb.Data.DTOs.Models.Blogs;

namespace GreenThumb.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class BlogsController : ControllerBase
  {
    private readonly GreenThumbContext _context;

    public BlogsController(GreenThumbContext context)
    {
      _context = context;
    }

    // GET: api/Blogs
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Blogs>>> GetBlogs()
    {
      if (_context.Users == null)
      {
        return NotFound();
      }
      return await _context.Blogs.ToListAsync();
    }

    // GET: api/Users/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Blogs>> GetBlog(int id)
    {
      if (_context.Blogs == null)
      {
        return NotFound();
      }
      var blogs = await _context.Blogs.FindAsync(id);

      if (blogs == null)
      {
        return NotFound();
      }

      return blogs;
    }

    // PUT: api/Users/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBlog(int id, Blogs blogs)
    {
      if (id != blogs.Id)
      {
        return BadRequest();
      }

      _context.Entry(blogs).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!UsersExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Users
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Blogs>> PostBlog([FromBody]Blogs blog)
    {
      try
      {
        if (_context.Blogs == null)
        {
          return Problem("Entity set 'GreenThumbContext.Blogs'  is null.");
        }

        blog.CreatedOn = DateTime.Now;
        blog.ModifiedOn = DateTime.Now;

        _context.Blogs.Add(blog);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetUsers", new { id = blog.Id }, blog);
      }
      catch (Exception ex)
      {
        return BadRequest(ex.Message);
      }

    }

    // DELETE: api/Users/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBlog(int id)
    {
      if (_context.Blogs == null)
      {
        return NotFound();
      }
      var blogs = await _context.Blogs.FindAsync(id);
      if (blogs == null)
      {
        return NotFound();
      }

      _context.Blogs.Remove(blogs);
      await _context.SaveChangesAsync();

      return NoContent();
    }

    private bool UsersExists(int id)
    {
      return (_context.Users?.Any(e => e.Id == id)).GetValueOrDefault();
    }
  }
}
