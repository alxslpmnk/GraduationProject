using AutoMapper;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using TrainingProject.Data;
using TrainingProject.Domain.Logic.Interfaces;
using TrainingProject.Domain.Logic.Models;

namespace TrainingProject.Domain.Logic.Managers
{
    public class UserTypeManager : IUserTypeManager
    {
        private readonly IAppContext _servicesContext;
        private readonly IMapper _mapper;
        public UserTypeManager(IAppContext servicesContext, IMapper mapper)
        {
            _servicesContext = servicesContext;
            _mapper = mapper;
        }
        public async Task<UserTypeDTO> GetUserTypesAsync(CancellationToken cancellationToken = default)
        {
            var types = await _servicesContext.UserTypes.AsNoTracking().AllAsync(x => x.Name != null);
            return _mapper.Map<UserTypeDTO>(types);
        }
    }
}
