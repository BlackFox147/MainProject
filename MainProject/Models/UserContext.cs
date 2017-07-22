using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MainProject.Models
{
    public class UserContext : DbContext
    {
        public DbSet<OneUser> AllUsers { get; set; }
    }
}