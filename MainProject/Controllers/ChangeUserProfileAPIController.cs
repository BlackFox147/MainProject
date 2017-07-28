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
    public class ChangeUserProfileAPIController : BaseAPIController
    {
        public HttpResponseMessage Put(int id, UserProfile value)
        {
            int aaa = 0;
            UsersDb.Entry(value).State = EntityState.Modified;
            int s = UsersDb.SaveChanges();
            return ToJson(s);
        }

    }
}
