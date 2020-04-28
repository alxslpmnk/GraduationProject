using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingProject.Data;
using TrainingProject.Data.Models;

namespace TrainingProject.Web
{
    public class AppContext : DbContext, IAppContext
    {
        public AppContext(DbContextOptions<AppContext> options)
            : base(options) { } 
        public DbSet<User> Users { get; set; }
        public DbSet<UserType> UserTypes { get; set; }
        public DbSet<Chat> Chats { get; set; }
        public DbSet<ChatMember> ChatMembers { get; set; }
        public DbSet<Message> Messages { get; set; }
        public DbSet<MessageStatus> MessageStatuses { get; set; }
        public DbSet<Request> Requests { get; set; }
        public DbSet<RequestStatus> RequestStatuses { get; set; }
        public DbSet<Event> Events { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasKey(x => x.IdUser);
            modelBuilder.Entity<User>().Property(x => x.IdUser).ValueGeneratedOnAdd();
           // modelBuilder.Entity<User>().HasOne<UserType>().WithMany();

            modelBuilder.Entity<Chat>()
                .HasKey(x => x.IdChat);
            modelBuilder.Entity<Chat>().Property(x => x.IdChat).ValueGeneratedOnAdd();

            modelBuilder.Entity<Message>()
                .HasKey(x => x.IdMessage);
            modelBuilder.Entity<Message>().Property(x => x.IdMessage).ValueGeneratedOnAdd();

            modelBuilder.Entity<Request>()
                .HasKey(x => x.IdRequest);
            modelBuilder.Entity<Request>().Property(x => x.IdRequest).ValueGeneratedOnAdd();

            modelBuilder.Entity<RequestStatus>()
                .HasKey(x => x.IdStatus);
            modelBuilder.Entity<RequestStatus>().Property(x => x.IdStatus).ValueGeneratedOnAdd();

            modelBuilder.Entity<UserType>()
                .HasKey(x => x.IdUserType);
            modelBuilder.Entity<UserType>().Property(x => x.IdUserType).ValueGeneratedOnAdd();

            modelBuilder.Entity<MessageStatus>()
                .HasKey(x => x.Id);
            modelBuilder.Entity<MessageStatus>().Property(x => x.Id).ValueGeneratedOnAdd();

            modelBuilder.Entity<ChatMember>()
                .HasKey(x => x.Id);
            modelBuilder.Entity<ChatMember>().Property(x => x.Id).ValueGeneratedOnAdd();

            modelBuilder.Entity<Event>()
                .HasKey(x => x.IdEvent);
            modelBuilder.Entity<Event>().Property(x => x.IdEvent).ValueGeneratedOnAdd();
        }
    }
  
}
    
