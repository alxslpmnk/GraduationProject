using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainingProject.Data.Models;

namespace TrainingProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    //[Authorize]
    public class RequestController : ControllerBase
    {
        AppContext _context;
        public RequestController(AppContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Request>>> GetRequests()
        {
            return await _context.Requests.ToListAsync();
        }

        [HttpGet("id")]
        public async Task<ActionResult<Request>> GetRequest(int id)
        {
            var p = _context.Requests.FirstOrDefault(x => x.IdRequest == id);
            if (p != null)
            {
                return p;
            }
            else return BadRequest();
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateRequest(Request request)
        {
            var newRequest = _context.Requests.FirstOrDefault(x => x.IdRequest == request.IdRequest);
            if (newRequest == null)
            {
                _context.Requests.Add(newRequest);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest("This request is already exists");
        }
        [HttpPut]
        public async Task<ActionResult<User>> UpdateRequest(Request request)
        {
            var editRequest = _context.Requests.FirstOrDefault(x => x.IdRequest == request.IdRequest);

            if (editRequest != null)
            {
                _context.Requests.Update(request);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest("No such request");
        }

        [HttpDelete]
        public async Task<ActionResult<User>> DeleteRequest(Request request)
        {
            var deleteRequest = _context.Requests.FirstOrDefault(x => x.IdRequest == request.IdRequest);
            if (deleteRequest != null)
            {
                _context.Requests.Remove(request);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest("No such request");
        }
    }
}
