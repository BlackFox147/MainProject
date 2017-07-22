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
    public class UserAPIController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(UsersDb.AllUsers.AsEnumerable());
        }

        public HttpResponseMessage Post(OneUser value)
        {
            int aaa =0;
            UsersDb.AllUsers.Add(value);
            var s = UsersDb.SaveChanges();
            return ToJson(s);
        }

        public HttpResponseMessage Put(int id, OneUser value)
        {
            int aaa =0;
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
