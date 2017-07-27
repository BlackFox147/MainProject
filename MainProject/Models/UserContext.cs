using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace MainProject.Models
{
    public class UserContextNew : DbContext
    {
        
        public DbSet<OneUser> OneUsers { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
    }
}