﻿using RentApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RentApp.Persistance.Repository
{
    public class AppUserRepository : Repository<AppUser, int>, IAppUserRepository
    {
        public AppUserRepository(DbContext context) : base(context)
        {
        }

        protected RADBContext DemoContext { get { return context as RADBContext; } }

        public IEnumerable<AppUser> GetAll(int pageIndex, int pageSize)
        {
            return DemoContext.AppUsers.Skip((pageIndex - 1) * pageSize).Take(pageSize);
        }
    }
}