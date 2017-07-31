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

        public HttpResponseMessage Get()
        {                            
            var list = ToJson(UsersDb.UserProfiles.Include("Instructions").FirstOrDefault(p => p.Id == loggin.Id).Instructions);
            return list;            
        }

        public HttpResponseMessage Put(int id, UserProfile value)
        {
            int aaa = 0;
            UsersDb.Entry(value).State = EntityState.Modified;
            int s = UsersDb.SaveChanges();
            return ToJson(s);
        }


        public HttpResponseMessage Post(Instruction value)
        {
            int aaa = 0;
            DateTime date1 = DateTime.Now;
            var time = date1.ToLocalTime();          

            Instruction ins1 = new Instruction { DataTimeChange = DateTime.Now.ToString(), Name = value.Name, UserProfile = UsersDb.UserProfiles.FirstOrDefault(p => p.Id == loggin.Id) };
                  
            UsersDb.Instructions.Add(ins1);
                        
            int s = UsersDb.SaveChanges();



            return ToJson(s);
        }



        public HttpResponseMessage Delete(int id)
        {
            
            var del = UsersDb.Instructions.Include("Steps").FirstOrDefault(x => x.Id == id);
            int aaa = del.Steps.Count;
            for (var i = aaa - 1; i >=0; i--)
            {
                UsersDb.Steps.Remove(del.Steps.ElementAt(i));
                aaa = UsersDb.SaveChanges();
            }

            UsersDb.Instructions.Remove(del);
            var s = UsersDb.SaveChanges();
            return ToJson(s);
        }

    }
}
