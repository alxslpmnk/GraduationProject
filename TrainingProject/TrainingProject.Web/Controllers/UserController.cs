using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;
using TrainingProject.Data.Models;


namespace TrainingProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        AppContext _context;
        public UserController(AppContext context)
        {
            _context = context;
        }

        [HttpGet]
        //[Authorize]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        [HttpGet("id")]
        //[Authorize]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var user = _context.Users.First(x => x.IdUser == id);
            if (user != null)
            {
                return user;
            }
            else return BadRequest();
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            var newUser = _context.Users.FirstOrDefault(x => x.Login == user.Login);
            if (newUser == null)
            {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest("This user is already exists");
        }
        [HttpPut]
        public async Task<ActionResult<User>> UpdateUser(User user)
        {
            var editUser = _context.Users.FirstOrDefault(x => x.IdUser == user.IdUser);
            if (editUser != null)
            {
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest("No such user");
        }
        
        [HttpDelete]
        public async Task<ActionResult<User>> DeleteUser(User user)
        {
            var deleteUser = _context.Users.FirstOrDefault(x => x.IdUser == user.IdUser);
            if (deleteUser != null)
            {
                _context.Users.Remove(user);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest("No such user");
        }
    }
}