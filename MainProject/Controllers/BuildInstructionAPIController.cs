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
    public class BuildInstructionAPIController : BaseAPIController
    {
        protected static Instruction instruction;

        public HttpResponseMessage Get()
        {
            var list = ToJson(instruction);
            return list;
        }

        public HttpResponseMessage Put(int id, Instruction value)
        {
            int aaa = 0;
            for(var i=0;i< value.MaxCount; i++)
            {
                UsersDb.Entry(value.Steps.ElementAt(i)).State = EntityState.Modified;
            }          
            //UsersDb.Entry(value).State = EntityState.Modified;
            int s = UsersDb.SaveChanges();
            return ToJson(s);
        }


        public HttpResponseMessage Post(Step value)
        {
            int aaa = 0;

            instruction = UsersDb.Instructions.Include("Steps").FirstOrDefault(p => p.Id == value.InstructionId);

            Step step = new Step { Name = ("" + value.Number + 1), Number = (value.Number+1), Instruction = UsersDb.Instructions.FirstOrDefault(p => p.Id == value.InstructionId)};

            UsersDb.Steps.Add(step);

            int s = UsersDb.SaveChanges();
            if (s == 1)
            {                
                instruction.MaxCount += 1;
                UsersDb.Entry(instruction).State = EntityState.Modified;
                UsersDb.SaveChanges();
            }
            return ToJson(s);
        }

    }
}
