using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrainingProject.Data.Models;

namespace TrainingProject.Web
{
    public class AppContextInit
    {
        enum UserTypes
        {
            Admin = 1,
            Employee
        }
            
        
        public static void Init(AppContext context)
        {
            if (!context.UserTypes.Any())
            {
                context.UserTypes.Add(new UserType
                {
                    Name = "Admin",
                    IdUserType = (int)UserTypes.Admin
                }) ;
                context.UserTypes.Add(new UserType
                {
                    Name = "Employee",
                    IdUserType = (int)UserTypes.Employee
                });
                context.Users.Add(new User {
                    Name="Admin",
                    Login="ttt",
                    Password="hhh",
                    IdUserType=1
                });
                    
                
                context.SaveChanges();
            }
        }
    }
}
