using System;
using System.Collections.Generic;
using System.Text;

namespace TrainingProject.Data.Models
{
    public class Event
    {
        public int IdEvent { get; set; }
        public DateTime EventDate { get; set; }
        public string EventName { get; set; }
        public string EventDescription { get; set; }
        public int IdUser { get; set; }
    }
}
