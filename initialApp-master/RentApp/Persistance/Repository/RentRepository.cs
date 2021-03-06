﻿using RentApp.Models.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace RentApp.Persistance.Repository
{
    public class RentRepository : Repository<Rent, int>, IRentRepository
    {
        public RentRepository(DbContext context) : base(context)
        {
        }
        protected RADBContext DemoContext { get { return context as RADBContext; } }

        public IEnumerable<Rent> GetAll(int pageIndex, int pageSize)
        {
            return DemoContext.Rents.Skip((pageIndex - 1) * pageSize).Take(pageSize);
        }
    }
}