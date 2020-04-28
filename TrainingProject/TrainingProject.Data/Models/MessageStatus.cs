using System;
using System.Collections.Generic;
using System.Text;

namespace TrainingProject.Data.Models
{
    public class MessageStatus
    {
        public int Id { get; set; }
        public int IdMessage { get; set; }
        public int IdUser { get; set; }
        public bool IsRead { get; set; }
    }
}
