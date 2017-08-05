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
    public class BuildStepAPIController : BaseAPIController
    {
        protected static Step step;

        public HttpResponseMessage Get()
        {
            var list = ToJson(step);
            return list;
        }

        public HttpResponseMessage Get(int id)
        {
            workStepId = id;
            Step stepTemp = UsersDb.Steps.Include("Elements").FirstOrDefault(p => p.Id == id);        
        
            var list = ToJson(stepTemp);
            return list;
        }

        public HttpResponseMessage Put(int id, Step value)
        {

            int aaa = 0;
            for (var i = 0; i < value.Elements.Count; i++)
            {
                UsersDb.Entry(value.Elements.ElementAt(i)).State = EntityState.Modified;
            }
            UsersDb.Entry(value).State = EntityState.Modified;
            int s = UsersDb.SaveChanges();

            value.DataTimeChange = DateTime.Now.ToString();
            UsersDb.Entry(value).State = EntityState.Modified;
            s = UsersDb.SaveChanges();

            return ToJson(s);
        }



        public HttpResponseMessage Post(Element value)
        {
            int aaa = 0;

            Step step = UsersDb.Steps.Include("Elements").FirstOrDefault(p => p.Id == value.StepId);

            Element elem = new Element { Number = value.Number + 1, BlockType = value.BlockType, Step = UsersDb.Steps.FirstOrDefault(p => p.Id == value.StepId) };

            UsersDb.Elements.Add(elem);
            int s = UsersDb.SaveChanges();

            step.DataTimeChange = DateTime.Now.ToString();
            UsersDb.Entry(step).State = EntityState.Modified;
            s = UsersDb.SaveChanges();

            return ToJson(s);
        }


        public HttpResponseMessage Delete(int id)
        {
        
            var del = UsersDb.Elements.FirstOrDefault(x => x.Id == id);

            step = UsersDb.Steps.Include("Elements").FirstOrDefault(p => p.Id == del.StepId);

            //for (var i = 0; i < step.Elements.Count; i++)
            //{
            //    if (step.Elements.ElementAt(i).Number > del.Number)
            //    {
            //        step.Elements.ElementAt(i).Number -= 1;
            //    }
            //}

            //int aaa = del.Materials.Count;
            //for (var i = aaa - 1; i >= 0; i--)
            //{
            //    UsersDb.Materials.Remove(del.Materials.ElementAt(i));
            //    UsersDb.SaveChanges();
            //}!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            //UsersDb.Elements.Remove(del);
            //var s = UsersDb.SaveChanges();

            DeleteElement(del,step);

            step.DataTimeChange = DateTime.Now.ToString();
            UsersDb.Entry(step).State = EntityState.Modified;
            var s = UsersDb.SaveChanges();

            return ToJson(s);
        }

    }
}
