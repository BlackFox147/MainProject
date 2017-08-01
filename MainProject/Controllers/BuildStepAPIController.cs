using MainProject.Models;
using System;
using System.Collections.Generic;
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
            Step stepTemp = UsersDb.Steps.Include("Elements").FirstOrDefault(p => p.Id == id);
            var instr = UsersDb.Elements.Include("Materials").Where(p => p.StepId == stepTemp.Id).AsEnumerable();

            stepTemp.Elements = instr.ToList();
            var list = ToJson(stepTemp);
            return list;
        }
    }
}
