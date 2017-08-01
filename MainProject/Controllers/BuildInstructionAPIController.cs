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
            for(var i=0;i< value.Steps.Count; i++)
            {
                UsersDb.Entry(value.Steps.ElementAt(i)).State = EntityState.Modified;
            }          
            //UsersDb.Entry(value).State = EntityState.Modified;
            int s = UsersDb.SaveChanges();
            DateTime date1 = DateTime.Today;
            var time = date1.ToShortDateString();


            value.DataTimeChange = DateTime.Now.ToString();
            UsersDb.Entry(value).State = EntityState.Modified;
            s = UsersDb.SaveChanges();
            instruction = value;
            return ToJson(s);
        }


        public HttpResponseMessage Post(Step value)
        {
            int aaa = 0;

            DateTime date1 = DateTime.Today;
            var time = date1.ToShortDateString();

            instruction = UsersDb.Instructions.Include("Steps").FirstOrDefault(p => p.Id == value.InstructionId);

            Step step = new Step { DataTimeChange = DateTime.Now.ToString(), Name = value.Name, Number = (value.Number+1), Instruction = UsersDb.Instructions.FirstOrDefault(p => p.Id == value.InstructionId)};

            UsersDb.Steps.Add(step);

            int s = UsersDb.SaveChanges();
            if (s == 1)
            {        
                instruction.DataTimeChange = DateTime.Now.ToString();
                UsersDb.Entry(instruction).State = EntityState.Modified;
                s = UsersDb.SaveChanges();
            }
            return ToJson(s);
        }

        public HttpResponseMessage Delete(int id)
        {
            int aaa = 0;
            var del = UsersDb.Steps.FirstOrDefault(x => x.Id == id);
            instruction = UsersDb.Instructions.Include("Steps").FirstOrDefault(p => p.Id == del.InstructionId);

            for(var i=0;i< instruction.Steps.Count; i++)
            {
                if (instruction.Steps.ElementAt(i).Number > del.Number)
                {
                    instruction.Steps.ElementAt(i).Number -= 1;
                }
            }

            UsersDb.Steps.Remove(del);
            var s = UsersDb.SaveChanges();


            DateTime date1 = DateTime.Today;
            var time = date1.ToShortDateString();

            instruction.DataTimeChange = DateTime.Now.ToString();
            UsersDb.Entry(instruction).State = EntityState.Modified;
            s = UsersDb.SaveChanges();

            return ToJson(s);
        }

    }
}
