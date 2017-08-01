using MainProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;


namespace WebApplication9.Controllers
{
    public class LoginAPIController : BaseAPIController
    {
        

        public HttpResponseMessage Get()
        {
            if (loggin == null)
            {
                return ToJson(UsersDb.OneUsers.AsEnumerable());
            }
            //var list = ToJson(UsersDb.OneUsers.Where(p => p.Email == loggin.Email).AsEnumerable().First());
            var list = ToJson(loggin);
            return list;
            //var one = UsersDb.AllUsers.Where(p => p.Email == loggin.Email).ToList().First();
            //var list = ToJson(one);
            //return list;
            //return ToJson(UsersDb.AllUsers.AsEnumerable());
        }

        public HttpResponseMessage Post(OneUser value)
        {
            int aaa = 0;

            var one = UsersDb.OneUsers.Include("Profile").FirstOrDefault(p => p.Email == value.Email);
           
            if (one!=null)
            {
                loggin = one;
                profile = UsersDb.UserProfiles.Include("Instructions").FirstOrDefault(p => p.Id == loggin.Id);
                loggin.Profile = profile;
                //var instr = UsersDb.Instructions.Include("Steps").Where(p => p.UserProfileId == profile.Id).AsEnumerable();
               
                //loggin.Profile.Instructions = instr.ToList();
            }

            //UsersDb.AllUsers.Add(value);
            //var s = UsersDb.SaveChanges();
            var s = 1;
            return ToJson(s);
        }

        public HttpResponseMessage Put(int id, OneUser value)
        {
            int aaa = 0;
            UsersDb.Entry(value).State = EntityState.Modified;
            return ToJson(UsersDb.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            int aaa = 0;
            UsersDb.OneUsers.Remove(UsersDb.OneUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(UsersDb.SaveChanges());
        }
    }
}
