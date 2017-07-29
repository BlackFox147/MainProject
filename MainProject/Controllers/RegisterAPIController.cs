using MainProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication9.Controllers;

namespace MainProject.Controllers
{
    public class RegisterAPIController : BaseAPIController
    {        

        public HttpResponseMessage Get()
        {
            //return ToJson(UsersDb.AllUsers.AsEnumerable());

            var list = ToJson(loggin);
            return list;
        }

        public HttpResponseMessage Post(OneUser value)
        {
            int aaa = 0;
            var one = UsersDb.OneUsers.Where(p => p.Email == value.Email).AsEnumerable();
            if (one.Count() != 0)
            {
                return ToJson(2);
            }

            UsersDb.OneUsers.Add(value);
            int s = UsersDb.SaveChanges();
            if (s == 1)
            {                
                int size = UsersDb.OneUsers.Count();
                UserProfile profile1 = new UserProfile { Id = value.Id };
                UsersDb.UserProfiles.Add(profile1);
                UsersDb.SaveChanges();
                loggin = value;
               
                profile = UsersDb.UserProfiles.Include("Instructions").FirstOrDefault(p => p.Id == loggin.Id);
                loggin.Profile = profile;
                var instr = UsersDb.Instructions.Include("Steps").Where(p => p.UserProfileId == profile.Id).AsEnumerable();

                loggin.Profile.Instructions = instr.ToList();
                //loggin = UsersDb.OneUsers.AsEnumerable().Last();
            }

            return ToJson(s);
        }

    }
}
