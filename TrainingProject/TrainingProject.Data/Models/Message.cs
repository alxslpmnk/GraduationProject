using System;
using System.Collections.Generic;
using System.Text;

namespace TrainingProject.Data.Models
{
    public class Message
    {
        public int IdMessage { get; set; }
        public int IdChat { get; set; }
        public int IdUser { get; set; }
        public string Content { get; set; }
        public DateTime CreatedDate { get; set; }
    }
}
