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
            //if (loggin == null)
            //{
            //    return ToJson(UsersDb.AllUsers.AsEnumerable());
            //}
            //var list = ToJson(UsersDb.AllUsers.Where(p => p.Email == loggin.Email).AsEnumerable().First());
            //return list;
            /////////////////////////////////
            //var one = UsersDb.AllUsers.Where(p => p.Email == loggin.Email).ToList().First();
            //var list = ToJson(one);
            //return list;
            return ToJson(UsersDb.Instructions.Include("Steps"));
        }

        public HttpResponseMessage Post(OneUser value)
        {
            int aaa = 0;

            //var one = UsersDb.AllUsers.Where(p => p.Email == value.Email).ToList();
            //if (one.Count !=0)
            //{
            //    loggin = one.First();
            //}
            //var s = 1;
            //return ToJson(s);


            UsersDb.OneUsers.Add(value);
            return ToJson(UsersDb.SaveChanges());

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
