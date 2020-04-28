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
    public class ChatController : ControllerBase
    {
        AppContext _context;
        public ChatController(AppContext context)
        {
            _context = context;
        }

        [HttpGet]
        //[Authorize]
        public async Task<ActionResult<IEnumerable<Chat>>> GetChats(int id)
        {
            var IdsChats = _context.ChatMembers.Where(x => x.IdUser == id);
            var chats = _context.Chats.Where(x => x.IdChat.Equals(IdsChats));
            return await chats.ToListAsync();
        }

        [HttpGet("id")]
        public async Task<ActionResult<IEnumerable<Message>>> GetChatMessages(int id)
        {
            return await _context.Messages.Where(x => x.IdChat == id).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Message>> SendMessage(Message message)
        {
            if (message != null)
            {
                _context.Messages.Add(message);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest();
        }

        [HttpDelete]
        public async Task<ActionResult<Message>> DeleteMessage(int id)
        {
            var message = _context.Messages.FirstOrDefault(x => x.IdMessage == id);
            if (message != null)
            {
                _context.Messages.Remove(message);
                await _context.SaveChangesAsync();
                return Ok();
            }
            else return BadRequest();
        }
    }
}