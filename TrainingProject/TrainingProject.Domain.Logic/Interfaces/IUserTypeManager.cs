using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TrainingProject.Domain.Logic.Models;

namespace TrainingProject.Domain.Logic.Interfaces
{
    public interface IUserTypeManager
    {
        Task<UserTypeDTO> GetUserTypesAsync(CancellationToken cancellationToken = default);
    }
}
