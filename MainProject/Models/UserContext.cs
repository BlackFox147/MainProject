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
        public DbSet<Instruction> Instructions { get; set; }
        public DbSet<Step> Steps { get; set; }
        public DbSet<Element> Elements { get; set; }

    }
}