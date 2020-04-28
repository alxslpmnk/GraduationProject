using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TrainingProject.Data.Models;

namespace TrainingProject.Data
{
    public interface IAppContext
    {
        DbSet<User> Users { get; set; }
        DbSet<UserType> UserTypes { get; set; }
        DbSet<Chat> Chats { get; set; }
        DbSet<ChatMember> ChatMembers { get; set; }
        DbSet<Message> Messages { get; set; }
        DbSet<MessageStatus> MessageStatuses { get; set; }
        DbSet<Request> Requests { get; set; }
        DbSet<RequestStatus> RequestStatuses { get; set; }
        DbSet<Event> Events { get; set; }
        Task<int> SaveChangesAsync(CancellationToken cancellationToken);


    }
}
