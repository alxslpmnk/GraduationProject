using System;
using System.Collections.Generic;
using System.Text;

namespace TrainingProject.Domain.Logic.Models
{
    public class UserDTO
    {
        public Guid IdUser { get; set; }
        public string Name { get; set; }
        public string Login { get; set; }
        public string Password { get; set; }
        public int IdUserType { get; set; }
        public string Token { get; set; }
    }
}
