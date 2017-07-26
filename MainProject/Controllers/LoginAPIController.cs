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
        static OneUser loggin;

        public HttpResponseMessage Get()
        {
            if (loggin == null)
            {
                return ToJson(UsersDb.AllUsers.AsEnumerable());
            }
            var list = ToJson(UsersDb.AllUsers.Where(p => p.Email == loggin.Email).AsEnumerable().First());
            return list;
            //var one = UsersDb.AllUsers.Where(p => p.Email == loggin.Email).ToList().First();
            //var list = ToJson(one);
            //return list;
            //return ToJson(UsersDb.AllUsers.AsEnumerable());
        }

        public HttpResponseMessage Post(OneUser value)
        {
            int aaa = 0;

            var one = UsersDb.AllUsers.Where(p => p.Email == value.Email).ToList();
            if (one.Count != 0)
            {
                loggin = one.First();
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
            UsersDb.AllUsers.Remove(UsersDb.AllUsers.FirstOrDefault(x => x.Id == id));
            return ToJson(UsersDb.SaveChanges());
        }
    }
}
