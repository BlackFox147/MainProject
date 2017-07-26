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
        static OneUser loggin;

        public HttpResponseMessage Get()
        {
            //return ToJson(UsersDb.AllUsers.AsEnumerable());
            var list = ToJson(UsersDb.AllUsers.Where(p => p.Email == loggin.Email).AsEnumerable().First());
            return list;
        }

        public HttpResponseMessage Post(OneUser value)
        {
            int aaa = 0;
            var one = UsersDb.AllUsers.Where(p => p.Email == value.Email).AsEnumerable();
            if (one.Count()!=0)
            {
                return ToJson(2);            
            }

            UsersDb.AllUsers.Add(value);
            int s = UsersDb.SaveChanges();
            if (s == 1)
            {
                int size = UsersDb.AllUsers.Count();
                loggin = UsersDb.AllUsers.AsEnumerable().Last();
            }
            
            return ToJson(s);
        }

    }
}
