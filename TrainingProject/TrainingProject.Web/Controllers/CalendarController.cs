using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TrainingProject.Data.Models;

namespace TrainingProject.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalendarController : ControllerBase
    {
        AppContext _context;
        public CalendarController(AppContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetEvents()
        {
            return await _context.Events.ToListAsync();
            //rewrite: get events for current user
        }

        //[HttpGet]
        //public async Task<ActionResult<Event>> GetEvent(int id)
        //{
        //    var currEvent = _context.Events.First(x => x.IdEvent == id);
        //    if (currEvent != null)
        //    {
        //        return currEvent;
        //    }
        //    else return BadRequest("No such event");
        //}


    }
}