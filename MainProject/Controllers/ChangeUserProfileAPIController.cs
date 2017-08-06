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

        public HttpResponseMessage Get(int id)
        {
            //var list = UsersDb.UserProfiles.Include("Instructions").FirstOrDefault(p => p.Id == id).Instructions;
            //var list1 = ToJson(UsersDb.UserProfiles.Include("Instructions").FirstOrDefault(p => p.Id == id).Instructions);

            var instr = UsersDb.Instructions.Include("Steps").Where(p => p.UserProfileId == id).AsEnumerable();

            //loggin.Profile.Instructions = instr.ToList();

            return ToJson(instr);
        }

        

        public HttpResponseMessage Put(int id, UserProfile value)
        {

            int aaa = 0;
            string oldName;
            using (UserContextNew db = new UserContextNew())
            {
                oldName = db.UserProfiles.FirstOrDefault(p => p.Id == loggin.Id).UserName;
            }
                
            UsersDb.Entry(value).State = EntityState.Modified;
            int s = UsersDb.SaveChanges();

            if (value.UserName != oldName)
            {
                var instr = UsersDb.Instructions.Where(p => p.UserProfileId == id).ToList();
                for (int i = 0; i < instr.Count; i++)
                {
                    instr[i].UserName = value.UserName;
                    UsersDb.Entry(instr[i]).State = EntityState.Modified;
                }
                UsersDb.SaveChanges();
            }
            
            return ToJson(s);
        }


        public HttpResponseMessage Post(Instruction value)
        {
            int aaa = 0;

            var prof = UsersDb.UserProfiles.FirstOrDefault(p => p.Id == loggin.Id);
            Instruction ins1 = new Instruction { UserName = prof.UserName, DataTimeChange = DateTime.Now.ToString(), Name = value.Name, UserProfile = prof };

            UsersDb.Instructions.Add(ins1);

            int s = UsersDb.SaveChanges();

            return ToJson(s);
        }



        public HttpResponseMessage Delete(int id)
        {

            var del = UsersDb.Instructions.Include("Steps").FirstOrDefault(x => x.Id == id);
            int aaa = del.Steps.Count;
            //for (var i = aaa - 1; i >=0; i--)
            //{
            //    UsersDb.Steps.Remove(del.Steps.ElementAt(i));
            //    aaa = UsersDb.SaveChanges();
            //}

            //UsersDb.Instructions.Remove(del);
            //var s = UsersDb.SaveChanges();
            DeleteInstruction(del);
            return ToJson(1);
        }

    }
}
