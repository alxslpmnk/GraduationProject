using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace TrainingProject.Data.Models
{
    public class Request
    {
        public int IdRequest { get; set; }
        public int IdUser { get; set; }
        public string Content { get; set; }
        [ForeignKey("RequestStatusForeignKey")]
        public RequestStatus RequestStatus { get; set; }
    }
}
